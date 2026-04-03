import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { FaPhoneAlt, FaTimes,  } from 'react-icons/fa';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPaperPlane, FaRobot } from 'react-icons/fa6';
import logo_mover_catavento from './assets/logos/logo_2_site_mover_catavento.png';

// import { GoogleGenAI } from "@google/genai";

// Inicialização do Gemini - Próximo project - criar chat IA
// const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
// const model = "gemini-3-flash-preview";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// 🏗️ COMPONENTE REUTILIZÁVEL: LogoCatavento
// Centralizamos a lógica aqui. Se mudar o logo, muda em todo lugar.
const LogoCatavento = ({ comBrilho = false, tamanho = "h-16" }) => (
  <div className={`relative ${tamanho} aspect-square flex items-center justify-center`}>
    {comBrilho && (
      <div className="absolute inset-0 bg-[#0459A7] rounded-full opacity-20 blur-xl animate-pulse"></div>
    )}
    <img 
      src={logo_mover_catavento} 
      className="w-full h-full object-contain animate-spin-slow" 
      alt="Logo MOVER" 
    />
  </div>
);

// 1. Lógica do Ímã (mouseX, mouseY...)
export default function App() {
  
  // 2. DEFINIÇÃO DAS VARIÁVEIS (Onde o vermelho deve sumir)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Aqui criamos o mouseX e mouseY que o botão vai ler
  const mouseX = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 20 });

  // 3. A FUNÇÃO handleMouseMove (Também antes do return)
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Aumentamos para o movimento ser mais visível no site
    x.set(e.clientX - centerX); // Ex.: * 0.4); // O 0.4 dá uma amplitude maior
    y.set(e.clientY - centerY); // Ex.: * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // 2. States do Chat (isOpen, messages...)
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

  // 3. Funções de Apoio (scrollToBottom...)
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
      // Bloco de IA comentado para evitar erros de API Key
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
  }; // Verifique se esta chave fecha a função corretamente

  useEffect(() => {
    // Simulação básica do comportamento do Elementor/jQuery se necessário
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
      <div id="page" className="min-h-screen bg-white">
        
        {/* 🟦 SEÇÃO 1.0: TOP BAR (Barra de Contato Superior) */}
        <section className="relative z-[60] py-2" style={{ backgroundColor: '#1e428a' }}>
          <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
            
            {/* 📞 Bloco de Contatos Diretos */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              
              {/* Item: E-MAIL com Expansão */}
            <a 
              href="mailto:moverhelipa@gmail.com" 
              className="flex items-center gap-2 text-white font-bold text-[11px] md:text-sm transition-all duration-300 hover:scale-105 hover:text-white group"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <FaEnvelope 
                size={14} 
                className="text-white transition-colors" 
              />
              <span className="text-white">
                moverhelipa@gmail.com
              </span>
            </a>

              {/* Divisor Visual */}
              <span className="text-white opacity-50 hidden md:block">|</span>

              {/* Item: TELEFONE com Expansão */}
              <a 
                href="tel:5511996744126" 
                className="flex items-center gap-2 text-white font-bold text-[11px] md:text-sm transition-all duration-300 hover:scale-105 hover:text-white group"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <FaPhoneAlt size={12}
                className="text-white transition-colors"
              />
              <span className="text-white">
                  (11) 99674-4126
                </span>
              </a>
            </div>

            {/* 📱 Bloco de Redes Sociais */}
            <div className="flex items-center gap-3">
              <a style={{ background: 'linear-gradient(135deg, #1877F2 0%, #0A56B3 100%)', color: '#ffffff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hover:scale-110 transition-all" href="https://www.facebook.com/people/Mover-Helipa/100095108914003/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={14} />
              </a>
              <a style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: '#ffffff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hover:scale-110 transition-all" href="https://www.instagram.com/mover_helipa/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={16} />
              </a>
              <a style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', color: '#ffffff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hover:scale-110 transition-all" href="https://wa.me/5511996744126" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={16} />
              </a>
              <a style={{ background: 'linear-gradient(135deg, #0077B5 0%, #005983 100%)', color: '#ffffff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hover:scale-110 transition-all" href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={14} />
              </a>
              <a style={{ background: 'linear-gradient(135deg, #FF0000 0%, #C4302B 100%)', color: '#ffffff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hover:scale-110 transition-all" href="#" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={14} />
              </a>
            </div>
            {/* FIM DAS REDES SOCIAIS */}

          </div> {/* FECHA A DIV MAX-W-4XL */}
        </section> {/* FECHA A SECTION 1.0 */}

        {/* ⚪ SEÇÃO 2.0: HEADER BRANCO (Assinatura de Marca) 
            Responsável por: Navegação estrutural e Logotipo principal.
            Nota: 'sticky top-0' mantém o menu fixo no topo ao rolar a página. */}
        <header className="bg-white py-2 border-b border-gray-100 w-full">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            
            {/* 🖼️ Logo 1.0: Lado Esquerdo: Logo + MOVER 'animate-spin-slow sem brilho - h-16 md:h-20 '*/}
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <a href="/" className="flex items-center gap-4">
              <LogoCatavento tamanho="h-10 md:h-14" comBrilho={false} /> 

              {/* Nome Colorido 'MOVER' com BookmanSwash (.woff2)*/}
              <span 
                className="text-2xl md:text-4xl font-bold italic tracking-tighter"
                style={{ 
                  fontFamily: "'BookmanSwash', serif", 
                  filter: "drop-shadow(1px 1px 0px rgba(0,0,0,0.1))" 
                }}
              >
                <span style={{ color: '#0159A1' }}>M</span>
                <span style={{ color: '#8B3035' }}>O</span>
                <span style={{ color: '#0C5F43' }}>V</span>
                <span style={{ color: '#CFA922' }}>E</span>
                <span style={{ color: '#575756' }}>R</span>
              </span>
            </a>
          </div>  

            {/* 🎯 Bloco 2: Texto Explicativo (Lado Direito do Centro) */}
            <div className="flex flex-col items-center justify-center text-center text-[#1e428a] leading-tight md:border-l-2 md:border-gray-100 md:pl-8 md:ml-4">
              <span 
                className="block w-full md:max-w-none whitespace-nowrap md:whitespace-normal"
                style={{ 
                  fontFamily: "'Alice', serif", 
                  fontSize: '20px', 
                  fontWeight: '400', // Sem negrito
                  //fontStyle: 'italic', // Sem itálico
                  color: '#1e428a',
                  letterSpacing: '1px',
                  textTransform: 'none',
                }}
              >
                Movimento Organizacional Vencer, Educar e Realizar
              </span>
            </div>
          </div>
        </header>

        {/* 🟦 SEÇÃO 2.5: FAIXA AZUL DO MENU (Navegação Isolada) */}
        <section className="relative w-full py-4 shadow-inner sticky top-0 z-50" style={{ backgroundColor: '#1e428a' }}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-center"> 

            {/* Menu com Links e o Botão 'DOAR' */}
            <nav className="flex flex-wrap justify-center gap-8 md:gap-12 items-center font-bold uppercase text-[9px] md:text-xs">
              <a href="#sobre-nos" className="text-white hover:text-red-400 transition-colors">Sobre nós</a>
              <a href="#projetos" className="text-white hover:text-red-400 transition-colors">Projetos</a>
              <a href="#contato" className="text-white hover:text-red-400 transition-colors">Contato</a>

              {/* 🔴 Call to Action: Botão de Doação em destaque (Estilo Kabelo Rock - Oval) */}
              <motion.button
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ 
                  x: mouseX, 
                  y: mouseY,
                  backgroundColor: '#ed1e24', 
                  color: 'white', 
                  padding: '8px 24px', 
                  borderRadius: '9999px',
                  border: 'none', 
                  fontWeight: '900', 
                  fontSize: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  boxShadow: '0 10px 15px -3px rgba(237, 30, 36, 0.3)'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                DOAR
              </motion.button>
            
            </nav>
          </div>
        </section>

        {/* 🏁 CONTEÚDO PRINCIPAL DO SITE */}
      <main id="content" className="site-main">
        
        {/* Hero Section */}
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

        {/* Seção Estilo Imagem 3 (Cata-vento Animado) */}
        <section className="relative py-24 bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center select-none">
            <span className="text-[20vw] font-black rotate-[-15deg] whitespace-nowrap text-gray-900">MOVER HELIPA</span>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <div className="mb-8 flex justify-center">
            
              {/* Logo 1.1 giratório da Mover */}
              <div className="relative w-32 h-32 animate-spin-slow">
                {/* O Brilho (Aura) */}
                <div className="absolute inset-0 bg-[#0459A7] rounded-full opacity-20 blur-xl"></div>
                
                {/* O Logo Local (que você baixou) */}
                <img
                  src={logo_mover_catavento} // Usando a variável que você importou lá no topo
                  alt="Cata-vento" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Juntos podemos tornar sonhos em realidade, movendo e transformando vidas nós construímos o futuro.
            </h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScHZSjy2ZPUAeHFOlJxGLX9bFGo0Rj1UBTN8QPfSGvYJNpwzg/viewform" target="_blank" rel="noopener noreferrer" className="text-[#ed1e24] font-black text-2xl hover:underline decoration-4 underline-offset-8">
              Inscreva-se
            </a>
          </div>
        </section>

        {/* Sobre Nós */}
        <section id="sobre-nos" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 border-l-4 border-blue-600 pl-4">Sobre nós</h2>
              <div className="space-y-4 text-gray-700">
                <p>O <strong>Movimento Organizacional Vencer, Educar e Realizar – MOVER</strong> é uma organização sem fins lucrativos, sediada em Heliópolis.</p>
                <p>Nossa missão é enfrentar os problemas da comunidade através da educação, cultura e esportes.</p>
              </div>
            </div>
            <img src="https://moverhelipa.org.br/wp-content/uploads/2023/02/MagicEraser_230118_195138-1-768x543.png" alt="Sobre nós" className="rounded-lg shadow-xl" />
          </div>
        </section>

        {/* Impactos */}
        <section id="galeria" className="py-20 px-4 bg-gray-50 text-center">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
            <div><div className="text-4xl font-bold text-blue-600">400.000+</div><p>Marmitas entregues</p></div>
            <div><div className="text-4xl font-bold text-blue-600">25.000+</div><p>Cestas básicas</p></div>
            <div><div className="text-4xl font-bold text-blue-600">30+</div><p>Cozinhas acompanhadas</p></div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Projetos</h2>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img src="https://moverhelipa.org.br/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-17-at-19.25.45.webp" alt="Cozinha Mover" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Centro Popular de Qualificação</h3>
                <p className="text-gray-600 text-sm">Cursos de qualificação profissional e alta gastronomia.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img src="https://moverhelipa.org.br/wp-content/uploads/2024/10/escola-1024x1024.jpg" alt="Cozinha Escola" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Rede Cozinha Escola</h3>
                <p className="text-gray-600 text-sm">Parceria com a Prefeitura de SP servindo 400 refeições/dia.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img src="https://moverhelipa.org.br/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-08-at-00.32.57.jpeg" alt="Cozinha Solidária" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cozinha Solidária</h3>
                <p className="text-gray-600 text-sm">Combate à fome com dignidade e nutrição.</p>
              </div>
            </div>
          </div>
        </section>


        {/* Galeria de Impacto (Novas Imagens) */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nossa Atuação</h2>
            <p className="text-gray-600">Registros do nosso trabalho diário na comunidade.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://moverhelipa.org.br/wp-content/uploads/2024/10/IMG-20241023-WA0008.jpg" alt="Colagem Cozinha Escola" className="w-full h-auto" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://moverhelipa.org.br/wp-content/uploads/2024/10/IMG-20241023-WA0011-scaled.jpg" alt="Colagem Governo Federal" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Impactos */}
        <section id="galeria" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Impactos</h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25.000+</div>
              <p className="text-gray-600">Cestas básicas entregues</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1.000+</div>
              <p className="text-gray-600">Vales gás distribuídos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
              <p className="text-gray-600">Crianças atendidas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">12.000+</div>
              <p className="text-gray-600">Famílias na pandemia</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">400.000+</div>
              <p className="text-gray-600">Marmitas entregues</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <p className="text-gray-600">Cozinhas acompanhadas</p>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Contato</h2>
              <p className="mb-8 text-gray-400">Entre em contato com a gente para saber mais como ajudar ou participar de nossos projetos.</p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">📧</span>
                  <span>moverhelipa@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">📱</span>
                  <span>(11) 9 9674-4126</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl text-gray-900">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nome</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full p-2 border rounded" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Mensagem</label>
                  <textarea className="w-full p-2 border rounded h-32" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition">Enviar</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* 🏁 RODAPÉ */}
      <footer className="py-12 px-4 bg-black text-white text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <img width="120" src="https://moverhelipa.org.br/wp-content/uploads/2023/02/F60366C7-E702-45A7-A336-2ED7BDE66F68-2-300x300.png" alt="Logo Footer" className="brightness-0 invert mb-4 md:mb-0" />
          <div className="text-sm">
            <p className="font-bold text-gray-300">MOVER | Heliópolis</p>
            <p className="text-gray-500 text-xs">Todos os direitos reservados @Mover - 2026</p>
          </div>
        </div>
      </footer>

      {/*BLOCO: WHATSAPP FLUTUANTE (ESTILO JOINCHAT + ANIMAÇÕES CSS)*/}
      <a 
        href="https://wa.me/5511996744126" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 flex items-center gap-3 z-[99999] group no-underline animate-[fadeInSlide_0.5s_ease]"
      >
        {/* Balão de Ajuda (Aparece no Hover) */}
        <div className="bg-white text-[#333] py-2.5 px-4 rounded-[20px] shadow-lg text-sm font-medium transition-all duration-300 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap hidden md:block border border-gray-100">
          Podemos te ajudar?
        </div>

        {/* Ícone Circular Verde */}
        <div className="bg-[#25d366] text-white w-[60px] h-[60px] rounded-full flex justify-center items-center shadow-xl transition-all duration-300 group-hover:bg-[#128c7e] group-hover:scale-110">
          {/* SVG que você encontrou no View-Source (Mais bonito que o padrão) */}
          <FaWhatsapp size={35} />
        </div>
      </a>

    </div> // Fecha o id="page"
    ); // Fecha o return (
} // Fecha a function App() {