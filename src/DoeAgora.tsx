import React from 'react';
import { useNavigate } from 'react-router-dom';

import img_20_site from './assets/images/image_20_site_espaco_mover_origem.webp';
import logo_mover_catavento from './assets/logos/logo_2_site_mover_catavento.webp';

const DoeAgora: React.FC = () => {
  const navigate = useNavigate();

  return (
    // {/* 1️⃣ DIV GERAL: Ocupa a tela toda e define o fundo escuro */}
    <div className="relative min-h-screen w-full bg-slate-900 flex flex-col overflow-hidden">
      
      {/* 2️⃣ CAMADA DA IMAGEM: Preenche a tela toda sem empurrar nada */}
      <div className="absolute inset-0 z-0">
        <img 
          src={img_20_site} 
          className="w-full h-full object-cover opacity-40" 
          alt="Fundo"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* 3️⃣ ÁREA DE CONTEÚDO: Onde a mágica da centralização acontece */}
      {/* O 'flex-1' faz essa div ocupar todo o espaço entre o topo e o rodapé */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4">
        
        {/* 📦 CAIXA GRADIENTE: Centralizada no meio do 'main' */}
        <div 
          className="w-full max-w-[500px] rounded-3xl p-8 md:p-12 flex flex-col items-center text-center shadow-2xl"
          style={{ 
            background: 'linear-gradient(to right, #ffffff, #ffffff)',
            boxShadow: 'inset 0 0 35px 5px #0159A1'
          }}
        >
          {/* Bloco Título */}
          <h2 className="font-extrabold text-5xl md:text-5xl uppercase tracking-tighter leading-none 
               scale-x-130 scale-y-130 md:scale-x-150 md:scale-y-150 my-12" 
            style={{ color: '#0159A1' }}>
            DOE AGORA!
          </h2>

          {/* Bloco Logo/Frase */}
          <div className="mt-8 mb-4">
            <span className="text-3xl font-bold italic block mb-4" style={{ fontFamily: "'BookmanSwash', serif" }}>
              <span style={{ color: '#0159A1' }}>M</span>
              <span style={{ color: '#8B3035' }}>O</span>
              <span style={{ color: '#0C5F43' }}>V</span>
              <span style={{ color: '#CFA922' }}>E</span>
              <span style={{ color: '#575756' }}>R</span>
            </span>
            <p className="max-w-sm text-gray-500 font-medium italic leading-relaxed">
              Juntos podemos tornar sonhos em realidade, movendo e transformando vidas nós construímos o futuro.
            </p>
          </div>

          {/* Bloco Dados Bancários */}
          <div className="bg-slate-800 text-white p-6 rounded-2xl w-full max-w-[380px] mx-auto space-y-2 mb-6">
            <p className="text-sm opacity-70 uppercase tracking-widest text-center">Banco do Brasil</p>
            <p className="text-xl md:text-2xl font-bold">Ag 3045-7 / CC 24005-2</p>
            <hr className="opacity-20 my-4" />
            <p className="text-sm opacity-70 uppercase tracking-widest text-center">Chave PIX (CNPJ)</p>
            <p className="text-xl md:text-2xl font-bold">10.935.841/0001-44</p>
          </div>

          {/* 🚀 BOTÃO VOLTAR (Original Kabelo Rock) */}
          <div className="flex justify-center mt-8 w-full">
              <button 
                  onClick={() => navigate('/')} 
                  className={`
                      group flex flex-col items-center gap-2.5 
                      px-6 py-2 rounded-3xl transition-all duration-300 
                      !border-none outline-none shadow-lg hover:scale-105
                  `}
                  style={{ 
                          borderRadius: '24px',
                          background: 'linear-gradient(to right, #ffffff, #ffffff)',
                          border: '1px solid #e2e8f0',
                          boxShadow: 'inset 0 0 25px 2px #0159A1'
                  }}
              >
                  {/* 1. TEXTO SUPERIOR (Azul MOVER) */}
                  <span 
                      className="font-bold uppercase text-sm tracking-widest"
                      style={{ color: '#0159A1' }}
                  >
                      Voltar para o Site
                  </span>
                  
                  {/* 2. CÍRCULO COM GRADIENTE E MARCA 'MOVER' */}
                  <div className="flex items-center justify-center w-full rounded-3xl p-1 md:p-2 relative overflow-hidden">
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
      </main>

      {/* 4️⃣ DIV RODAPÉ: Fixada no pé, sem roubar espaço da centralização */}
      {/* 🚀 RODAPÉ (Original Kabelo Rock) */}
      <div className="w-full z-30">
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