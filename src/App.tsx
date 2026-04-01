import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaPhoneAlt, FaTimes,  } from 'react-icons/fa';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPaperPlane, FaRobot } from 'react-icons/fa6';
// import SocialIcons from './assets/Social-Media-Logo-collection-CIRCLE-2023.svg';
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
    <div id="page" className="hfeed site">
      {/* AJUSTE 1: Header limpo e sem tags <p> em volta */}
      <header id="masthead" itemScope itemType="https://schema.org/WPHeader">
        <p className="main-title bhf-hidden" itemProp="headline">
          <header className="bg-white shadow-sm py-4">
  <div className="container mx-auto px-4 flex justify-between items-center">
    {/* O Link Principal com o nome da ONG */}
    <a 
      href="https://moverhelipa.org.br/" 
      title="MOVER | Movimento Organizacional Vencer, Educar e Realizar" 
      rel="home"
      className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
    >
      MOVER
    </a>

    {/* Menu Simples (Exemplo) */}
    <nav className="space-x-6 text-gray-600 font-medium">
      <a href="#sobre" className="hover:text-blue-600">Sobre nós</a>
      <a href="#contato" className="hover:text-blue-600">Contato</a>
    </nav>
  </div>
</header>
        </p>
        <div data-elementor-type="wp-post" data-elementor-id="16" className="elementor elementor-16">
          <section className="elementor-section elementor-top-section elementor-element elementor-element-5bc9bc1 elementor-section-height-min-height elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-items-middle py-2" style={{ backgroundColor: '#1e428a' }}>
            <div className="elementor-container elementor-column-gap-default flex items-center">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e5907dd">
                <div className="elementor-widget-wrap elementor-element-populated flex items-center">
                  <div className="elementor-element elementor-element-aaa3382 elementor-widget elementor-widget-text-editor flex items-center" style={{ margin: 0, padding: 0 }}>
                    <p className="text-white m-0 flex items-center font-bold" style={{ lineHeight: '32px', margin: 0 }}>
                      <span className="flex items-center gap-2">
                        <FaEnvelope size={14} />
                        <a style={{ color: '#ffffff', textDecoration: 'none' }} href="mailto:moverhelipa@gmail.com" target="_blank" rel="noopener">moverhelipa@gmail.com</a>
                      </span>
                      <span className="mx-6">|</span>
                      <a style={{ color: '#ffffff', textDecoration: 'none' }} href="tel:5511996744126">(11) 99674-4126</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1e8e40a">
                <div className="elementor-widget-wrap elementor-element-populated flex items-center justify-end">
                  <div className="elementor-element elementor-element-8f1c087 e-grid-align-right elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons">
                    <div className="elementor-social-icons-wrapper flex items-center justify-end gap-3">
                      <span className="elementor-grid-item">
                        <a 
                          style={{ 
                            background: 'linear-gradient(135deg, #1877F2 0%, #0A56B3 100%)', 
                            color: '#ffffff', 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            transition: 'all 0.3s',
                            boxShadow: '0 4px 8px rgba(24, 119, 242, 0.3)'
                          }} 
                          className="hover:scale-110 hover:shadow-lg" 
                          href="https://www.facebook.com/people/Mover-Helipa/100095108914003/?mibextid=b06tZ0" 
                          target="_blank"
                        >
                          <span className="elementor-screen-only">Facebook</span>
                          <FaFacebookF size={16} />
                        </a>
                      </span>
                      <span className="elementor-grid-item">
                        <a 
                          style={{ 
                            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', 
                            color: '#ffffff', 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            transition: 'all 0.3s',
                            boxShadow: '0 4px 8px rgba(220, 39, 67, 0.3)'
                          }} 
                          className="hover:scale-110 hover:shadow-lg" 
                          href="https://www.instagram.com/mover_helipa/?igshid=MzRlODBiNWFlZA%3D%3D" 
                          target="_blank"
                        >
                          <span className="elementor-screen-only">Instagram</span>
                          <FaInstagram size={18} />
                        </a>
                      </span>
                      <span className="elementor-grid-item">
                        <a 
                          style={{ 
                            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', 
                            color: '#ffffff', 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            transition: 'all 0.3s',
                            boxShadow: '0 4px 8px rgba(37, 211, 102, 0.3)'
                          }} 
                          className="hover:scale-110 hover:shadow-lg" 
                          href="https://wa.me/5511996744126" 
                          target="_blank"
                        >
                          <span className="elementor-screen-only">WhatsApp</span>
                          <FaWhatsapp size={18} />
                        </a>
                      </span>
                      <span className="elementor-grid-item">
                        <a 
                          style={{ 
                            background: 'linear-gradient(135deg, #0077B5 0%, #005983 100%)', 
                            color: '#ffffff', 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            transition: 'all 0.3s',
                            boxShadow: '0 4px 8px rgba(0, 119, 181, 0.3)'
                          }} 
                          className="hover:scale-110 hover:shadow-lg" 
                          href="#" 
                          target="_blank"
                        >
                          <span className="elementor-screen-only">LinkedIn</span>
                          <FaLinkedinIn size={16} />
                        </a>
                      </span>
                      <span className="elementor-grid-item">
                        <a 
                          style={{ 
                            background: 'linear-gradient(135deg, #FF0000 0%, #C4302B 100%)', 
                            color: '#ffffff', 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            transition: 'all 0.3s',
                            boxShadow: '0 4px 8px rgba(255, 0, 0, 0.3)'
                          }} 
                          className="hover:scale-110 hover:shadow-lg" 
                          href="#" 
                          target="_blank"
                        >
                          <span className="elementor-screen-only">YouTube</span>
                          <FaYoutube size={16} />
                        </a>
                      </span>
                      <span className="elementor-grid-item">
                        <a 
                          style={{ 
                            backgroundColor: '#ffffff', 
                            color: '#1e428a', 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            transition: 'all 0.3s',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                          }} 
                          className="hover:scale-110 hover:shadow-lg" 
                          href="tel:+5511996744126" 
                          target="_blank"
                        >
                          <span className="elementor-screen-only">Telefone</span>
                          <FaPhoneAlt size={14} />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Navegação Principal */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-07c5665 elementor-section-content-space-evenly elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle sticky top-0 z-50 bg-white shadow-md">
            <div className="elementor-container elementor-column-gap-wider">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6ebfddb">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-f33ccf3 elementor-widget elementor-widget-image">
                    <a href="/">
                      <img width="150" height="150" src="https://moverhelipa.org.br/wp-content/uploads/2023/02/F60366C7-E702-45A7-A336-2ED7BDE66F68-2-300x300.png" alt="Logo MOVER" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7d27384">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <nav className="hfe-nav-menu__layout-horizontal">
                    <ul id="menu-1-a9e317d" className="hfe-nav-menu flex items-center gap-8 font-bold text-sm uppercase tracking-wide">
                      <li className="menu-item"><a href="/" className="text-[#1a1a8c] hover:scale-110 transition-transform inline-block">Início</a></li>
                      <li className="menu-item"><a href="#sobre-nos" className="text-gray-500 hover:text-[#1a1a8c] hover:scale-110 transition-transform inline-block">Sobre Nós</a></li>
                      <li className="menu-item"><a href="#projetos" className="text-gray-500 hover:text-[#1a1a8c] hover:scale-110 transition-transform inline-block">Projetos</a></li>
                      <li className="menu-item"><a href="#galeria" className="text-gray-500 hover:text-[#1a1a8c] hover:scale-110 transition-transform inline-block">Impactos</a></li>
                      <li className="menu-item"><a href="/comocolaborar" className="text-gray-500 hover:text-[#1a1a8c] hover:scale-110 transition-transform inline-block">Como Colaborar</a></li>
                      <li className="menu-item">
                        <a href="#contato" className="bg-[#1a1aff] text-white px-8 py-3 rounded-full hover:bg-blue-700 hover:scale-105 transition-all inline-block">
                          Contato
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>

      <main id="content" className="site-main">
        {/* Hero Section (Imagem 1) */}
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

        {/* Seção Estilo Imagem 3 (Cata-vento e Marca d'água) */}
        <section className="relative py-24 bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center select-none">
            <span className="text-[20vw] font-black rotate-[-15deg] whitespace-nowrap text-gray-900">MOVER HELIPA</span>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <div className="mb-8 flex justify-center">
              {/* Representação do Cata-vento colorido */}
              <div className="relative w-32 h-32 animate-spin-slow">
                <div className="absolute inset-0 bg-[#0459A7] rounded-full opacity-20 blur-xl"></div>
                <img src="https://moverhelipa.org.br/wp-content/uploads/2023/02/F60366C7-E702-45A7-A336-2ED7BDE66F68-2-300x300.png" alt="Cata-vento" className="w-full h-full object-contain" />
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

        {/* Seção de Programas e Inscrição (Imagem 2) */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 group">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img src="https://moverhelipa.org.br/wp-content/uploads/2024/10/escola-1024x1024.jpg" alt="Culinária Mover 1" className="w-full h-[300px] md:h-[450px] object-cover" />
                <img src="https://moverhelipa.org.br/wp-content/uploads/2024/10/cozinha-escola-1024x1024.jpg" alt="Culinária Mover 2" className="w-full h-[300px] md:h-[450px] object-cover" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-300">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScHZSjy2ZPUAeHFOlJxGLX9bFGo0Rj1UBTN8QPfSGvYJNpwzg/viewform" target="_blank" rel="noopener noreferrer" className="bg-white/95 backdrop-blur-sm text-gray-900 px-10 py-4 rounded-xl font-extrabold text-2xl border-4 border-white hover:scale-105 transition-transform shadow-2xl">
                  Inscreva-se
                </a>
              </div>
            </div>
            
            {/* Logos de Parceiros (Fiel à Imagem 2) */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 py-8 border-y border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">MQ</div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-gray-400 uppercase leading-none">Programa</span>
                  <span className="text-xs font-black text-gray-700">MANUEL QUERINO</span>
                </div>
              </div>
              <img src="https://moverhelipa.org.br/wp-content/uploads/2023/02/F60366C7-E702-45A7-A336-2ED7BDE66F68-2-300x300.png" alt="Logo Mover" className="h-12 w-auto" />
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-bold text-gray-400 uppercase leading-none">Ministério do</span>
                <span className="text-xs font-black text-gray-700">TRABALHO E EMPREGO</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-[9px] font-bold text-gray-400 uppercase leading-none">Desenvolvimento Social</span>
                <span className="text-[9px] font-black text-gray-700">FAMÍLIA E COMBATE À FOME</span>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Logo_do_Governo_Federal_do_Brasil_%282023%29.svg/2560px-Logo_do_Governo_Federal_do_Brasil_%282023%29.svg.png" alt="Governo Federal" className="h-8 w-auto" />
            </div>
          </div>
        </section>

        {/* Sobre Nós */}
        <section id="sobre-nos" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 border-l-4 border-blue-600 pl-4">Sobre nós</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>O <strong>Movimento Organizacional Vencer, Educar e Realizar – MOVER</strong> é uma organização da sociedade civil, sem fins lucrativos, fundada em 17 de outubro de 2008, com sede em São Paulo, nos entornos da maior favela da cidade: <strong>Heliópolis</strong>.</p>
                <p>Desde o início, nossa missão é enfrentar os problemas vividos pela comunidade, tendo como meta alcançar a democracia, solidariedade, respeito, educação, cultura, esporte, saúde, defesa dos direitos humanos e a criação de políticas públicas que enfrentem, de forma direta, a miséria e a desinformação.</p>
                <p>Nossa história é feita por lideranças nascidas e criadas dentro do Helipa, que conhecem de perto os desafios e, principalmente, as potências da favela de Heliópolis.</p>
              </div>
            </div>
            <div>
              <img src="https://moverhelipa.org.br/wp-content/uploads/2023/02/MagicEraser_230118_195138-1-768x543.png" alt="Sobre nós" className="rounded-lg shadow-xl" />
            </div>
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

      {/*RODAPÉ (FOOTER) - Identidade e Direitos Autorais*/}                    
      <footer id="colophon" className="py-12 px-4 bg-black text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
    
          {/* Logo da ONG */}
          <div className="mb-8 md:mb-0">
            <img 
              width="120" 
              src="https://moverhelipa.org.br/wp-content/uploads/2023/02/F60366C7-E702-45A7-A336-2ED7BDE66F68-2-300x300.png" 
              alt="Logo Footer" 
              className="brightness-0 invert mx-auto md:mx-0" 
            />
          </div>

          {/* Nome Institucional e Direitos */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <p className="font-bold text-gray-300 text-sm">
              MOVER | Movimento Organizacional Vencer, Educar e Realizar
            </p>
            <p className="text-gray-500 text-[10px]">
              Todos os direitos reservados @Mover - 2026
            </p>
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

    </div> // Fim do id="page"
  );
}

export default App;