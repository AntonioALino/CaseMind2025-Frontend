import React from "react";
import { ButtonLogoutComponent } from "./ButtonLogoutComponent";

export const ModalPerfil: React.FC = () => {
  return (
    <div className="flex flex-col px-4 py-3 bg-white rounded-md shadow-md border border-gray-200 w-48 text-sm space-y-2">
      <a
        href="#"
        className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded transition-colors"
      >
        Perfil
      </a>
      <a
        href="/meus-posts"
        className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded transition-colors"
      >
        Meus posts
      </a>
      <div className="pt-2 border-t border-gray-200">
        <ButtonLogoutComponent />
      </div>
    </div>
  );
};
