// font-family: "Bookman Old Style", "Bookman", "URW Bookman L", "serif";

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Imports das Imagens (Caminhos ajustados para ./assets)
import img_34_site from './assets/images/image_34_site_logo_cozinha_solidaria_nacional.webp';
import img_18_site from './assets/images/image_18_site_rede_cozinha.webp';
import img_36_site from './assets/images/image_36_site_covenio_logo_cozinha_solidaria_nacional.webp';

// Logos (Pasta logos)
import logo_mover_catavento from './assets/logos/logo_2_site_mover_catavento.webp';
import logo_rede_cozinha_escola from './assets/logos/Rede_Cozinha_Escola/logo_rede_cozinha_escola.webp';

const RedeCozinhaEscola = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
        {/* Container externo para dar respiro à moldura */}
        <main className="max-w-6xl mx-auto px-4 pt-12 mt-8 md:pt-4 pb-24">

            {/* 🟦 1. CAIXA GRADIENTE MESTRE (A Moldura Mover) */}
            <div 
            className="rounded-3xl p-8 md:p-16 relative overflow-hidden"
            style={{
                background: 'linear-gradient(to right, #ffffff, #ffffff)',
                border: '1px solid #e2e8f0',
                boxShadow: 'inset 0 0 25px 2px #0159A1'
            }}
            >
            {/* 1. TÍTULO ESTILIZADO (Estilo Bookman Cozinha Escola) */}
            <h1 
                className="text-4xl md:text-6xl font-bold mb-12 text-center uppercase tracking-tight"
                style={{ 
                    color: '#0159A1',
                    fontFamily: '"Bookman Old Style", "Bookman", "serif"', // Fonte da imagem
                    fontWeight: 800, // Deixa bem robusta como na foto
                    letterSpacing: '-1px' // Aproxima um pouco as letras para o estilo da logo
                }}
            >
                Programa Rede Cozinha Escola
            </h1>

            {/* 2. LOGO PRINCIPAL */}
            <div className="w-full flex justify-center mt-14 mb-12">
                <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-xl max-w-[450px]">
                <img 
                    src={logo_rede_cozinha_escola} 
                    alt="Logo Rede Cozinha Escola" 
                    className="w-full h-auto object-contain"
                />
                </div>
            </div>

            {/* 3. BLOCO DE TEXTO */}
            <div 
                className="space-y-8 text-justify"
                style={{ 
                fontFamily: '"Roboto", sans-serif', 
                fontSize: '18px', 
                lineHeight: '1.8', 
                color: '#4b5563' 
                }}
            >
                <p>Programa criado pela Prefeitura de São Paulo em parceria com 65 Organizações da Sociedade Civil, para atender a população que mais precisa, produzindo em cada cozinha, no mínimo, 400 refeições saudáveis de segunda a sábado e promovendo a capacitação profissional na área de serviços de alimentação.</p>

                {/* INFO BOX TÉCNICO */}
                <div 
                    className="bg-blue-50 p-6 md:p-10 rounded-2xl border-l-8 border-[#0159A1] mt-12 space-y-4"
                    style={{
                        background: 'linear-gradient(to right, #ffffff, #ffffff)',
                        border: '1px solid #e2e8f0',
                        boxShadow: 'inset 0 0 25px 2px #0159A1'
                    }}
                >
                        <p className="text-xl font-bold text-[#0159A1]">Termo de Aditivo 03 ao Termo de Colaboração TCL 029/2023/SMDHC/SESANA</p>
                        <p className="text-lg text-gray-700"><strong>Período de execução:</strong> 18/08/2025 à 17/08/2026</p>

                    <div className="pt-4 border-t border-blue-100">
                        <p className="text-sm font-bold uppercase text-gray-500 mb-2">
                            Conheça mais sobre o programa Rede Cozinha Escola:
                        </p>
                        <a 
                            href="https://prefeitura.sp.gov.br/web/direitos_humanos/rede_cozinha_escola" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Acesse o site oficial da Rede Cozinha Escola - Prefeitura de SP"
                            className={`
                                !text-[#0159A1] font-bold underline text-lg inline-flex 
                                items-center gap-2 transition-transform duration-300 
                                hover:scale-105 origin-left                    
                            `}
                        >
                            <span>Clique aqui para acessar o site da PMSP</span>

                            {/* Ícone para reforçar que é um link e não apenas texto */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* IMAGENS FINAIS (Empilhadas verticalmente) */}
                <div className="flex flex-col"> 
                    {/* 🚀 Trocamos o 'grid' por 'flex-col' para ficar uma abaixo da outra */}
                    <img 
                        src={img_18_site} 
                        alt="Equipe Cozinha Solidária" 
                        className="w-full rounded-t-2xl shadow-md border border-gray-100 object-cover h-auto max-h-[500px]"
                    />
                   {/* <img 
                        src={img_36_site} 
                        alt="Convênio Cozinha Solidária" 
                        className="w-full rounded-b-2xl shadow-md border border-gray-100 object-cover h-auto max-h-[150px]"
                    />*/}
                </div>

            </div> {/* Fim do bloco de texto */}

            {/* BOTÃO VOLTAR (Fora da caixa para não poluir) */}
            <div className="flex justify-center mt-18 mb-0">
                <button 
                    onClick={() => navigate('/')} /* Garante que volta para a home */
                    className={`
                        group flex flex-col items-center gap-2.5 
                        px-6 py-2 rounded-3xl transition-all duration-300 
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
                        className="flex items-center justify-center w-full rounded-3xl p-1 md:p-2 relative overflow-hidden"
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

            </div> {/* Fim da Caixa Mestre */}

        </main>

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

    </div>
  );
};

export default RedeCozinhaEscola;