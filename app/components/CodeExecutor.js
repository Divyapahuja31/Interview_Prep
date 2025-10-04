"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CodeExecutor() {
  const [code, setCode] = useState('// Write your JavaScript code here\nconsole.log("Hello, World!");');
  const [output, setOutput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [error, setError] = useState('');

  const executeCode = async () => {
    setIsExecuting(true);
    setOutput('');
    setError('');

    try {
      const response = await fetch('/api/execute-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
          language: 'javascript'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setOutput(result.output || (result.result ? `Result: ${result.result}` : 'Code executed successfully'));
      } else {
        setError(result.error || 'Execution failed');
      }
    } catch (err) {
      setError('Failed to execute code: ' + err.message);
    }

    setIsExecuting(false);
  };

  const clearOutput = () => {
    setOutput('');
    setError('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">🚀 Code Executor</h3>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearOutput}
            className="px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white font-medium text-sm transition-all"
          >
            Clear
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={executeCode}
            disabled={isExecuting}
            className="px-4 py-2 rounded-lg bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white font-medium text-sm disabled:opacity-50 transition-all"
          >
            {isExecuting ? '⏳ Running...' : '▶️ Run Code'}
          </motion.button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          JavaScript Code:
        </label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-40 p-4 rounded-xl border-2 border-gray-300 focus:border-[#7ec4b6] focus:outline-none resize-none bg-gray-50 font-mono text-sm"
          placeholder="Write your JavaScript code here..."
        />
      </div>

      {/* Output */}
      {(output || error) && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Output:
          </label>
          <div className={`p-4 rounded-xl font-mono text-sm whitespace-pre-wrap ${
            error ? 'bg-red-50 text-red-700 border-2 border-red-200' : 'bg-green-50 text-green-700 border-2 border-green-200'
          }`}>
            {error || output || 'No output'}
          </div>
        </div>
      )}

      {/* Security Notice */}
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-3">
        <p className="text-xs text-yellow-800">
          <strong>🔒 Security Notice:</strong> This code executor runs in a sandboxed environment. 
          Dangerous operations like file system access, network requests, and imports are restricted.
        </p>
      </div>

      {/* Example Code Snippets */}
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Quick Examples:</p>
        <div className="flex flex-wrap gap-2">
          {[
            { name: 'Hello World', code: 'console.log("Hello, World!");' },
            { name: 'Array Methods', code: 'const arr = [1, 2, 3, 4, 5];\nconsole.log("Original:", arr);\nconsole.log("Doubled:", arr.map(x => x * 2));' },
            { name: 'Function', code: 'function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n-1) + fibonacci(n-2);\n}\n\nconsole.log("Fibonacci(8):", fibonacci(8));' },
            { name: 'Object', code: 'const person = {\n  name: "Alice",\n  age: 30,\n  greet() {\n    return `Hello, I\'m ${this.name}!`;\n  }\n};\n\nconsole.log(person.greet());' }
          ].map((example) => (
            <motion.button
              key={example.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCode(example.code)}
              className="px-3 py-1 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs font-medium transition-all"
            >
              {example.name}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
