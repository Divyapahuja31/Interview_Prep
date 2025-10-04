"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VoiceChat() {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isSupported, setIsSupported] = useState(false);
  
  const recognitionRef = useRef(null);
  const synthRef = useRef(null);

  useEffect(() => {
    // Check if browser supports speech recognition and synthesis
    const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const speechSynthesis = window.speechSynthesis;
    
    if (speechRecognition && speechSynthesis) {
      setIsSupported(true);
      
      // Initialize speech recognition
      recognitionRef.current = new speechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
      };

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setTranscript(transcript);
        handleVoiceInput(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      // Initialize speech synthesis
      synthRef.current = speechSynthesis;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  const handleVoiceInput = async (userInput) => {
    // Add user message to conversation
    const newConversation = [...conversation, { type: 'user', text: userInput, timestamp: Date.now() }];
    setConversation(newConversation);

    try {
      // Generate AI response using Gemini
      const response = await fetch('/api/test-gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `You are a friendly AI interview prep assistant. The user said: "${userInput}". 
          Respond in a helpful, encouraging way about interview preparation. Keep your response under 100 words and conversational.`
        }),
      });

      const data = await response.json();
      const aiResponse = data.response || "I'm here to help with your interview preparation!";
      
      setResponse(aiResponse);
      
      // Add AI response to conversation
      const updatedConversation = [...newConversation, { type: 'ai', text: aiResponse, timestamp: Date.now() }];
      setConversation(updatedConversation);
      
      // Speak the response
      speakText(aiResponse);
      
    } catch (error) {
      console.error('Error getting AI response:', error);
      const fallbackResponse = "I'm here to help you prepare for your interviews! What would you like to practice?";
      setResponse(fallbackResponse);
      speakText(fallbackResponse);
    }
  };

  const speakText = (text) => {
    if (synthRef.current && text) {
      // Cancel any ongoing speech
      synthRef.current.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      synthRef.current.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const clearConversation = () => {
    setConversation([]);
    setTranscript('');
    setResponse('');
    stopSpeaking();
  };

  if (!isSupported) {
    return (
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Voice Chat Not Supported</h3>
          <p className="text-gray-600">
            Your browser doesn't support speech recognition or synthesis. 
            Please try using Chrome, Edge, or Safari.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/80"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ 
              scale: isListening ? [1, 1.2, 1] : isSpeaking ? [1, 1.1, 1] : 1,
              rotate: isSpeaking ? [0, 5, -5, 0] : 0
            }}
            transition={{ 
              duration: isListening ? 0.5 : isSpeaking ? 0.8 : 0,
              repeat: (isListening || isSpeaking) ? Infinity : 0
            }}
            className="text-4xl"
          >
            🤖
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">AI Voice Assistant</h3>
            <p className="text-sm text-gray-600">
              {isListening ? '🎤 Listening...' : isSpeaking ? '🔊 Speaking...' : '💬 Ready to chat'}
            </p>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={clearConversation}
          className="px-4 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white font-medium text-sm transition-all"
        >
          Clear Chat
        </motion.button>
      </div>

      {/* Conversation History */}
      {conversation.length > 0 && (
        <div className="mb-6 max-h-60 overflow-y-auto space-y-3">
          {conversation.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: message.type === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                message.type === 'user' 
                  ? 'bg-[#7ec4b6] text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                <p className="text-sm">{message.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Voice Controls */}
      <div className="flex items-center justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isListening ? stopListening : startListening}
          disabled={isSpeaking}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-[#7ec4b6] hover:bg-[#6eb4a6] text-white'
          } disabled:opacity-50`}
        >
          {isListening ? '🛑 Stop Listening' : '🎤 Start Voice Chat'}
        </motion.button>

        {isSpeaking && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={stopSpeaking}
            className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all"
          >
            🔇 Stop Speaking
          </motion.button>
        )}
      </div>

      {/* Current Transcript */}
      {transcript && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-blue-50 border-2 border-blue-200 rounded-xl"
        >
          <p className="text-sm text-blue-700">
            <strong>You said:</strong> "{transcript}"
          </p>
        </motion.div>
      )}

      {/* Instructions */}
      <div className="mt-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-3">
        <p className="text-xs text-yellow-800">
          <strong>💡 How to use:</strong> Click "Start Voice Chat" and speak about interview preparation. 
          The AI will respond with helpful advice and speak back to you!
        </p>
      </div>

      {/* Quick Voice Prompts */}
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Quick Voice Prompts:</p>
        <div className="flex flex-wrap gap-2">
          {[
            "Help me prepare for a technical interview",
            "What are common React interview questions?",
            "How do I explain my projects?",
            "Give me tips for behavioral interviews"
          ].map((prompt) => (
            <motion.button
              key={prompt}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleVoiceInput(prompt)}
              className="px-3 py-1 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-700 text-xs font-medium transition-all"
            >
              "{prompt}"
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
