import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhoneAlt, FaLinkedinIn, FaYoutube, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import SocialIcons from './assets/Social-Media-Logo-collection-CIRCLE-2023.svg';

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
      {/* HEADER CORRIGIDO - SEM TAGS ANINHADAS INVÁLIDAS */}
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
            <a href="#sobre-nos" className="hover:text-blue-600">Sobre nós</a>
            <a href="#projetos" className="hover:text-blue-600">Projetos</a>
            <a href="#contato" className="hover:text-blue-600">Contato</a>
          </nav>
        </div>
      </header>

      <main id="content" className="site-main">
        {/* BARRA SUPERIOR AZUL (ELEMENTOR STYLE) */}
        <div data-elementor-type="wp-post" data-elementor-id="16" className="elementor elementor-16">
          <section className="elementor-section py-2" style={{ backgroundColor: '#1e428a' }}>
            <div className="elementor-container mx-auto px-4 flex justify-between items-center">
              <div className="elementor-column">
                <p className="text-white m-0 flex items-center font-bold text-sm">
                  <a style={{ color: '#ffffff', textDecoration: 'none' }} href="mailto:moverhelipa@gmail.com" target="_blank" rel="noopener">moverhelipa@gmail.com</a>
                  <span className="mx-6">|</span>
                  <a style={{ color: '#ffffff', textDecoration: 'none' }} href="tel:5511996744126">(11) 99674-4126</a>
                </p>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-white hover:scale-110 transition-transform"><FaFacebookF size={16} /></a>
                <a href="#" className="text-white hover:scale-110 transition-transform"><FaInstagram size={18} /></a>
                <a href="#" className="text-white hover:scale-110 transition-transform"><FaWhatsapp size={18} /></a>
              </div>
            </div>
          </section>

          {/* HERO SECTION */}
          <section id="inicio" className="relative h-[600px] flex items-center justify-center overflow-hidden text-white">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://moverhelipa.org.br/wp-content/uploads/2023/02/MagicEraser_230118_195138-1.png)' }}></div>
            <div className="relative z-20 text-center px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                <span style={{ color: '#0459A7' }}>M</span><span style={{ color: '#ed1e24' }}>o</span><span style={{ color: '#026745' }}>v</span><span style={{ color: '#fff100' }}>e</span><span style={{ color: '#666' }}>r</span> <span style={{ color: '#0459A7' }}>H</span><span style={{ color: '#ed1e24' }}>e</span><span style={{ color: '#026745' }}>l</span><span style={{ color: '#fff100' }}>i</span><span style={{ color: '#666' }}>p</span><span style={{ color: '#0459A7' }}>a</span>
              </h1>
              <p className="text-xl md:text-3xl max-w-4xl mx-auto mb-10 font-medium leading-tight drop-shadow-lg">
                Juntos podemos tornar sonhos em realidade, movendo e transformando vidas nós construímos o futuro.
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScHZSjy2ZPUAeHFOlJxGLX9bFGo0Rj1UBTN8QPfSGvYJNpwzg/viewform" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-gray-900 px-12 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition shadow-2xl border-2 border-white">
                Inscreva-se
              </a>
            </div>
          </section>

          {/* CATA-VENTO SECTION */}
          <section className="relative py-24 bg-gray-50 overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center select-none">
              <span className="text-[20vw] font-black rotate-[-15deg] whitespace-nowrap text-gray-900">MOVER HELIPA</span>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
              <div className="mb-8 flex justify-center">
                <div className="relative w-32 h-32">
                  <img src="https://moverhelipa.org.br/wp-content/uploads/2023/02/F60366C7-E702-45A7-A336-2ED7BDE66F68-2-300x300.png" alt="Cata-vento" className="w-full h-full object-contain animate-spin-slow" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Juntos podemos tornar sonhos em realidade, movendo e transformando vidas nós construímos o futuro.
              </h2>
            </div>
          </section>

          {/* SEÇÃO PROGRAMAS (COZINHA) */}
          <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <img src="https://moverhelipa.org.br/wp-content/uploads/2024/10/escola-1024x1024.jpg" alt="Culinária 1" className="w-full h-[300px] md:h-[450px] object-cover" />
                  <img src="https://moverhelipa.org.br/wp-content/uploads/2024/10/cozinha-escola-1024x1024.jpg" alt="Culinária 2" className="w-full h-[300px] md:h-[450px] object-cover" />
                </div>
              </div>
              
              {/* LOGOS PARCEIROS */}
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 py-8 border-y border-gray-100">
                <img src="https://moverhelipa.org.br/wp-content/uploads/2023/02/F60366C7-E702-45A7-A336-2ED7BDE66F68-2-300x300.png" alt="Logo Mover" className="h-12 w-auto" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Logo_do_Governo_Federal_do_Brasil_%282023%29.svg/2560px-Logo_do_Governo_Federal_do_Brasil_%282023%29.svg.png" alt="Governo Federal" className="h-8 w-auto" />
              </div>
            </div>
          </section>

          {/* SOBRE NÓS */}
          <section id="sobre-nos" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 border-l-4 border-blue-600 pl-4">Sobre nós</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>O <strong>MOVER</strong> é uma organização da sociedade civil, sem fins lucrativos, fundada em 2008, com sede em <strong>Heliópolis</strong>.</p>
                  <p>Nossa missão é enfrentar os problemas vividos pela comunidade, focando em educação, cultura, esporte e saúde.</p>
                </div>
              </div>
              <img src="https://moverhelipa.org.br/wp-content/uploads/2023/02/MagicEraser_230118_195138-1-768x543.png" alt="Sobre nós" className="rounded-lg shadow-xl" />
            </div>
          </section>

          {/* PROJETOS */}
          <section id="projetos" className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Nossos Projetos</h2>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <img src="https://moverhelipa.org.br/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-17-at-19.25.45.webp" className="w-full h-64 object-cover" />
                <div className="p-6"><h3 className="text-xl font-bold mb-2">Centro de Qualificação</h3><p className="text-gray-600 text-sm">Cursos de qualificação profissional.</p></div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <img src="https://moverhelipa.org.br/wp-content/uploads/2024/10/escola-1024x1024.jpg" className="w-full h-64 object-cover" />
                <div className="p-6"><h3 className="text-xl font-bold mb-2">Rede Cozinha Escola</h3><p className="text-gray-600 text-sm">Parceria servindo 400 refeições/dia.</p></div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <img src="https://moverhelipa.org.br/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-08-at-00.32.57.jpeg" className="w-full h-64 object-cover" />
                <div className="p-6"><h3 className="text-xl font-bold mb-2">Cozinha Solidária</h3><p className="text-gray-600 text-sm">Combate à fome com nutrição.</p></div>
              </div>
            </div>
          </section>

          {/* IMPACTOS */}
          <section id="galeria" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Nossos Impactos</h2>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center font-bold text-blue-600">
              <div><div className="text-4xl">25.000+</div><p className="text-gray-600">Cestas básicas</p></div>
              <div><div className="text-4xl">400.000+</div><p className="text-gray-600">Marmitas entregues</p></div>
              <div><div className="text-4xl">30+</div><p className="text-gray-600">Cozinhas acompanhadas</p></div>
            </div>
          </section>

          {/* CONTATO */}
          <section id="contato" className="py-20 px-4 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-8">Contato</h2>
                <ul className="space-y-4">
                  <li>📧 moverhelipa@gmail.com</li>
                  <li>📱 (11) 9 9674-4126</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl text-gray-900">
                <form className="space-y-4">
                  <input type="text" className="w-full p-2 border rounded" placeholder="Seu nome" />
                  <textarea className="w-full p-2 border rounded h-32" placeholder="Sua mensagem"></textarea>
                  <button className="w-full bg-blue-600 text-white py-3 rounded font-bold">Enviar</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER CORRIGIDO */}
      <footer id="colophon" className="py-12 px-4 bg-black text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <img width="120" src="https://moverhelipa.org.br/wp-content/uploads/2023/02/F60366C7-E702-45A7-A336-2ED7BDE66F68-2-300x300.png" alt="Logo Footer" className="brightness-0 invert mx-auto md:mx-0" />
          </div>
          <div>
            <p className="font-bold text-gray-300">MOVER | Movimento Organizacional Vencer, Educar e Realizar</p>
            <p className="text-gray-500 text-sm">Todos os direitos reservados @Mover - 2026</p>
          </div>
          <div className="mt-8 md:mt-0">
            <a href="http://wa.me/5511996744126" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 transition flex items-center space-x-3 shadow-lg">
              <div className="w-6 h-6 overflow-hidden relative flex items-center justify-center bg-white rounded-full">
                <img 
                  src={SocialIcons} 
                  alt="WhatsApp" 
                  className="absolute max-w-none"
                  style={{ width: '240px', left: '-5px', top: '-5px' }} 
                />
              </div>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </footer>

      {/* CHATBOX FLUTUANTE */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="mb-4 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border flex flex-col">
              <div className="bg-[#1e428a] p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-3"><FaRobot /> <div><p className="text-sm font-bold leading-none">Assistente MOVER</p></div></div>
                <button onClick={() => setIsOpen(false)}><FaTimes /></button>
              </div>
              <div className="h-80 p-4 bg-gray-50 overflow-y-auto text-sm flex flex-col gap-3">
                {messages.map((msg) => (
                  <div key={msg.id} className={`max-w-[85%] p-3 rounded-2xl shadow-sm ${msg.sender === 'user' ? 'bg-[#1e428a] text-white self-end' : 'bg-white text-gray-700 self-start'}`}>{msg.text}</div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <div className="p-3 bg-white border-t flex gap-2">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-xs outline-none" placeholder="Digite..." />
                <button onClick={handleSendMessage} className="bg-[#1e428a] text-white p-2 rounded-full"><FaPaperPlane size={12} /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button whileHover={{ scale: 1.1 }} onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white" style={{ background: isOpen ? '#666' : 'radial-gradient(circle at 35% 35%, #25D366 0%, #128C7E 100%)' }}>
          {isOpen ? <FaTimes size={28} /> : <FaWhatsapp size={38} />}
        </motion.button>
      </div>
    </div>
  );
}

export default App;