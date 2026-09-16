import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, Network } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini, initializeChat } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! 👋 I\'m Reski\'s AI Assistant. Ask me anything about web development skills, network certifications, or projects!', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Pre-initialize chat session to reduce first-response latency
  useEffect(() => {
    const warmup = async () => {
      try {
        await initializeChat(); // Just initialize, don't send empty message
        console.log("Chat session pre-initialized");
      } catch (e) {
        console.log("Chat warmup failed:", e);
      }
    };
    warmup();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input);
      const botMessage: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = { role: 'model', text: "Sorry, I'm having trouble connecting. Please try again.", timestamp: new Date() };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 group transition-all duration-300 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100'}`}
        aria-label="Open AI Chat"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#a87cff] to-[#6f42c1] rounded-[22px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>

          {/* Button */}
          <div className="relative p-4 bg-gradient-to-tr from-[#a87cff] to-[#6f42c1] rounded-[22px] shadow-2xl shadow-[#a87cff]/40 hover:shadow-[#a87cff]/60 hover:scale-110 hover:-rotate-3 transition-all duration-300">
            <MessageSquare className="w-7 h-7 text-white" />

            {/* Pulse indicator */}
            <span className="absolute -top-1 -right-1 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d9c7ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-[#c9a9ff] border-2 border-white shadow-lg"></span>
            </span>
          </div>
        </div>
      </button>

      {/* Chat Interface */}
      <div
        className={`fixed z-50 bottom-6 right-6 w-[95vw] sm:w-[420px] bg-[#140b29] border-2 border-white/10 rounded-3xl shadow-2xl shadow-[#a87cff]/20 flex flex-col transition-all duration-500 transform origin-bottom-right ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-10 opacity-0 pointer-events-none'}`}
        style={{ height: '650px', maxHeight: '90vh' }}
      >
        {/* Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-white/5 to-white/0 rounded-t-3xl">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-t-2xl"></div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-tr from-[#a87cff] to-[#6f42c1] rounded-2xl flex items-center justify-center shadow-xl shadow-[#a87cff]/30">
                <Bot className="w-7 h-7 text-white" />
              </div>
              {/* Active indicator */}
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#c9a9ff] border-2 border-[#0a0101] rounded-full shadow-lg"></span>
            </div>
            <div>
              <h3 className="font-black text-white text-base tracking-tight flex items-center gap-2">
                AI Portfolio Assistant
                <Sparkles className="w-4 h-4 text-[#eadfff] animate-pulse" />
              </h3>
              <p className="text-[11px] text-green-400 font-bold flex items-center gap-1.5 uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#d9c7ff] rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></span>
                Online & Ready
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2.5 text-[#cdb8ff] hover:text-white hover:bg-white/10 rounded-xl transition-all relative z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-[#120a24] scrollbar-thin scrollbar-thumb-[#a87cff]/40 scrollbar-track-transparent">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-reveal-up`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className={`relative max-w-[85%] rounded-[20px] px-5 py-3.5 text-sm leading-relaxed shadow-xl ${msg.role === 'user'
                ? 'bg-gradient-to-br from-[#a87cff] to-[#6f42c1] text-white rounded-tr-md'
                : 'bg-[#1a1a1a] border border-white/10 text-slate-200 rounded-tl-md'
                }`}>
                {msg.role === 'model' && (
                  <div className="flex items-center gap-2 mb-2 text-[10px] text-[#dfceff] font-black uppercase tracking-widest">
                    <Network className="w-3 h-3" />
                    Reski's AI
                  </div>
                )}
                <div className="whitespace-pre-wrap">{msg.text}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start animate-reveal-up">
              <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl rounded-tl-md px-6 py-4">
                <div className="flex gap-2 items-center">
                  <div className="w-2.5 h-2.5 bg-[#a87cff] rounded-full animate-bounce"></div>
                  <div className="w-2.5 h-2.5 bg-[#a87cff] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2.5 h-2.5 bg-[#a87cff] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  <span className="ml-2 text-xs text-[#cdb8ff]">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-5 border-t border-white/10 bg-[#120a24] rounded-b-3xl">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about skills, projects, or certifications..."
              className="flex-1 bg-[#1a1a1a] border border-[#a87cff]/30 text-white text-sm rounded-2xl px-5 py-3.5 focus:outline-none focus:border-[#a87cff] focus:ring-2 focus:ring-[#a87cff]/50 transition-all placeholder:text-slate-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-br from-[#a87cff] to-[#6f42c1] hover:from-[#b794ff] hover:to-[#7d52d1] disabled:opacity-40 disabled:scale-95 text-white p-3.5 rounded-2xl shadow-xl shadow-[#a87cff]/30 transition-all active:scale-90 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center justify-center gap-3 mt-4 opacity-40">
            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <p className="text-[10px] text-white font-mono uppercase tracking-[0.25em] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              Powered by Gemini 3
            </p>
            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
