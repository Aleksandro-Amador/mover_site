import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhoneAlt, FaLinkedinIn, FaYoutube, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import WhatsAppIcon from './assets/icon-whatsapp.svg'

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollWrap = document.querySelector('.hfe-scroll-to-top-wrap');
      if (scrollWrap) {
        if (window.scrollY > 100) {
          scrollWrap.classList.remove('hfe-scroll-to-top-hide');
        } else {
          scrollWrap.classList.add('hfe-scroll-to-top-hide');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="page" className="hfeed site">
      {/* Header Principal */}
      <header id="masthead" className="bg-white shadow-sm py-4 sticky top-0 z-50" itemScope itemType="https://schema.org/WPHeader">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a 
            href="https://moverhelipa.org.br/" 
            title="MOVER | Movimento Organizacional Vencer, Educar e Realizar" 
            rel="home"
            className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            MOVER
          </a>
          <nav className="space-x-6 text-gray-600 font-medium">
            <a href="#sobre-nos" className="hover:text-blue-600 transition-colors">Sobre nós</a>
            <a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      <main id="content" className="site-main">
        {/* Top Bar Blue */}
        <section className="bg-[#1e428a] py-2">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white font-bold flex items-center gap-4 text-sm">
              <a href="mailto:moverhelipa@gmail.com">moverhelipa@gmail.com</a>
              <span className="hidden md:inline">|</span>
              <a href="tel:5511996744126">(11) 99674-4126</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"><FaFacebookF /></a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"><FaInstagram /></a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"><FaLinkedinIn /></a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"><FaYoutube /></a>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section id="inicio" className="relative h-[600px] flex items-center justify-center overflow-hidden text-white">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://moverhelipa.org.br/wp-content/uploads/2023/02/MagicEraser_230118_195138-1.png)' }}></div>
          <div className="relative z-20 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">MOVER Helipa</h1>
            <p className="text-xl md:text-3xl max-w-4xl mx-auto mb-10 drop-shadow-lg">Juntos podemos tornar sonhos em realidade.</p>
            <a href="#" className="inline-block bg-white text-gray-900 px-12 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition shadow-2xl">Inscreva-se</a>
          </div>
        </section>

        {/* Sobre Nós */}
        <section id="sobre-nos" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 border-l-4 border-blue-600 pl-4">Sobre nós</h2>
              <p className="text-gray-700 leading-relaxed mb-4">O MOVER é uma organização da sociedade civil, sem fins lucrativos, fundada em 2008.</p>
              <p className="text-gray-700 leading-relaxed">Nossa missão é enfrentar os problemas vividos pela comunidade de Heliópolis.</p>
            </div>
            <img src="https://moverhelipa.org.br/wp-content/uploads/2023/02/MagicEraser_230118_195138-1-768x543.png" alt="Sobre" className="rounded-lg shadow-xl" />
          </div>
        </section>
      </main>

      <footer id="colophon" className="py-12 px-4 bg-black text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div>
            <img width="120" src="https://moverhelipa.org.br/wp-content/uploads/2023/02/F60366C7-E702-45A7-A336-2ED7BDE66F68-2-300x300.png" alt="Logo" className="brightness-0 invert mx-auto md:mx-0" />
          </div>
          <div>
            <p className="font-bold text-gray-300">MOVER | Movimento Organizacional Vencer, Educar e Realizar</p>
            <p className="text-gray-500 text-sm">Todos os direitos reservados @Mover - 2026</p>
          </div>
          <div>
            <a 
              href="http://wa.me/5511996744126" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] text-white px-6 py-2 rounded-full font-bold hover:bg-[#128C7E] transition-all flex items-center space-x-3 shadow-lg hover:scale-105"
            >
              <img src={WhatsAppIcon} alt="WhatsApp" className="w-6 h-6" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Chat e Botão Flutuante */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="mb-4 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="bg-[#1e428a] p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FaRobot />
                  <p className="text-sm font-bold">Assistente MOVER</p>
                </div>
                <button onClick={() => setIsOpen(false)}><FaTimes /></button>
              </div>
              <div className="h-80 p-4 bg-gray-50 overflow-y-auto text-sm flex flex-col gap-3">
                {messages.map((msg) => (
                  <div key={msg.id} className={`max-w-[85%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-[#1e428a] text-white self-end' : 'bg-white text-gray-700 self-start'}`}>
                    {msg.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <div className="p-3 bg-white border-t flex gap-2">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Dúvidas?" 
                  className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-xs outline-none"
                />
                <button onClick={handleSendMessage} className="bg-[#1e428a] text-white p-2 rounded-full"><FaPaperPlane size={12} /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white border border-white/10"
          style={{ background: isOpen ? '#666' : 'radial-gradient(circle at 35% 35%, #25D366 0%, #128C7E 100%)' }}
        >
          {isOpen ? <FaTimes size={28} /> : <img src={WhatsAppIcon} alt="Zap" className="w-10 h-10 drop-shadow-md" />}
        </motion.button>
      </div>
    </div>
  );
}

export default App;