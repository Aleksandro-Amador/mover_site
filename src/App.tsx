import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhoneAlt, FaLinkedinIn, FaYoutube, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import WhatsAppIcon from './assets/icon-whatsapp.svg'; // Use o arquivo isolado que criamos

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou o assistente virtual da MOVER Helipa. Como posso te ajudar hoje?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Olá! O assistente da MOVER está sendo configurado. Em breve estarei pronto para ajudar!",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Erro no chat:", error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div id="page" className="hfeed site min-h-screen bg-white">
      {/* Header Principal Corrigido */}
      <header id="masthead" className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a 
            href="https://moverhelipa.org.br/" 
            className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            MOVER
          </a>
          <nav className="space-x-6 text-gray-600 font-medium">
            <a href="#sobre-nos" className="hover:text-blue-600">Sobre nós</a>
            <a href="#contato" className="hover:text-blue-600">Contato</a>
          </nav>
        </div>
      </header>

      <main id="content" className="site-main">
        {/* Seção Hero */}
        <section className="relative h-[500px] flex items-center justify-center text-white bg-blue-900">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://moverhelipa.org.br/wp-content/uploads/2023/02/MagicEraser_230118_195138-1.png)' }}></div>
          <div className="relative z-20 text-center px-4">
            <h1 className="text-5xl font-bold mb-4">MOVER Helipa</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">Construindo o futuro juntos em Heliópolis.</p>
          </div>
        </section>

        {/* Seção Sobre Nós */}
        <section id="sobre-nos" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Nossa Atuação</h2>
                <p className="text-gray-600">O Movimento Organizacional Vencer, Educar e Realizar atua desde 2008 transformando a realidade local.</p>
            </div>
        </section>
      </main>

      {/* Rodapé Corrigido com o Novo Ícone */}
      <footer className="py-12 bg-black text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">© 2026 MOVER - Todos os direitos reservados</p>
          <a 
            href="http://wa.me/5511996744126" 
            target="_blank" 
            className="bg-[#25D366] text-white px-6 py-2 rounded-full font-bold flex items-center space-x-3 hover:scale-105 transition-transform"
          >
            <img src={WhatsAppIcon} alt="WhatsApp" className="w-6 h-6" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>
      </footer>

      {/* Chatbox Flutuante */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
              className="mb-4 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <div className="bg-[#1e428a] p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-2"><FaRobot /> <span>Assistente MOVER</span></div>
                <button onClick={() => setIsOpen(false)}><FaTimes /></button>
              </div>
              <div className="h-64 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
                {messages.map(m => (
                  <div key={m.id} className={`p-2 rounded-lg max-w-[80%] ${m.sender === 'user' ? 'bg-blue-600 text-white self-end' : 'bg-white text-gray-800 self-start shadow-sm'}`}>
                    {m.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
          style={{ background: isOpen ? '#666' : 'radial-gradient(circle at 35% 35%, #25D366 0%, #128C7E 100%)' }}
        >
          {isOpen ? <FaTimes size={28} color="white" /> : <img src={WhatsAppIcon} className="w-10 h-10" alt="Zap" />}
        </button>
      </div>
    </div>
  );
}

export default App;