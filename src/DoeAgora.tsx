import React from 'react';

// 1. Importe a imagem aqui dentro também
import img_25_site from './assets/images/image_25_site_Heliopolis_A4.webp';

const DoeAgora: React.FC = () => {
  return (
    /* 2. Container Principal: Ocupa a tela toda (min-h-screen) */
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-slate-900">
      
      {/* 🖼️ 3. A Imagem de Fundo (Heliópolis A4) */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ 
          backgroundImage: `url(${img_25_site})`, 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover' 
        }}
      />

      {/* 🌑 Overlay para garantir contraste (Opcional) */}
      <div className="absolute inset-0 bg-black/30 z-1"></div>

      {/* 💳 4. O seu Card de Doação (Agora 100% integrado ao fundo) */}
      <div 
        className="relative z-10 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center max-w-2xl w-full"
        style={{ 
          background: 'linear-gradient(to right, #ffffff, #ffffff)',
          // border: '1px solid #e2e8f0', // 👈 REMOVIDO PARA ANULAR A BORDA FINA
          boxShadow: 'inset 0 0 35px 5px #0159A1' // Aumentei um pelinho o blur pra ficar animal
        }}
      >
        <h2 className="text-orange-600 font-black text-3xl md:text-4xl mb-6 uppercase">
          DOE AGORA!
        </h2>
        
        <p className="text-gray-600 mb-8 font-medium">
          Sua contribuição transforma vidas.
        </p>

        {/* Dados Bancários */}
        <div className="bg-slate-800 text-white p-6 rounded-2xl w-full space-y-2 mb-6">
            <p className="text-sm opacity-70 uppercase tracking-widest">Banco do Brasil</p>
            <p className="text-xl md:text-2xl font-bold">Ag 3045-7 / CC 24005-2</p>
            <hr className="opacity-20 my-4" />
            <p className="text-sm opacity-70 uppercase tracking-widest">Chave PIX (CNPJ)</p>
            <p className="text-xl md:text-2xl font-bold">10.935.841/0001-44</p>
        </div>

        {/* Botão para Voltar (Importante para o usuário não ficar preso) */}
        <button 
          onClick={() => window.history.back()}
          className="text-gray-400 hover:text-[#0159A1] text-sm font-bold transition-colors uppercase tracking-widest"
        >
          ← Voltar para o site
        </button>
      </div>
    </div>
  );
};

export default DoeAgora;