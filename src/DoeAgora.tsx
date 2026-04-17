import React from 'react';

// 1. Importe a imagem aqui dentro também
import img_20_site from './assets/images/image_20_site_espaco_mover_origem.webp';

// 2. Logos (Pasta logos)
import logo_1_site from './assets/logos/logo_1_site_mover_helipa.webp';
import logo_mover_catavento from './assets/logos/logo_2_site_mover_catavento.webp';
import logo_mover_novo from './assets/logos/Logo Mover Novo.webp';

const DoeAgora: React.FC = () => {
  return (
    /* 2. Container Principal: Ocupa a tela toda (min-h-screen) */
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-slate-900">
      
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
        className="relative z-10 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center max-w-2xl w-full"
        style={{ 
          background: 'linear-gradient(to right, #ffffff, #ffffff)',
          boxShadow: 'inset 0 0 35px 5px #0159A1'
        }}
      >
        <h2 className="text-red-950 font-black text-4xl md:text-6xl mb-4 uppercase tracking-tighter -mt-10 leading-none">
          DOE AGORA!
        </h2>

        {/* Dados Bancários */}
        <div className="bg-slate-800 text-white p-6 rounded-2xl w-full space-y-2 mb-6">
            <p className="text-sm opacity-70 uppercase tracking-widest">Banco do Brasil</p>
            <p className="text-xl md:text-2xl font-bold">Ag 3045-7 / CC 24005-2</p>
            <hr className="opacity-20 my-4" />
            <p className="text-sm opacity-70 uppercase tracking-widest">Chave PIX (CNPJ)</p>
            <p className="text-xl md:text-2xl font-bold">10.935.841/0001-44</p>
        </div>

        {/* 🚀 BLOCO NOVO: LOGO + MOVER + FRASE */}
        <div className="flex flex-col items-center mb-8">
            {/* Nome MOVER */}
            <div className="flex items-center justify-center gap-4 mb-3">
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
            </div>

            {/* Frase Centralizada */}
            <p className="max-w-md text-sm md:text-base text-gray-500 font-medium italic leading-relaxed">
                Juntos podemos tornar sonhos em realidade, movendo e transformando vidas nós construímos o futuro.
            </p>
        </div>

        {/* Botão para Voltar (Importante para o usuário não ficar preso) */}
        <button 
          onClick={() => window.history.back()}
          className="text-gray-400 hover:text-[#0159A1] text-sm font-bold transition-colors uppercase tracking-widest pt-4 border-t border-gray-100 w-full"
        >
          ← Voltar para o site
        </button>
      </div>
    </div>
  );
};

export default DoeAgora;