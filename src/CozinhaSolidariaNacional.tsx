import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaFilePdf } from 'react-icons/fa';

// Imports das Imagens (Caminhos ajustados para ./assets)
import img_34_site from './assets/images/image_34_site_logo_cozinha_solidaria_nacional.webp';
import img_35_site from './assets/images/image_35_site_membros_logo_cozinha_solidaria_nacional.webp';
import img_36_site from './assets/images/image_36_site_covenio_logo_cozinha_solidaria_nacional.webp';

// Logos (Pasta logos)
import logo_mover_catavento from './assets/logos/logo_2_site_mover_catavento.webp';

const CozinhaSolidariaNacional = () => {
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
            {/* 1. TÍTULO */}
            <h1 
                className="text-3xl md:text-5xl font-bold mb-12 text-center uppercase tracking-tight"
                style={{ 
                    color: '#0159A1',
                    lineHeight: '1.5' /* 👈 Linha adicionada para controlar o espaçamento entre as linhas */
                }}
            >
                Programa Cozinha Solidaria Nacional
            </h1>

            {/* 2. LOGO PRINCIPAL */}
            <div className="w-full flex justify-center mt-14 mb-12">
                <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-xl max-w-[450px]">
                <img 
                    src={img_34_site} 
                    alt="Logo Cozinha Solidária Nacional" 
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
                <p>
                A parceria da <strong>MOVER Helipa</strong> como entidade gestora de{" "}
                <strong>39 cozinhas solidárias</strong> no âmbito do Programa Nacional de Cozinha Solidária 
                do Ministério de Desenvolvimento e Assistência Social, Família e Combate A Fome, é crucial 
                uma vez que para anteder a realidade das comunidades carentes anteriormente mencionadas, 
                incluindo Heliópolis e outros bairros e cidades vulneráveis do Estado de São Paulo. 
                Essas áreas enfrentam desafios significativos de desigualdade social, pobreza, falta de 
                acesso a serviços básicos como assistência social, educação e saúde, e possem altos 
                índices de insegurança alimentar e nutricional.
                </p>

                <p>
                A <strong>MOVER Helipa</strong> exercendo o papel de entidade gestora das cozinhas solidárias, 
                visa apoiar e beneficiar diretamente pessoas em situação de vulnerabilidade e risco social, 
                incluindo população em situação de rua e em insegurança alimentar. Sobretudo apoiar as 
                cozinhas solidárias em sua gestão, atuação e organização uma vez que estas terão o papel 
                mais importante que é fornecer as refeições diárias para essas comunidades, não apenas 
                garantindo acesso a alimentação adequada, mas também promovendo a inclusão social e o 
                fortalecimento comunitário.
                </p>

                <p>
                O Programa Nacional de Cozinha Solidária, estabelecido pela Lei nº 14.628 e regulamentado 
                pelo Decreto nº 11.937 de 2024, oferece um arcabouço legal e operacional para a 
                implementação dessas iniciativas. A MOVER Helipa, com sua expertise e comprometimento 
                comunitário, está posicionada de maneira ideal para assumir a função de entidade gestora 
                e apoiar o trabalho já realizado pelas cozinhas solidárias habilitadas de forma eficaz, 
                utilizando práticas sustentáveis e inclusivas que beneficiarão diretamente o público 
                beneficiário onde estão localizadas as cozinhas.
                </p>

                <p>
                A realidade contemplada pela parceria é a de combater a fome e fortalecer a segurança 
                alimentar e nutricional dessas populações, promovendo a inclusão social e melhorando a 
                qualidade de vida. As ações propostas neste plano de trabalho e inerentes ao Programa 
                Nacional de Cozinha Solidária, serão executadas através de <strong>39 cozinhas solidárias</strong> 
                geridas pela MOVER Helipa. Estas cozinhas estão estrategicamente distribuídas em áreas 
                periféricas e vulneráveis da cidade e estado de São Paulo, atendendo diretamente pessoas 
                em situação de rua, em insegurança alimentar e nutricional, além de outros grupos em risco social.
                </p>

                <p>
                A população diretamente beneficiada inclui pessoas vulneráveis, como famílias de baixa renda, 
                mães solo, migrantes e trabalhadores informais das comunidades. A iniciativa não apenas 
                fornecerá refeições diárias, mas também promoverá a capacitação de toda equipe gestora das 
                cozinhas em diversas áreas, incentivando a autonomia, processos organizacionais e 
                planejamento das entidades e pessoas responsáveis pelas cozinhas solidárias. Além disso, 
                as cozinhas solidárias servirão como centros comunitários, facilitando o engajamento social 
                e a criação de redes de apoio aos beneficiários.
                </p>

                {/* INFO BOX TÉCNICO */}
                <div 
                    className="bg-blue-50 p-6 md:p-10 rounded-2xl border-l-8 border-[#0159A1] mt-12 space-y-4"
                    style={{
                        background: 'linear-gradient(to right, #ffffff, #ffffff)',
                        border: '1px solid #e2e8f0',
                        boxShadow: 'inset 0 0 25px 2px #0159A1'
                    }}
                >
                    {/* 📄 LINHA DO TERMO AJUSTADA COM O ÍCONE DO PDF */}
                    <div className="flex items-center gap-3 wrap">
                        <p className="text-xl font-bold text-[#0159A1] m-0">
                            <a 
                            href="/arquivos/SEI 16158512 - Termo de Colaboração 968936.pdf"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline cursor-pointer"
                            title="Visualizar PDF do Termo de Colaboração"
                            >
                            Termo de colaboração nº 968936/2024
                            </a>
                        </p>
                        <a 
                            href="/arquivos/SEI 16158512 - Termo de Colaboração 968936.pdf"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex"
                            title="Visualizar PDF do Termo de Colaboração"
                        >
                            <FaFilePdf 
                            size={24} 
                            className="text-red-500 hover:text-red-600 cursor-pointer drop-shadow-sm mt-0.5 transition-colors duration-200" 
                            />
                        </a>
                    </div>
                    <p className="text-lg text-gray-700">
                        <strong>Período de execução:</strong> 22/11/2024 à 31/08/2026
                    </p>

                    <div className="pt-4 border-t border-blue-100">
                        <p className="text-sm font-bold uppercase text-gray-500 mb-2">
                            Conheça mais sobre o programa Cozinha Solidária Nacional:
                        </p>
                    
                        <a
                            href="https://www.gov.br/mds/pt-br/acoes-e-programas/acesso-a-alimentos-e-a-agua/programa-cozinha-solidaria" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`
                                !text-[#0159A1] font-bold underline text-lg inline-flex 
                                items-center gap-2 transition-transform duration-300 
                                hover:scale-105 origin-left                    
                            `}
                        >
                            <span>Acesse aqui o Site do Governo Federal</span>

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
                        src={img_35_site} 
                        alt="Equipe Cozinha Solidária" 
                        className="w-full rounded-t-2xl shadow-md border border-gray-100 object-cover h-auto max-h-[500px]"
                    />
                    <img 
                        src={img_36_site} 
                        alt="Convênio Cozinha Solidária" 
                        className="w-full rounded-b-2xl shadow-md border border-gray-100 object-cover h-auto max-h-[150px]"
                    />
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
                        cursor-pointer {/* 👈 Classe adicionada para transformar a seta na mãozinha */}            
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
                            
                            {/* 2.2 Nome Colorido 'MOVER' com fonte MoverReservada (.woff2)*/}
                            <span 
                                className="text-2xl md:text-3xl font-bold tracking-tighter leading-none"
                                style={{ 
                                    fontFamily: "'MoverReservada', sans-serif",
                                    fontSize: '28px',
                                    filter: "drop-shadow(1px 1px 0px rgba(0,0,0,0.1))" 
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

export default CozinhaSolidariaNacional;