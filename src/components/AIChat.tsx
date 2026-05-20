import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'ai', content: 'Halo! Saya adalah Digital Twin (Asisten AI) dari Rafif Ahmad Darmawan. Ada yang ingin ditanyakan tentang karya, minat (editing, film, dll), atau pengalaman Rafif?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: userMsg.content,
          history: messages.slice(1) // exclude first intro message to save tokens if needed, but keeping it is fine
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'ai', content: 'Maaf, terjadi kesalahan atau API key belum dikonfigurasi. Silakan atur GEMINI_API_KEY di pengaturan UI.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] z-50 glass-panel flex flex-col shadow-2xl overflow-hidden border-white/20"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10 bg-[#0a0a0a] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center text-white/50 border border-white/20">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-serif italic text-lg tracking-wide">Asisten Virtual</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/50">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors p-2"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-black/80 backdrop-blur-3xl">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-white text-black' : 'bg-transparent border border-white/20 text-white'}`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`px-4 py-3 text-sm leading-relaxed max-w-[80%] font-light ${msg.role === 'user' ? 'bg-white text-black' : 'bg-transparent border border-white/10 text-white/80'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 flex-shrink-0 bg-transparent border border-white/20 text-white flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <div className="px-4 py-3 bg-transparent border border-white/10 text-white/40 flex items-center gap-2 text-sm font-light">
                    <Loader2 size={14} className="animate-spin" /> Mengetik...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-[#0a0a0a]">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ketik balasan..."
                  className="w-full bg-transparent border border-white/20 py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-white/50 transition-colors text-white font-light rounded-none placeholder:text-white/30"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-0 h-full px-4 text-white hover:bg-white/5 transition-colors disabled:opacity-30 disabled:hover:bg-transparent border-l border-white/20 flex items-center justify-center"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-white text-black flex items-center justify-center shadow-2xl shadow-white/10 rounded-full"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
}
