import React from 'react';
import { ButtonPageComponent } from '../ButtonPageComponent';

export const HeaderComponentLogout: React.FC = () => {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-900">
          <h2 className=''>M.</h2>
        </div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-black transition-colors">Home</a>
            <a href="#" className="hover:text-black transition-colors">Artigos</a>
            <div className="h-5 w-[1px] bg-gray-300 self-center" />
            <a href="#" className="hover:text-black transition-colors">Entrar</a>
          </nav>

          <div className="flex items-center space-x-2">
            <ButtonPageComponent buttonTextProps={'Registrar'} />
          </div>
        </div>
      </div>
    </header>
  );
};
