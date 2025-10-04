import { NextResponse } from 'next/server';
import vm from 'vm';

export async function POST(request) {
  try {
    const { code, language } = await request.json();

    if (!code) {
      return NextResponse.json(
        { error: 'Code is required' },
        { status: 400 }
      );
    }

    // Only support JavaScript for now
    if (language && language !== 'javascript') {
      return NextResponse.json(
        { error: 'Only JavaScript is supported currently' },
        { status: 400 }
      );
    }

    // Security: Check for dangerous patterns
    const dangerousPatterns = [
      /require\s*\(/,
      /import\s+/,
      /process\./,
      /global\./,
      /eval\s*\(/,
      /Function\s*\(/,
      /setTimeout/,
      /setInterval/,
      /fetch\s*\(/,
      /XMLHttpRequest/,
      /document\./,
      /window\./,
      /localStorage/,
      /sessionStorage/,
      /fs\./,
      /child_process/,
      /os\./
    ];

    for (const pattern of dangerousPatterns) {
      if (pattern.test(code)) {
        return NextResponse.json(
          { error: 'Code contains restricted operations' },
          { status: 400 }
        );
      }
    }

    // Capture console output
    let output = [];
    const mockConsole = {
      log: (...args) => output.push(args.map(arg => String(arg)).join(' ')),
      error: (...args) => output.push('ERROR: ' + args.map(arg => String(arg)).join(' ')),
      warn: (...args) => output.push('WARN: ' + args.map(arg => String(arg)).join(' ')),
    };

    // Create a safe execution context
    const context = {
      console: mockConsole,
      Math,
      Date,
      JSON,
      Array,
      Object,
      String,
      Number,
      Boolean,
      RegExp,
      parseInt,
      parseFloat,
      isNaN,
      isFinite,
      // Add some common utilities
      setTimeout: null, // Disabled for security
      setInterval: null, // Disabled for security
    };

    try {
      // Execute code with timeout
      const script = new vm.Script(code, { timeout: 5000 });
      const vmContext = vm.createContext(context);
      
      const result = script.runInContext(vmContext, {
        timeout: 5000,
        breakOnSigint: true
      });

      return NextResponse.json({
        success: true,
        output: output.join('\n'),
        result: result !== undefined ? String(result) : undefined,
        executionTime: Date.now()
      });

    } catch (executionError) {
      return NextResponse.json({
        success: false,
        error: executionError.message,
        output: output.join('\n')
      });
    }

  } catch (error) {
    console.error('Code execution error:', error);
    return NextResponse.json(
      { error: 'Failed to execute code' },
      { status: 500 }
    );
  }
}
