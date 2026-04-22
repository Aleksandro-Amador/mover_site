import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useNavigate } from 'react-router-dom'; // ✅ Import fundamental
import { FaArrowLeft } from 'react-icons/fa';

import logo_mover_catavento from './assets/logos/logo_2_site_mover_catavento.webp';

// ✅ 1. Definimos o estilo do Pino (Marker)
// Adicionamos as props lat e lng para o Typescript não reclamar
interface MarkerProps {
  text: string;
  lat: number;
  lng: number;
}

// ✅ 1. Definimos o estilo do Pino (Marker) - Agora com Hover!
interface MarkerProps {
  text: string;
  lat: number;
  lng: number;
}

// ✅ 1. Marker com Suporte a Clique (Mobile) e Hover (PC)
const Marker: React.FC<MarkerProps> = ({ text }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div 
      className="group relative" 
      style={{ transform: 'translate(-50%, -50%)', cursor: 'pointer', zIndex: show ? 100 : 1 }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(!show)} // 👈 Clique para abrir/fechar no celular
    >
      
      {/* 📍 O "ALFINETE" */}
      <div className={`text-2xl transition-transform duration-300 ${show ? 'scale-125' : 'scale-100'}`}>
        📍
      </div>

      {/* 🏷️ O BALÃO (Aparece se 'show' for true) */}
      <div className={`
        absolute bottom-full left-1/2 -translate-x-1/2 mb-2
        transition-all duration-300 transform
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        z-50
      `}>
        <div style={{
          color: 'white', 
          background: '#8B3035', 
          padding: '6px 12px',
          borderRadius: '12px',
          fontWeight: 'bold',
          fontSize: '11px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          position: 'relative',
          whiteSpace: 'nowrap'
        }}>
          {text}
          {/* Seta do Balão */}
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '0',
            height: '0',
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid #8B3035'
          }}></div>
        </div>
      </div>
    </div>
  );
};

const CozinhaSolidaria: React.FC = () => {
  const navigate = useNavigate();

  // ✅ 2. BASE DE DADOS (Mantive as suas coordenadas)
  const cozinhas = [
    { id: 1, nome: 'Benvinda de Jesus', lat: -23.5855, lng: -46.5746 },
    { id: 2, nome: 'Bom Prato (Barrinha)', lat: -21.1924, lng: -48.1642 },
    { id: 3, nome: 'Comida para quem tem Fome', lat: -23.5358, lng: -46.5185 },
    { id: 4, nome: 'Comunidade Cura', lat: -22.8465, lng: -47.2343 },
    { id: 5, nome: 'Cozinha Assomary', lat: -22.3117, lng: -49.0234 },
    { id: 6, nome: 'Cozinha da Infam', lat: -23.5312, lng: -46.4862 },
    { id: 7, nome: 'Cozinha do Filzao', lat: -23.6668, lng: -46.6433 },
    { id: 8, nome: 'Cozinha Escola Inst. PRAC', lat: -23.5015, lng: -46.3892 },
    { id: 9, nome: 'Cozinha Exp. Lia Esperança', lat: -23.5932, lng: -46.7865 },
    { id: 10, nome: 'Cozinha Família Povo de Rua', lat: -23.6425, lng: -46.7268 },
    { id: 11, nome: 'Baiano Zé Firmino', lat: -23.7385, lng: -46.6667 },
    { id: 12, nome: 'Cozinha Solidária Esperança', lat: -23.6265, lng: -46.4678 },
    { id: 13, nome: 'Cozinha Solidária IRV', lat: -23.4542, lng: -46.6853 },
    { id: 14, nome: 'Dona Lulu', lat: -23.5412, lng: -46.3985 },
    { id: 15, nome: 'Fiel do Bem', lat: -23.7667, lng: -46.6974 },
    { id: 16, nome: 'Grupo Ação Solidária', lat: -21.1645, lng: -47.8105 },
    { id: 17, nome: 'Inst. Comunitário Divas', lat: -23.5332, lng: -46.4715 },
    { id: 18, nome: 'Multiplicando os Alimentos', lat: -23.7412, lng: -46.6685 },
    { id: 19, nome: 'Proj. Alimenta o Corpo', lat: -23.4912, lng: -46.3458 },
    { id: 20, nome: 'Projeto em Nome da Fé', lat: -23.6642, lng: -46.7648 },
    { id: 21, nome: 'ARTC - Recanto Tia Cecília', lat: -22.8432, lng: -47.2315 },
    { id: 22, nome: 'Projeto Suprir', lat: -23.4565, lng: -46.6912 },
    { id: 23, nome: 'Luz do Saber', lat: -23.5642, lng: -46.3875 },
    { id: 24, nome: 'Cozinha Angel-Alice', lat: -23.5352, lng: -46.6185 },
    { id: 25, nome: 'Cozinha Fé Obras', lat: -22.8354, lng: -47.2412 }
  ];

  const defaultProps = {
    center: { lat: -22.5000, lng: -47.7000 }, // Centralizado na Capital SP
    zoom: 8
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="py-10 px-4">
        <div 
          className="max-w-6xl mx-auto rounded-3xl p-4 md:p-10 relative overflow-hidden bg-white shadow-2xl"
          style={{
            border: '1px solid #e2e8f0',
            boxShadow: 'inset 0 0 25px 2px #0159A1'
          }}
        >

          {/* Título e Subtítulo */}
              <div className="text-center mt-0 md:mt-[-10px] mb-6">
                <h2 className="text-4xl font-bold mb-4" 
                  style={{ 
                    color: '#0159A1',
                    fontSize: 'clamp(40px, 10vw, 10px)',
                    fontWeight: '700'
                  }}>
                  COZINHAS SOLIDÁRIAS
                  <span className="block mt-6 text-2xl md:text-3xl opacity-90 font-semibold">
                    ACOMPANHE NOSSA REDE EM TEMPO REAL
                  </span>
                </h2>
              </div>

          {/* 🗺️ MAPA */}
          <div className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative">
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyBJpl4BjN5-I79fNhVkQqq55KTPDkw0O0g' }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              options={{ gestureHandling: 'greedy' }} 
              onGoogleApiLoaded={({ map }) => {
                setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
                    }, 500);
                }}
            >
              {cozinhas.map(cozinha => (
                <Marker
                  key={cozinha.id}
                  lat={cozinha.lat}
                  lng={cozinha.lng}
                  text={cozinha.nome}
                />
              ))}
            </GoogleMapReact>
          </div>

          {/* 🚀 BOTÃO VOLTAR (Original Kabelo Rock) */}
          <div className="flex justify-center md:justify-center mt-8 w-full">
              <button 
                  onClick={() => navigate('/')} 
                  className={`
                      group flex flex-col items-center gap-2 
                      px-8 py-4 rounded-3xl transition-all duration-300 
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
                  <div className="flex items-center justify-center w-full rounded-3xl p-8 md:p-2 relative overflow-hidden">
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

export default CozinhaSolidaria;