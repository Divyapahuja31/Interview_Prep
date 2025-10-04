import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

// Test endpoint to verify Gemini API connection
export async function GET(request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { 
          error: 'GEMINI_API_KEY is not configured',
          message: 'Please add GEMINI_API_KEY to your .env.local file'
        },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    // Simple test query
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: 'Say "Hello, Gemini API is working!" in a friendly way.',
    });

    return NextResponse.json({
      success: true,
      message: 'Gemini API is connected successfully!',
      response: response.text,
      model: 'gemini-2.0-flash-001'
    });

  } catch (error) {
    console.error('Gemini API Test Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to connect to Gemini API',
        message: error.message,
        details: error.toString()
      },
      { status: 500 }
    );
  }
}

// Test POST endpoint with custom prompt
export async function POST(request) {
  try {
    const { prompt } = await request.json();
    
    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { 
          error: 'GEMINI_API_KEY is not configured',
          message: 'Please add GEMINI_API_KEY to your .env.local file'
        },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: prompt,
    });

    return NextResponse.json({
      success: true,
      response: response.text,
      model: 'gemini-2.0-flash-001'
    });

  } catch (error) {
    console.error('Gemini API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate content',
        message: error.message,
        details: error.toString()
      },
      { status: 500 }
    );
  }
}
