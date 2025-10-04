import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

// Streaming version of generate-plan for real-time responses
export async function POST(request) {
  try {
    const { jobDescription } = await request.json();

    if (!jobDescription) {
      return NextResponse.json(
        { error: 'Job description is required' },
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

    const prompt = `
    Analyze this job description and create a comprehensive interview preparation plan:

    Job Description:
    ${jobDescription}

    Please provide a structured response in JSON format with the following sections:
    1. skills: Array of key technical skills required (max 8 skills)
    2. projects: Array of 3-4 mini project ideas with title and relevant icon emoji
    3. questions: Array of 4-5 practice interview questions with title and relevant icon emoji
    4. resources: Array of 3-4 learning resources/links with title and relevant icon emoji
    5. timeline: Array of 2-3 timeline/schedule items with title and relevant icon emoji

    Focus on practical, actionable items that directly relate to the job requirements.
    Make sure each item has a title and an appropriate icon emoji.
    
    Return only valid JSON without any markdown formatting or additional text.
    `;

    // Use streaming API
    const response = await ai.models.generateContentStream({
      model: 'gemini-2.0-flash-001',
      contents: prompt,
    });

    let fullText = '';
    
    // Collect all chunks
    for await (const chunk of response) {
      fullText += chunk.text;
    }
    
    // Clean up the response to ensure it's valid JSON
    fullText = fullText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    try {
      const parsedResponse = JSON.parse(fullText);
      return NextResponse.json(parsedResponse);
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      console.error('Generated text:', fullText);
      
      // Fallback response if JSON parsing fails
      return NextResponse.json({
        skills: ["JavaScript", "React", "Node.js", "SQL"],
        projects: [
          { title: "Build a Task Management App", icon: "✅" },
          { title: "Create REST API with Authentication", icon: "🔐" },
          { title: "Database Design Project", icon: "🗄️" }
        ],
        questions: [
          { title: "Explain React Component Lifecycle", icon: "⚛️" },
          { title: "Database Optimization Techniques", icon: "🚀" },
          { title: "API Security Best Practices", icon: "🔒" }
        ],
        resources: [
          { title: "React Official Documentation", icon: "📚" },
          { title: "Node.js Best Practices Guide", icon: "📖" },
          { title: "SQL Tutorial Series", icon: "🎥" }
        ],
        timeline: [
          { title: "Week 1-2: Core Concepts Review", icon: "📅" },
          { title: "Week 3-4: Project Implementation", icon: "⏱️" }
        ]
      });
    }

  } catch (error) {
    console.error('Error generating plan:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate plan. Please try again.',
        message: error.message,
        details: error.toString()
      },
      { status: 500 }
    );
  }
}
