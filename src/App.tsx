// 1. AS IMPORTAÇÕES (Sempre no topo)
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPaperPlane, FaRobot } from 'react-icons/fa6';

// 2. Imagens para o Primeiro Carrossel (Sobre Nós)
import img_20_site from './assets/images/image_20_site_espaco_mover_origem.webp';
import img_28_site from './assets/images/image_28_site_Centro_qualificacao.webp';
// img_1_3_site é a mesma da Capa dos Projetos e Programas, então não precisa importar de novo

// 3. Imagens para o Segundo Carrossel (Hero/Início)
import img_24_site from './assets/images/image_24_site_Cozinha gestora_parceiros.webp';
import img_25_site from './assets/images/image_25_site_3_unidades.webp';
import img_23_site from './assets/images/image_23_site_Cozinha gestora_cozinha_solidaria.webp';
import img_22_site from './assets/images/image_22_site_Cozinha gestora_cozinha_solidaria_unidades.webp';

// 4. Imagens para o Terceiro Carrossel (Hero/Início)
import img_13_site from './assets/images/image_13_site_centro_qualificacao.webp';
import img_18_site from './assets/images/image_18_site_rede_cozinha.webp';
import img_5_site from './assets/images/image_5_site_centro_qualificacao.webp';
import img_10_site from './assets/images/image_10_site_rede_cozinha.webp';

// 5. Capa dos Projetos e Programas (1 e 3 no carrossel 1)
//import img_1_site from './assets/images/XXXXXXXXXXXXXX.webp';
import img_1_site from './assets/images/image_1_site_capa_centro_qualificacao.webp';
import img_3_site from './assets/images/image_3_site_capa_cozinha_escola.webp';
import img_34_site from './assets/images/image_34_site_logo_cozinha_solidaria_nacional.webp';
import img_37_site from './assets/images/image_37_site_cozinha_solidaria.webp';
import img_38_site from './assets/images/image_38_site_madalena.webp';
import img_39_site from './assets/images/image_39_site_sao_mateus.webp';
import img_40_site from './assets/images/image_40_site_heliopolis.webp';

// 5. Logos (Pasta logos)
import logo_1_site from './assets/logos/logo_1_site_mover_helipa.webp';
import logo_mover_catavento from './assets/logos/logo_2_site_mover_catavento.webp';
import logo_mover_novo from './assets/logos/Logo Mover Novo.webp';

// 6. 🚀 NOVOS IMPORTS
import { TbTargetArrow } from "react-icons/tb"; // Missão
import { FaEye } from "react-icons/fa";          // Visão
import { GiScales } from "react-icons/gi";       // Valores

// 7. Página do button DoeAgora
import { useNavigate, Routes, Route } from 'react-router-dom'; // Adicione Routes e Route aqui
import DoeAgora from './DoeAgora'; // 👈 Chamando o seu arquivo
import CozinhaSolidariaNacional from './CozinhaSolidariaNacional';
import CozinhaSolidaria from './CozinhaSolidaria';



// import { GoogleGenAI } from "@google/genai";

// Inicialização do Gemini - Próximo project - criar chat IA
// const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
// const model = "gemini-3-flash-preview";

// 2.0 DEFINIÇÕES GLOBAIS (FORA DA FUNÇÃO APP)
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// 2.1 AS IMAGENS DO PRIMEIRO CARROSSEL (FADE)
const primarycarouselImages = [
  img_20_site,
  img_28_site,
  img_1_site,
  img_3_site
];

// 🆕 2.2 AS IMAGENS DO SEGUNDO CARROSSEL (ZIGUE-ZAGUE)
const secondCarouselImages = [
  img_24_site,
  img_25_site,
  img_23_site,
  img_22_site
];

// 🆕 2.3 AS IMAGENS DO SEGUNDO CARROSSEL (ZIGUE-ZAGUE)
const thirdCarouselImages = [
  img_13_site,
  img_18_site,
  img_5_site,
  img_10_site
];

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

// 🚀 ADICIONE O COMPONENTE AQUI (Fora do App)
const ContadorMarmitas = () => {
  const VALOR_BASE = 400000;
  const DATA_INICIAL = new Date('2026-04-14'); 
  const INCREMENTO_DIARIO = 450;

  const [total, setTotal] = useState(VALOR_BASE);

  useEffect(() => {
    const calcularTotal = () => {
      const hoje = new Date();
      const diferencaTempo = hoje.getTime() - DATA_INICIAL.getTime();
      const diferencaDias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
      
      if (diferencaDias > 0) {
        setTotal(VALOR_BASE + (diferencaDias * INCREMENTO_DIARIO));
      }
    };
    calcularTotal();
  }, []);

  return (
    <div>
      <div 
        className="text-4xl md:text-5xl font-bold mb-2" 
        style={{ color: '#0159A1' }}
      >
        {total.toLocaleString('pt-BR')}+
      </div>
      <p className="text-gray-600 font-medium italic">Refeições servidas</p>
    </div>
  );
};

// APAGUE A LINHA ABAIXO se ela estiver no mesmo arquivo do App:
// export default ContadorCestas;

// 3. ABERTURA DA FUNÇÃO
export default function App() { 
  // 🎯 1. CONTADOR DO CARROSSEL PRINCIPAL (PRIMARY)
const [currentImage1, setCurrentImage1] = useState(0);
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentImage1((prev) => (prev + 1) % primarycarouselImages.length);
  }, 6000);
  return () => clearInterval(timer);
}, []);

// 🎯 2. CONTADOR DO SEGUNDO CARROSSEL (SECOND)
const [currentImage2, setCurrentImage2] = useState(0);
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentImage2((prev) => (prev + 1) % secondCarouselImages.length);
  }, 6000);
  return () => clearInterval(timer);
}, []);

// 🎯 3. CONTADOR DO TERCEIRO CARROSSEL (THIRD)
const [currentImage3, setCurrentImage3] = useState(0);
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentImage3((prev) => (prev + 1) % thirdCarouselImages.length);
  }, 6000);
  return () => clearInterval(timer);
}, []);

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

  // Doe Agora - Navegação
  const navigate = useNavigate();

  // 1. Lógica do Ímã (mouseX, mouseY...)  e DEFINIÇÃO DAS VARIÁVEIS (Onde o vermelho deve sumir)
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
  };

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
    <Routes>
      {/* 🏠 ROTA 1: O SITE COMPLETO (HOME) */}
      <Route path="/" element={
        <div id="início" className="min-h-screen bg-white relative">

          {/* 🧊 BLOCO TRAVADO*/}
          <div className="fixed top-0 left-0 z-[100] w-full shadow-xl">
          
              {/* 🟦 SEÇÃO 1.0: TOP BAR Azul - Barra de Contato Superior - Ajustado para inverter no Mobile */}
              <section className="relative z-[60] py-1" style={{ backgroundColor: '#1e428a' }}>
                <div className="max-w-4xl mx-auto px-0.5 flex flex-col-reverse md:flex-row items-center justify-between gap-1">
                  
                  {/* 📞 1.1.1 Bloco de Contatos Diretos */}
                  <div className="flex md:flex-row items-center gap-4 md:gap-6">
                    {/* Seus links de e-mail e telefone aqui */}
                    
                    {/* 1.1.2 Item: E-MAIL com Expansão */}
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

                    {/* 1.1.3 Divisor Visual */}
                    <span className="text-white opacity-50 hidden md:block">|</span>

                    {/* 1.1.4 Item: TELEFONE com Expansão */}
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

                  {/* 📱 1.2.1 Bloco de Redes Sociais */}
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
                  {/* Final do bloco 1.2.1 - Redes Sociais */}

                </div> {/* 🏁 FECHA O ESCRAVO 1.2.1 */}
              </section> {/* 🏁 FECHA O MESTRE 1.0 */}

              {/* ⚪ SEÇÃO 2.0: HEADER BRANCO (Assinatura de Marca) 
                  Responsável por: Navegação estrutural e Logotipo principal.
                  Nota: 'sticky top-0' mantém o menu fixo no topo ao rolar a página. */}
              <header className="bg-white py-0.5 border-b border-gray-100 w-full sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-0.5 flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-6">
                  
                  {/* 🖼️ Logo 2.1: Lado Esquerdo: Logo + MOVER 'animate-spin-slow sem brilho - h-16 md:h-20 '*/}
                  <div className="flex items-center justify-center gap-4 md:gap-6">
                    <a href="/" className="flex items-center gap-4">
                    <LogoCatavento tamanho="h-10 md:h-14" comBrilho={false} /> 

                    {/* 2.2 Nome Colorido 'MOVER' com BookmanSwash (.woff2)*/}
                    <span 
                      className="text-2xl md:text-4xl font-bold italic tracking-tighter leading-none"
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

                  {/* 🎯 Bloco 2.3: Texto Explicativo (Lado Direito do Centro) */}
                  <div className="flex flex-col items-center justify-center text-center text-[#1e428a] leading-none md:border-l-2 md:border-gray-100 md:pl-8 md:ml-4">
                    <span 
                      className="w-full md:max-w-none whitespace-normal md:whitespace-nowrap"
                        style={{ 
                        fontFamily: "'Alice', serif", 
                        fontSize: '20px', 
                        fontWeight: '400',
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

              {/* 🟦 SEÇÃO 3.0 FAIXA AZUL DO MENU (Navegação Isolada) */}
              <section 
                className="relative w-full py-2 shadow2x1 sticky top-0 z-50" 
                style={{ 
                  backgroundColor: '#1e428a',
                  borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-center"> 

                  {/* 3.1 Menu com Links e o Botão 'DOAR' */}
                  <nav className={`
                    flex flex-wrap justify-center items-center 
                    gap-x-4 gap-y-2 md:gap-12 
                    font-bold uppercase text-base 
                    leading-tight
                  `}>
                    <a 
                      href="#início" 
                      className="text-white hover:brightness-125 transition-all"
                      style={{ color: 'white', textDecoration: 'none' }}
                      >
                        Início
                      </a>
                    <a 
                      href="#sobre-nos" 
                      className="text-white hover:brightness-125 transition-all"
                      style={{ color: 'white', textDecoration: 'none' }}
                      >
                        Sobre nós
                      </a>
                    <a 
                      href="#quem somos" 
                      className="text-white hover:brightness-125 transition-all"
                      style={{ color: 'white', textDecoration: 'none' }}
                      >
                        Quem Somos
                      </a>     
                    <a
                      href="#projetos" 
                      className="text-white hover:brightness-125 transition-all"
                      style={{ color: 'white', textDecoration: 'none' }}
                      >
                        Projetos
                      </a>
                      <a
                      href="#programas" 
                      className="text-white hover:brightness-125 transition-all"
                      style={{ color: 'white', textDecoration: 'none' }}
                      >
                        Programas
                      </a>
                    <a 
                      href="#nosso trabalho" 
                      className="text-white hover:brightness-125 transition-all"
                      style={{ color: 'white', textDecoration: 'none' }}
                      >
                        Nosso Trabalho
                      </a>  
                    <a 
                      href="#contato" 
                      className="text-white hover:brightness-125 transition-all"
                      style={{ color: 'white', textDecoration: 'none' }}
                      >
                        Contato
                      </a>

                    {/* 3.2 🔴 Call to Action: Botão de Doação em destaque (Estilo Kabelo Rock - Oval) */}
                    <motion.button
                      onClick={() => navigate('/doeagora')} // 🚀 ISSO abre a nova página
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{ 
                        x: mouseX, 
                        y: mouseY,
                        backgroundColor: '#ed1e24', 
                        color: 'white', 
                        padding: '4px 16px', 
                        borderRadius: '9999px',
                        border: 'none', 
                        fontWeight: '900', 
                        fontSize: '16px',
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
                      DOE AGORA
                    </motion.button>
                  
                  </nav>
                </div>
              </section>
        </div>
                        
        {/* 🏁 CONTEÚDO PRINCIPAL DO SITE */}
        <main id="content" className="site-main pt-[180px] md:pt-[160px]">
          
          {/* Hero Section */}
          {/* 🚀 Hero Section com Carrossel 1 de Fundo (Ajustado Kabelo Rock) */}
          <section id="inicio" className="relative h-[600px] flex items-center justify-center overflow-hidden text-white">
            
            {/* 🖼️ Camada do Carrossel 1 de Fundo */}
            <div className="absolute inset-0 z-0">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImage1} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center overflow-hidden"
                  style={{ 
                    backgroundImage: `url(${primarycarouselImages[currentImage1]})`,
                    backgroundSize: 'cover',    // Faz a foto caber inteira sem ultrapassar
                    backgroundRepeat: 'no-repeat', // Impede que a foto se repita se for pequena
                    backgroundPosition: 'center',  // Mantém no meio
                  }}
                />
              </AnimatePresence>
              {/* Overlay Escuro para dar leitura ao texto */}
              <div className="absolute inset-0 bg-black/60 z-10"></div>
            </div>

            {/* ✍️ Conteúdo Fixo (Por cima do carrossel) */}
            <div className="relative z-20 text-center px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                {/* Trazendo o estilo da linha 248-263 para cá */}
                <span 
                  className="italic tracking-tighter leading-none"
                  style={{ 
                    fontFamily: "'BookmanSwash', serif", 
                    filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.6))"
                  }}
                >
                  <span style={{ color: '#0159A1' }}>M</span>
                  <span style={{ color: '#8B3035' }}>O</span>
                  <span style={{ color: '#0C5F43' }}>V</span>
                  <span style={{ color: '#CFA922' }}>E</span>
                  <span style={{ color: '#575756' }}>R</span>
                </span>
              </h1>
              
              <p className={`
                  max-w-4xl mx-auto mb-10 font-medium leading-tight 
                  /* 🚀 Sombra um pouco mais forte para compensar os 80% de branco */
                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
                  text-base md:text-2xl text-white/80
                `}>
                  Juntos podemos tornar sonhos em realidade, movendo e transformando vidas nós construímos o futuro.
              </p>
              
              {/* BOTÃO: Inscreva-se */}
              <a 
                href="#" 
                className={`
                  inline-block rounded-xl font-bold text-xl shadow-2xl transition-all duration-300
                  !text-white px-12 py-4 mt-10 md:mt-16
                  border-3 border-white/60
                  hover:border-white/40 hover:!scale-110
                `}style={{ 
                  backgroundColor: '#27272a99', 
                  color: '#ffffff', 
                  textDecoration: 'none',
                  display: 'inline-block',
                  backdropFilter: 'blur(4px)'
                }} 
              >
                Inscreva-se
              </a>
            </div>
          </section>

          {/* Sobre Nós - Versão Premium Kabelo Rock */}
          <section id="sobre-nos" className="py-20 px-4 bg-transparent scroll-mt-26">
            
            {/* 🟦 1. CAIXA GRADIENTE MESTRE (Moldura que abraça toda a história) */}
            <div 
              className="max-w-6xl mx-auto rounded-3xl pt-4 pb-8 px-8 md:pt-8 md:pb-16 md:px-16 relative overflow-hidden"
              style={{
                background: 'linear-gradient(to right, #ffffff, #ffffff)',
                border: '1px solid #e2e8f0',
                boxShadow: 'inset 0 0 25px 2px #0159A1'
              }}
            >
              {/* Título Principal Interno à Moldura */}
              <h2 
                className="font-extrabold mb-12 uppercase tracking-tighter leading-none"
                  style={{ 
                    color: '#0159A1',
                    fontSize: 'clamp(40px, 10vw, 10px)',
                   fontWeight: '700'
                 }}
              >
                Sobre nós
              </h2>

              <div className="space-y-6">

                {/* ⬅️ GRID 1: Texto à Esquerda | Carrossel 2 à Direita */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4 text-justify" style={{ fontFamily: '"Roboto", sans-serif', fontSize: '17px', fontWeight: 300, lineHeight: '1.8', color: '#54595f' }}>
                    <p>O <strong>Movimento Organizacional Vencer, Educar e Realizar – MOVER</strong> é uma organização da sociedade civil... entorno da maior favela da cidade: <strong>Heliópolis</strong>.</p>
                    <p>Desde o início, nossa missão é <strong>enfrentar os problemas vividos pela comunidade</strong>... criação de <strong>políticas públicas que enfrentem, de forma direta, a miséria e a desinformação.</strong></p>
                    <p>Nossa história é feita por <strong>lideranças nascidas e criadas dentro de Heliópolis</strong>... dor enfadonha e cruel da fome que o <strong>impulso visceral por fazer acontecer ultrapassou barreiras.</strong></p>
                    <p>Em 2019... equipe voluntária iniciou a produção de <strong>quase mil refeições por dia</strong>. Com muita luta, assim começamos nossa caminhada no <strong>combate à fome.</strong></p>
                  </div>

                  {/* CARROSSEL 2 COM EFEITO FADE */}
                  <div 
                    className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
                    style={{ 
                      // Usando o mesmo padrão de azul que você tem nos outros cards
                      background: 'radial-gradient(circle, #ffffff 0%, #e2e8f0 60%, #0159A1 120%)',
                      boxShadow: 'inset 0 0 50px rgba(1, 89, 161, 0.3)' 
                    }}
                  ><AnimatePresence initial={false}>
                      <motion.img
                        key={currentImage2}
                        src={secondCarouselImages[currentImage2]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute w-auto h-auto max-w-full max-h-full m-auto object-contain"
                      />
                    </AnimatePresence>
                  </div>
                </div>

                {/* ➡️ GRID 2: Carrossel 3 à Esquerda | Texto à Direita */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  
                  {/* CARROSSEL 3 DA SEGUNDA PARTE */}
                  <div 
                    className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
                    style={{ 
                      // Usando o mesmo padrão de azul que você tem nos outros cards
                      background: 'radial-gradient(circle, #ffffff 0%, #e2e8f0 60%, #0159A1 120%)',
                      boxShadow: 'inset 0 0 50px rgba(1, 89, 161, 0.3)' 
                    }}
                  >
                    <AnimatePresence initial={false}>
                      <motion.img
                        key={currentImage3}
                        src={thirdCarouselImages[currentImage3]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute w-auto h-auto max-w-full max-h-full m-auto object-contain"
                      />
                    </AnimatePresence>
                  </div>

                  <div className="order-1 md:order-2 space-y-4 text-justify" style={{ fontFamily: '"Roboto", sans-serif', fontSize: '17px', fontWeight: 300, lineHeight: '1.8', color: '#54595f' }}>
                    <p>Hoje, seguimos atuando diretamente no <strong>enfrentamento da insegurança alimentar</strong>, por meio do programa <strong>Rede Cozinha Escola</strong>... são servidas, em média, <strong>400 refeições por dia</strong>.</p>
                    <p>Também atuamos na <strong>geração de renda</strong>... destaque para o nosso <strong>Curso de Alta Gastronomia</strong>... <strong>restaurantes de alto padrão gastronômico.</strong></p>
                    <p>Atuamos como <strong>entidade gestora do Programa Cozinha Solidária</strong>... acompanhando <strong>mais de 30 cozinhas</strong>... ajudando a <strong>engajar e impulsionar outros espaços de solidariedade e combate à fome.</strong></p>
                    <p className="italic font-medium text-blue-800 pt-4 border-t border-gray-100 mt-6">Nossa essência é essa: transformar realidades, criando oportunidades e garantindo direitos.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 📦 SEÇÃO: MISSÃO, VISÃO E VALORES */}
          <section id="quem somos" className="py-20 bg-transparent scroll-mt-26">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* 🎯 CARD: MISSÃO */}
                <div 
                  className="bg-white rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(to right, #ffffff, #ffffff)',
                    border: '1px solid #e2e8f0',
                    boxShadow: 'inset 0 0 25px 2px #0159A1'
                  }}
                >
                  <div className="mb-6 p-4 bg-blue-50 rounded-full text-[#0159A1]">
                    <TbTargetArrow size={48} />
                  </div>
                  <h3 className="text-4xl font-bold mb-4" style={{ color: '#0159A1' }}>Missão</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Atuar com ações alternativas para efetivar a garantia de direitos na área de política pública, direitos humanos, justiça social, igualdade de gêneros e na melhoria da qualidade de vida das comunidades carentes e sua população de onde estiver atuando.
                    </p>
                </div>

                {/* 👁️ CARD: VISÃO */}
                <div 
                  className="bg-white rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(to right, #ffffff, #ffffff)',
                    border: '1px solid #e2e8f0',
                    boxShadow: 'inset 0 0 25px 2px #0159A1'
                  }}
                >
                  <div className="mb-6 p-4 bg-blue-50 rounded-full text-[#0159A1]">
                    <FaEye size={48} />
                  </div>
                  <h3 className="text-4xl font-bold mb-4" style={{ color: '#0159A1' }}>Visão</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Transformar as comunidades que atua por meio de parcerias que visem a construção de uma sociedade sólida e pacífica.
                    </p>
                </div>

                {/* ⚖️ CARD: VALORES */}
                <div 
                  className="bg-white rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(to right, #ffffff, #ffffff)',
                    border: '1px solid #e2e8f0',
                    boxShadow: 'inset 0 0 25px 2px #0159A1'
                  }}
                >
                  <div className="mb-6 p-4 bg-blue-50 rounded-full text-[#0159A1]">
                    <GiScales size={48} />
                  </div>
                  <h3 className="text-4xl font-bold mb-4" style={{ color: '#0159A1' }}>Valores</h3>
                  
                  {/* Lista de Tópicos Centralizada */}
                  <ul className="text-gray-600 space-y-2 text-sm font-base">
                    <li className="flex items-left justify-left gap-2">🔹 Respeito</li>
                    <li className="flex items-left justify-left gap-2">🔹 Humildade</li>
                    <li className="flex items-left justify-left gap-2">🔹 Igualdade</li>
                    <li className="flex items-left justify-left gap-2">🔹 Ética</li>
                    <li className="flex items-left justify-left gap-2">🔹 Transparência</li>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          {/* 📦 SEÇÃO: PROJETOS */}
          <section id="projetos" className="py-20 px-4 bg-transparent scroll-mt-26">
            
            {/* 🟦 1. CAIXA GRADIENTE MESTRE (Moldura com a largura do site) */}
            <div 
              className="max-w-6xl mx-auto rounded-3xl pt-4 pb-8 md:pt-6 md:pb-16 px-8 md:px-16 relative overflow-hidden"
              style={{
                background: 'linear-gradient(to right, #ffffff, #ffffff)',
                border: '1px solid #e2e8f0',
                boxShadow: 'inset 0 0 25px 2px #0159A1'
              }}
            >
              {/* Título interno à moldura */}
              <div className="text-center mt-0 md:mt-[-0px] mb-6">
                <h2 className="text-4xl font-bold mb-4" 
                  style={{ 
                    color: '#0159A1',
                    fontSize: 'clamp(40px, 10vw, 10px)',
                    fontWeight: '700'
                  }}>
                  Nossos Projetos
                  <span className="block mt-6 text-2xl md:text-3xl opacity-90 font-semibold">
                    Centro Popular de Qualificação
                  </span>
                </h2>
              </div>

              {/* 📦 2. GRID DOS CARDS (Duas colunas para os programas) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Projeto 1: Heliópolis */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden group border border-gray-100 md:col-span-2 md:w-1/2 md:mx-auto">
                  <div className="overflow-hidden">
                    <img 
                      src={img_40_site}   
                      alt="CPQ Heliópolis" 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0159A1' }}>Unidade: Heliópolis</h3>
                    <p className="text-gray-600 text-sm">Cursos de qualificação profissional e alta gastronomia para a comunidade de Heliópolis.</p>
                  </div>
                </div>

                {/* Projeto 2: Parque Santa Madalena */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden group border border-gray-100">
                  <div className="h-80 overflow-hidden relative w-full">
                    <img 
                      src={img_38_site}  
                      alt="CPQ Parque Santa Madalena" 
                      /* 🚀 Usamos style para garantir que o navegador ignore o aspect-ratio */
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', /* 👈 Estica a imagem para preencher tudo */
                        objectPosition: 'top', // 👈 Dica: foca no topo da imagem (onde geralmente estão os logos/pessoas)
                        display: 'block' 
                      }}
                      className="group-hover:scale-110 transition duration-500" 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2" 
                      style={{ color: '#0159A1' }}>Unidade: Parque Santa Madalena</h3>
                    <p className="text-gray-600 text-sm">Cursos de qualificação profissional e alta gastronomia para a comunidade do Parque Santa Madalena.</p>
                  </div>
                </div>

                {/* Projeto 3: São Mateus */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden group border border-gray-100">
                  <div className="h-80 overflow-hidden">
                    <img 
                      src={img_39_site}  
                      alt="CPQ Parque Santa Madalena" 
                      className="w-full h-full object-cover scale-150 group-hover:scale-[1.6] transition duration-500 origin-top" 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2" 
                      style={{ color: '#0159A1' }}>Unidade: São Mateus</h3>
                    <p className="text-gray-600 text-sm">Cursos de qualificação profissional e alta gastronomia para a comunidade do Parque Santa Madalena.</p>
                  </div>
                </div>

              </div> {/* Fim da Grid */}
            </div> {/* Fim da Caixa Gradiente Mestre */}
          </section>

          {/* 📦 SEÇÃO: PROGRAMAS */}
          <section id="programas" className="py-20 px-4 bg-transparent scroll-mt-26">

            {/* 🟦 1. CAIXA GRADIENTE MESTRE (Moldura com a largura do site) */}
            <div 
              className="max-w-6xl mx-auto rounded-3xl pt-4 pb-8 md:pt-6 md:pb-16 px-8 md:px-16 relative overflow-hidden "
              style={{
                background: 'linear-gradient(to right, #ffffff, #ffffff)',
                border: '1px solid #e2e8f0',
                boxShadow: 'inset 0 0 25px 2px #0159A1'
              }}
            >
              {/* Título interno à moldura */}
              <div className="text-center mt-0 md:mt-[-0px] mb-12">
                <h2 className="text-4xl font-bold mb-4" 
                  style={{ 
                    color: '#0159A1',
                    fontSize: 'clamp(40px, 10vw, 10px)',
                     fontWeight: '700'
                  }}>
                  Nossos Programas
                </h2>
              </div>

              {/* 📦 2. GRID DOS CARDS (Dentro da moldura) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Card 1: Rede Cozinha Escola */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden group border border-gray-100 md:col-span-2 md:w-1/2 md:mx-auto">
                  <div className="h-auto md:h-80 overflow-hidden w-full">
                    <img 
                      src="https://moverhelipa.org.br/wp-content/uploads/2024/10/escola-1024x1024.jpg" 
                      alt="Cozinha Escola" 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0159A1' }}>Rede Cozinha Escola</h3>
                    <p className="text-gray-600 text-sm">Parceria com a Prefeitura de SP servindo 450 refeições/dia.</p>
                  </div>
                </div>

                {/* Card 2: Cozinha Solidária */}
                <div 
                  onClick={() => navigate('/cozinha-solidaria')}
                  className="bg-white rounded-xl shadow-2xl overflow-hidden group border border-gray-100 cursor-pointer">
                  <div className="h-auto md:h-80 overflow-hidden w-full">
                    <img 
                      src={img_37_site} 
                      alt="Cozinha Solidária" 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#0159A1' }}>Cozinha Solidária</h3>
                    <p className="text-gray-600 text-sm">Combate à fome com dignidade e nutrição.</p>
                  </div>
                </div>

                {/* Card 3: Cozinha Solidária Nacional */}
                <div
                  onClick={() => navigate('/cozinha-solidaria-nacional')}
                  className="bg-white rounded-xl shadow-2xl overflow-hidden group border border-gray-100 cursor-pointer">
                    <div className="h-80 w-full overflow-hidden bg-gray-50 flex items-center justify-center p-4 relative">
                      <img 
                        src={img_34_site} 
                        alt="Cozinha Solidária" 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto min-w-[60%] min-h-[60%] object-contain group-hover:scale-110 transition duration-500"/>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#0159A1' }}>Cozinha Solidária Nacional</h3>
                      <p className="text-gray-600 text-sm">Combate à fome com dignidade e nutrição.</p>
                    </div>
                </div>

              </div> {/* Fim da Grid */}
            </div> {/* Fim da Caixa Gradiente Mestre */}
          </section>

          {/* 📊 SEÇÃO: NOSSO TRABALHO (Estatísticas) */}
          <section id="nosso trabalho" className="py-20 px-4 bg-transparent scroll-mt-26">
            
            {/* 🟦 1. CAIXA GRADIENTE MESTRE */}
            <div 
              className="max-w-6xl mx-auto rounded-3xl p-8 md:p-16 relative overflow-hidden"
              style={{
                background: 'linear-gradient(to right, #ffffff, #ffffff)',
                border: '1px solid #e2e8f0',
                boxShadow: 'inset 0 0 25px 2px #0159A1'
              }}
            >
              {/* Título interno à moldura */}
              <div className="text-center -mt-6 mb-18">
                <h2 className="text-4xl font-bold mb-4" 
                  style={{ 
                    color: '#0159A1',
                    fontSize: 'clamp(40px, 10vw, 10px)',
                    fontWeight: '700'
                  }}>
                  Nosso Trabalho
                </h2>
              </div>

              {/* 📦 2. GRID DE ESTATÍSTICAS */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
                
                {/* 🚀 Basta chamar assim. O estilo já está lá dentro do componente! */}
                <ContadorMarmitas />

                {/* Cestas Básicas (O próximo item...) */}
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#0159A1' }}>25.000+</div>
                  <p className="text-gray-600 font-medium italic">Cestas básicas entregues</p>
                </div>

                {/* Cestas Básicas */}
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#0159A1' }}>25.000+</div>
                  <p className="text-gray-600 font-medium italic">Cestas básicas entregues</p>
                </div>

                {/* Famílias Atendidas */}
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#0159A1' }}>12.000+</div>
                  <p className="text-gray-600 font-medium italic">Famílias atendidas na pandemia</p>
                </div>

                {/* Vales Gás */}
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#0159A1' }}>1.000+</div>
                  <p className="text-gray-600 font-medium italic">Vales gás distribuídos</p>
                </div>

                {/* Crianças */}
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#0159A1' }}>300+</div>
                  <p className="text-gray-600 font-medium italic">Crianças atendidas</p>
                </div>          

                {/* Cozinhas */}
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#0159A1' }}>30+</div>
                  <p className="text-gray-600 font-medium italic">Cozinhas acompanhadas</p>
                </div>

              </div> {/* Fim da Grid */}
            </div> {/* Fim da Caixa Gradiente Mestre */}
          </section>

          {/* Contato 🎨 Seção CONTATO*/}
          <section className="py-20 px-4 bg-white relative overflow-hidden">
            {/* Container Principal com o Estilo Padronizado */}
            <div 
              className="max-w-6xl mx-auto rounded-3xl p-12 grid md:grid-cols-2 gap-12 relative z-10"
              style={{
                background: 'linear-gradient(to right, #ffffff, #ffffff)', // Fundo branco puro
                border: '1px solid #e2e8f0', // Borda fininha
                boxShadow: 'inset 0 0 35px 5px #0159A1' // ✨ A sombra azul interna marcante
              }}
            >
              {/* Coluna da Esquerda: Textos de Contato */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-6" style={{ color: '#0159A1' }}>
                  Contato
                </h2>
                <p className="mb-10 text-gray-600 leading-relaxed text-base font-medium">
                  Entre em contato com a gente para saber mais como ajudar ou participar de nossos projetos.
                </p>
                
                <ul className="space-y-6">
                  {/* Link de E-mail */}
                  <li className="flex items-center space-x-4 bg-blue-50 p-4 rounded-xl border border-blue-100 group">
                    <a 
                      href="mailto:moverhelipa@gmail.com" 
                      className="flex items-center gap-4 transition-all duration-300 hover:scale-105"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="bg-[#0159A1] p-3 rounded-full flex items-center justify-center shadow-md">
                        <FaEnvelope size={18} color="white" />
                      </div>
                      <span className="text-gray-800 font-semibold text-lg">moverhelipa@gmail.com</span>
                    </a>
                  </li>
                  
                  {/* WhatsApp */}
                  {/* Link de WhatsApp */}
                  <li className="flex items-center space-x-4 bg-green-50 p-4 rounded-xl border border-green-100 group">
                    <a 
                      href="https://wa.me/5511996744126" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 transition-all duration-300 hover:scale-105"
                      style={{ textDecoration: 'none' }}
                    >
                      <div 
                        style={{ 
                          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', 
                          width: '42px', 
                          height: '42px', 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center' 
                        }} 
                        className="shadow-md"
                      >
                        <FaWhatsapp size={24} color="white" />
                      </div>
                      <span className="text-gray-800 font-semibold text-lg">(11) 9 9674-4126</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Coluna da Direita: Formulário */}
              <div 
                className="bg-white p-10 rounded-2xl shadow-xl"
                style={{ border: '1px solid #e2e8f0' }}
              >
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-gray-700">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-[#0159A1] transition" 
                      placeholder="Seu nome" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-gray-700">E-mail Ativo</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-[#0159A1] transition" 
                      placeholder="seu@email.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-gray-700">Mensagem</label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-lg h-36 focus:ring-2 focus:ring-blue-200 focus:border-[#0159A1] transition resize-none" 
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 active:scale-95 border-2 border-transparent hover:border-blue-300"
                    style={{ 
                      backgroundColor: '#0159A1', 
                      color: '#FFFFFF', // ⚪ Força o texto para Branco Puro
                      border: 'none',       // 🚫 Remove qualquer borda manual
                      outline: 'none',      // 🚫 Remove o contorno de foco do navegador
                      boxShadow: 'none'     // 💡 Se a "faixa" for uma sombra estranha, isso remove
                    }}
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* 6.0 WHATSAPP FLUTUANTE (ESTILO JOINCHAT + ANIMAÇÕES CSS) - POSIÇÃO FIXA COM RECUO */}
        <a 
          href="https://wa.me/5511996744126" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed right-5 flex items-center gap-3 z-[99999] group no-underline animate-[fadeInSlide_0.5s_ease]"
          style={{ 
            bottom: window.innerWidth < 768 ? '60px' : '20px' 
          }}
        >
          {/* 6.1 Balão de Ajuda */}
          <div className="bg-white text-[#333] py-2.5 px-4 rounded-[20px] shadow-lg text-sm font-medium transition-all duration-300 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap hidden md:block border border-gray-100">
            Podemos te ajudar?
          </div>

          {/* 6.2 Ícone Circular */}
          <div className="bg-[#25d366] text-white w-[60px] h-[60px] rounded-full flex justify-center items-center shadow-xl transition-all duration-300 group-hover:bg-[#128c7e] group-hover:scale-110">
            <FaWhatsapp size={35} />
          </div>
        </a>

        {/* 📦 SEÇÃO: MISSÃO + MAPA COM BORDAS DEGRADÊ (ESTILO KABELO ROCK) */}
        <section id="contato" className="py-16 bg-gray-50 scroll-mt-26">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch justify-items-center">
              
              {/* --- COLUNA DA DIREITA: MAPA + NOVA CAIXINHA --- */}
              <div className="flex flex-col gap-0 w-full h-full max-w-xl">
                
                {/* 🟦 CAIXA DO MAPA (Sua caixa atual) */}
                <div 
                className="bg-white rounded-t-3xl rounded-b-none p-8 flex flex-col flex-grow justify-between w-full max-w-xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(to right, #ffffff, #ffffff)', // Fundo branco puro
                  border: '1px solid #e2e8f0', // Borda fininha de acabamento
                  boxShadow: 'inset 0 0 25px 5px #0159A1' // ⚡ O segredo: sombra azul PARA DENTRO 
                }}
              >
                  {/* MAPA */}
                  <div className="flex-grow grayscale-[15%] hover:grayscale-0 transition-all duration-700">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8235610816823!2d-46.5912444!3d-23.610667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b4080ba8739%3A0x62ad0e4b0f9d732a!2sEstr.%20das%20L%C3%A1grimas%2C%20337%20-%20Vila%20Heliopolis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004232-000!5e0!3m2!1spt-BR!2sbr!4v1711987000000!5m2!1spt-BR!2sbr" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      title="Localização MOVER Heliópolis"
                    ></iframe>

                  </div>
                </div>

                {/* 🟦 CAIXA INFO (Sua caixa atual) */}
                <div 
                className="bg-white rounded-b-3xl rounded-t-none p-4 flex flex-col justify-between w-full max-w-xl relative overflow-hidden -mt-[1px]"
                style={{
                  background: 'linear-gradient(to right, #ffffff, #ffffff)', // Fundo branco puro
                  border: '1px solid #e2e8f0', // Borda fininha de acabamento
                  boxShadow: 'inset 0 0 25px 5px #0159A1' // ⚡ O segredo: sombra azul PARA DENTRO 
                }}
              >
                  {/* 📍 Container do Título e Logotipo - Alinhamento Flex horizontal e centralizado verticalmente */}
                  <div className="flex items-center gap-4 mb-4 mt-2 justify-center lg:justify-start">
                    
                    {/* 1. O Logo Catavento (Tamanho reduzido para alinhar com o texto) */}
                    <div className="flex-shrink-0">
                      <LogoCatavento tamanho="h-10 md:h-12" /> {/* Ajustei de h-20 para h-10/12 */}
                    </div>

                    {/* 2. Matriz "MOVER"  */}
                    <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: '#0159A1' }}>
                      MOVER - Sede
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 w-full px-4">
  
                    {/* 📍 Bloco do Endereço */}
                    <div className="flex items-start gap-0">
                      {/* Ícone fixo na esquerda */}
                      <span className="text-sm">📍</span>
                      
                      {/* Texto quebrado em duas linhas alinhadas */}
                      <div className="flex flex-col text-sm text-gray-600 leading-tight">
                        <span>Estrada das Lágrimas, 337 - Heliópolis</span>
                        <span>São Paulo - SP, 04232-000</span>
                      </div>
                    </div>

                    {/* 📞 Bloco do Contato */}
                      <a 
                        href="https://wa.me/5511996744126" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
                        style={{ textDecoration: 'none' }}
                      >
                        {/* Troquei FaPhoneAlt por FaWhatsapp para o usuário saber que vai pro Whats */}
                        <FaWhatsapp 
                          size={20} 
                          style={{ color: '#25D366' }} // Usei o verde padrão do WhatsApp aqui
                          className="transition-colors flex-shrink-0 transform md:translate-y-[1.5px]"
                        />
                        
                        <span className="text-sm text-gray-700">
                          (11) 99674-4126
                        </span>
                      </a>

                  </div>
                </div>

              </div>

              {/* --- COLUNA DA DIREITA: NOVA CAIXINHA --- */}
              <div className="flex flex-col gap-0 w-full max-w-xl">
                {/* 🟦 CAIXA INFO (Tudo deve ficar dentro desta div) */}
                <div 
                  className="bg-white rounded-3xl p-6 flex flex-col gap-6 w-full max-w-xl relative overflow-hidden h-full"
                  style={{
                    background: 'linear-gradient(to right, #ffffff, #ffffff)',
                    border: '1px solid #e2e8f0',
                    boxShadow: 'inset 0 0 25px 5px #0159A1'
                  }}
                >
                  {/* Unidade 1 */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: '#0159A1' }}>
                      Centro Popular de Qualificação
                    </span>
                    
                    {/* Container Flex que separa Endereço de Telefone */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 w-full px-4">
                      
                      {/* 📍 Bloco do Endereço */}
                      <div className="flex items-start gap-0">
                        {/* Ícone fixo na esquerda */}
                        <span className="text-sm">📍</span>
                        
                        {/* Texto quebrado em duas linhas alinhadas */}
                        <div className="flex flex-col text-sm text-gray-600 leading-tight">
                          <span>Estrada das Lágrimas, 337 - Heliópolis</span>
                          <span>São Paulo - SP, 04232-000</span>
                        </div>
                      </div>

                      {/* 📞 Bloco do Contato */}
                      <a 
                        href="https://wa.me/5511996744126" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
                        style={{ textDecoration: 'none' }}
                      >
                        {/* Troquei FaPhoneAlt por FaWhatsapp para o usuário saber que vai pro Whats */}
                        <FaWhatsapp 
                          size={20} 
                          style={{ color: '#25D366' }} // Usei o verde padrão do WhatsApp aqui
                          className="transition-colors flex-shrink-0 transform md:translate-y-[1.5px]"
                        />
                        
                        <span className="text-sm text-gray-700">
                          (11) 99674-4126
                        </span>
                      </a>

                    </div>
                  </div>

                  {/* Unidade 2 */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: '#0159A1' }}>
                      Parque Santa Madalena
                    </span>

                    {/* Container Flex que separa Endereço de Telefone */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 w-full px-4">
                      
                      {/* 📍 Bloco do Endereço */}
                      <div className="flex items-start gap-0">
                        {/* Ícone fixo na esquerda */}
                        <span className="text-sm">📍</span>
                        
                        {/* Texto quebrado em duas linhas alinhadas */}
                        <div className="flex flex-col text-sm text-gray-600 leading-tight">
                          <span>Rua Iacape, 266 - Parque Santa Madalena</span>
                          <span>São Paulo - SP, 03983-090</span>
                        </div>
                      </div>

                      {/* 📞 Bloco do Contato */}
                      <a 
                        href="https://wa.me/5511997752135" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
                        style={{ textDecoration: 'none' }}
                      >
                        {/* Troquei FaPhoneAlt por FaWhatsapp para o usuário saber que vai pro Whats */}
                        <FaWhatsapp 
                          size={20} 
                          style={{ color: '#25D366' }} // Usei o verde padrão do WhatsApp aqui
                          className="transition-colors flex-shrink-0 transform md:translate-y-[1.5px]"
                        />
                        
                        <span className="text-sm text-gray-700">
                          (11) 99775-2135
                        </span>
                      </a>

                    </div>
                  </div>

                  {/* Unidade 3 */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: '#0159A1' }}>
                      Rede Cozinha Escola
                    </span>

                    {/* Container Flex que separa Endereço de Telefone */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 w-full px-4">
                      
                      {/* 📍 Bloco do Endereço */}
                      <div className="flex items-start gap-0">
                        {/* Ícone fixo na esquerda */}
                        <span className="text-sm">📍</span>
                        
                        {/* Texto quebrado em duas linhas alinhadas */}
                        <div className="flex flex-col text-sm text-gray-600 leading-tight">
                          <span>Rua Comandante Taylor, 612 - Ipiranga</span>
                          <span>São Paulo - SP, 04218-000</span>
                        </div>
                      </div>

                      {/* 📞 Bloco do Contato */}
                      <a 
                        href="https://wa.me/5511996744126" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
                        style={{ textDecoration: 'none' }}
                      >
                        {/* Troquei FaPhoneAlt por FaWhatsapp para o usuário saber que vai pro Whats */}
                        <FaWhatsapp 
                          size={20} 
                          style={{ color: '#25D366' }} // Usei o verde padrão do WhatsApp aqui
                          className="transition-colors flex-shrink-0 transform md:translate-y-[1.5px]"
                        />
                        
                        <span className="text-sm text-gray-700">
                          (11) 99674-4126
                        </span>
                      </a>

                    </div>
                  </div>

                  {/* Unidade 4 */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: '#0159A1' }}>
                      Cozinha Solidária
                    </span>

                    {/* Container Flex que separa Endereço de Telefone */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 w-full px-4">
                      
                      {/* 📍 Bloco do Endereço */}
                      <div className="flex items-start gap-0">
                        {/* Ícone fixo na esquerda */}
                        <span className="text-sm">📍</span>
                        
                        {/* Texto quebrado em duas linhas alinhadas */}
                        <div className="flex flex-col text-sm text-gray-600 leading-tight">
                          <span>Estrada das Lágrimas, 337 - Heliópolis</span>
                          <span>São Paulo - SP, 04232-000</span>
                        </div>
                      </div>

                      {/* 📞 Bloco do Contato */}
                      <a 
                        href="https://wa.me/5511996744126" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
                        style={{ textDecoration: 'none' }}
                      >
                        {/* Troquei FaPhoneAlt por FaWhatsapp para o usuário saber que vai pro Whats */}
                        <FaWhatsapp 
                          size={20} 
                          style={{ color: '#25D366' }} // Usei o verde padrão do WhatsApp aqui
                          className="transition-colors flex-shrink-0 transform md:translate-y-[1.5px]"
                        />
                        
                        <span className="text-sm text-gray-700">
                          (11) 99674-4126
                        </span>
                      </a>

                    </div>
                  </div>

                  {/* Unidade 5: Mosaico Sociocultural */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: '#0159A1' }}>
                      Instituto Mosaico Sociocultural
                    </span>

                    {/* Container Flex que separa Endereço de Telefone */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 w-full px-4">
                      
                      {/* 📍 Bloco do Endereço */}
                      <div className="flex items-start gap-0">
                        {/* Ícone fixo na esquerda */}
                        <span className="text-sm">📍</span>
                        
                        {/* Texto quebrado em duas linhas alinhadas */}
                        <div className="flex flex-col text-sm text-gray-600 leading-tight">
                          <span>Av. Ragueb Chohfi, 3027 - Jardim Três Marias</span>
                          <span>São Paulo - SP, 08341-410</span>
                        </div>
                      </div>

                      {/* 📞 Bloco do Contato */}
                      <a 
                        href="https://wa.me/5511996744126" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
                        style={{ textDecoration: 'none' }}
                      >
                        {/* Troquei FaPhoneAlt por FaWhatsapp para o usuário saber que vai pro Whats */}
                        <FaWhatsapp 
                          size={20} 
                          style={{ color: '#25D366' }} // Usei o verde padrão do WhatsApp aqui
                          className="transition-colors flex-shrink-0 transform md:translate-y-[1.5px]"
                        />
                        
                        <span className="text-sm text-gray-700">
                          (11) 91964-0582 
                        </span>
                      </a>

                    </div>
                  </div>

                </div> {/* FECHAMENTO DA CAIXA INFO */}
              </div> {/* FECHAMENTO DA COLUNA DA DIREITA */}
              
            </div>
          </div>
        </section>

        {/* 🏁 7.0 RODAPÉ */}
        <div className="w-full -mt-10 relative z-40">
            <footer className="bg-black/90 backdrop-blur-sm py-2 border-t border-gray-900">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-2">
                
                <img 
                    src={logo_mover_catavento} 
                    alt="Logo Footer" 
                    className="w-10 md:w-12 opacity-80" 
                />

                    <div className="flex flex-col items-center text-center gap-0 leading-none">
                        <span className="font-bold text-gray-200 text-sm block">
                        MOVER                  
                        </span>                         
                        <span className="text-gray-400 text-[10px] md:text-xs block">
                            Movimento Organizacional Vencer, Educar e Realizar
                        </span>
                        
                        <span className="text-gray-600 text-[9px] block mt-3 mb-0.5">
                            {/* 🚀 2. O '-mt-0.5' é uma margem negativa, ele puxa o texto para cima */}
                            © 2026 MOVER. Todos os direitos reservados.
                        </span>
                    </div>

                </div>
            </footer>
        </div>     

      </div> // 🏁 FECHA A SEÇÃO GERAL - Fecha o id="page"
    } />

    {/* 💰 ROTA 2: DOE AGORA */}
    <Route path="/doeagora" element={<DoeAgora />} />

    {/* 🍳 ROTA 3: COZINHA SOLIDÁRIA NACIONAL */}
    <Route path="/cozinha-solidaria-nacional" element={<CozinhaSolidariaNacional />} />

    {/* 🍳 ROTA 4: COZINHA SOLIDÁRIA */}
    <Route path="/cozinha-solidaria" element={<CozinhaSolidaria />} />

</Routes>

  ); // Fecha o return (
} // Fecha a function App() {