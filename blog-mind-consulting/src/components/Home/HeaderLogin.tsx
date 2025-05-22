import React, { useState } from 'react';
import { ModalPerfil } from '../ModalPerfil';

export const HeaderComponentLogin: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header className="w-full bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-900">
          <h2>M.</h2>
        </div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="/home-login" className="hover:text-black transition-colors">Home</a>
            <a href="#" className="hover:text-black transition-colors">Artigos</a>
            <div className="h-5 w-[1px] bg-gray-300 self-center" />
            <a href="/create-posts" className="hover:text-black transition-colors">Publicar</a>
          </nav>

          <div className="relative">
            <button onClick={toggleModal}>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
              />
            </button>

            {showModal && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border rounded shadow-lg z-50">
                <ModalPerfil />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
