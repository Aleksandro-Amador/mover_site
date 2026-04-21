import React from 'react';
import { useNavigate } from 'react-router-dom';

// 1. Importe a imagem aqui dentro também
import img_20_site from './assets/images/image_20_site_espaco_mover_origem.webp';

// 2. Logos (Pasta logos)
import logo_1_site from './assets/logos/logo_1_site_mover_helipa.webp';
import logo_mover_catavento from './assets/logos/logo_2_site_mover_catavento.webp';
import logo_mover_novo from './assets/logos/Logo Mover Novo.webp';

const DoeAgora: React.FC = () => {
  const navigator = useNavigate();
  return (

    /* 2. Container Principal: Ocupa a tela toda (min-h-screen) */
    <div className="relative min-h-screen w-full flex flex-col bg-slate-900">
      
      {/* 🖼️ 3. A Imagem de Fundo (Heliópolis A4) */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ 
          backgroundImage: `url(${img_20_site})`, 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%', // 100% da largura e 100% da altura do container
        }}
      />

      {/* 🌑 Overlay para garantir contraste (Opcional) */}
      <div className="absolute inset-0 bg-black/30 z-1"></div>

      {/* 💳 4. O seu Card de Doação (Agora 100% integrado ao fundo) */}
      <div 
        className={`
          relative z-20 rounded-3xl pt-2 pb-12 px-8 md:pt-4 md:pb-12 md:px-12 
          flex flex-col items-center text-center 
          max-w-[600px] w-full mx-auto mt-10 mb-10 shadow-x
          `}
          style={{ 
          background: 'linear-gradient(to right, #ffffff, #ffffff)',
          boxShadow: 'inset 0 0 35px 5px #0159A1'
        }}
      >
        <h2 
          className="font-extrabold text-6xl md:text-8xl uppercase tracking-tighter leading-none relative top-4 md:top-3 scale-x-180 scale-y-180"
            style={{ color: '#0159A1' }}
        >
          DOE AGORA!
        </h2>

        {/* 🚀 BLOCO NOVO: LOGO + MOVER + FRASE */}
        <div className="flex flex-col items-center mt-12 mb-0">
            {/* Nome MOVER */}
            <div className="flex items-center justify-center gap-4 mb-3">
                <span 
                    className="text-2xl md:text-3xl font-bold italic tracking-tighter leading-none"
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
            </div>  
        </div>

        {/* Frase Centralizada */}
        <p 
          className="max-w-md text-sm md:text-base text-gray-500 font-medium italic leading-relaxed mb-12 md:mb-20">
            Juntos podemos tornar sonhos em realidade, movendo e transformando vidas nós construímos o futuro.
        </p>

        {/* 🚀 ADICIONE ESTA LINHA AQUI PARA CRIAR O ESPAÇO */}
        <div className="flex-grow h-2 md:h-5"></div>

        {/* Dados Bancários */}
        <div className="bg-slate-800 text-white p-6 rounded-2xl w-full max-w-md mx-auto space-y-2 mb-6">
            <p className="text-sm opacity-70 uppercase tracking-widest">Banco do Brasil</p>
            <p className="text-xl md:text-2xl font-bold">Ag 3045-7 / CC 24005-2</p>
            <hr className="opacity-20 my-4" />
            <p className="text-sm opacity-70 uppercase tracking-widest">Chave PIX (CNPJ)</p>
            <p className="text-xl md:text-2xl font-bold">10.935.841/0001-44</p>
        </div>

        
        {/* BOTÃO VOLTAR (Fora da caixa para não poluir) */}
        <div className="flex justify-end mt-6 mb-0">
            <button 
                onClick={() => navigator('/')} /* Garante que volta para a home */
                className={`
                    group flex flex-col items-center gap-2 
                    px-8 py-4 rounded-3xl transition-all duration-300 
                    !border-none outline-none shadow-lg hover:scale-105
                    
                `}
                style={{ 
                        /* 🚀 O GRADIENTE E A SOMBRA AGORA NO BOTÃO TODO */
                        borderRadius: '24px',
                        background: 'linear-gradient(to right, #ffffff, #ffffff)',
                        border: '1px solid #e2e8f0',
                        boxShadow: 'inset 0 0 25px 2px #0159A1'
                }}
            >
                {/* 1. TEXTO SUPERIOR (Atualizado e em Azul MOVER) */}
                <span 
                    className="font-bold uppercase text-sm tracking-widest"
                    style={{ color: '#0159A1' }}
                >
                    Voltar para o Site
                </span>
                
                {/* 2. CÍRCULO COM GRADIENTE E MARCA 'MOVER' */}
                <div 
                    className="flex items-center justify-center w-full rounded-3xl p-8 md:p-2 relative overflow-hidden"
                    >
                    {/* 🖼️ Nome 'MOVER' Colorido (Micro-versão da logo) */}
                    <span className="text-xl font-bold drop-shadow-sm flex items-center">
                        <span 
                            className="italic tracking-tighter leading-none"
                            style={{ 
                                fontFamily: "'BookmanSwash', serif", 
                                filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.6))",
                                display: "inline-flex",
                                marginLeft: "-6px"
                            }}
                        >
                            <span style={{ color: '#0159A1' }}>M</span>
                            <span style={{ color: '#8B3035' }}>O</span>
                            <span style={{ color: '#0C5F43' }}>V</span>
                            <span style={{ color: '#CFA922' }}>E</span>
                            <span style={{ color: '#575756' }}>R</span>
                        </span>
                    </span>

                </div>
            </button>

        </div>
      </div>
      
      {/* 🏁 7.0 RODAPÉ */}
      <div className="w-full mt-0">
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
      
    </div>
    
  );
};

export default DoeAgora;