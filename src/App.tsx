import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhoneAlt, FaLinkedinIn, FaYoutube, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import WhatsAppIcon from './assets/icon-whatsapp.svg'; // CERTIFIQUE-SE QUE O NOME NA PASTA É ESTE

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Olá! Como posso ajudar?', sender: 'bot', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const msg: Message = { id: Date.now().toString(), text: inputValue, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, msg]);
    setInputValue('');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header Simples */}
      <header className="bg-white shadow-md sticky top-0 z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MOVER HELIPA</h1>
          <nav className="space-x-4 font-medium text-gray-600">
            <a href="#inicio" className="hover:text-blue-600">Início</a>
            <a href="#contato" className="hover:text-blue-600">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4">Bem-vindo à MOVER</h2>
          <p className="text-xl mb-8">Transformando vidas em Heliópolis.</p>
          <a href="http://wa.me/5511996744126" target="_blank" className="bg-[#25D366] px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-all inline-flex items-center gap-2">
             <img src={WhatsAppIcon} alt="" className="w-6 h-6" /> WhatsApp Oficial
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 text-center border-t border-gray-800">
        <p>MOVER - Todos os direitos reservados @ 2026</p>
      </footer>

      {/* Botão Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all"
        >
          {isOpen ? <FaTimes size={28} /> : <img src={WhatsAppIcon} className="w-10 h-10" />}
        </button>
      </div>
    </div>
  );
}

export default App;