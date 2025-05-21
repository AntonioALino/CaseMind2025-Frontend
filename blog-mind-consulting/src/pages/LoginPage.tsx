import React from "react";
import { PageComponent } from "../components/PageComponent";
import { ButtonPageComponent } from "../components/ButtonPageComponent";
import { FormsPageComponent } from "../components/FormsPageComponent";

export const LoginPage: React.FC = () => {
  const handleLogin = () => {
  };

  return (
    <>
    <PageComponent
              onClick={handleLogin}
              form={<FormsPageComponent
                  titleModal="Conectar"
                  formType="text"
                  placeholder="Digite seu email"
                  inputEmail={<>
                      <label className="block mb-1 font-medium">Email</label>
                      <input
                          type="text"
                          placeholder="example@email.com"
                          onChange={(e) => console.log(e.target.value)}
                          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black" />
                  </>}
                  inputPassword={<>
                      <label className="block mb-1 font-medium">Senha</label>
                      <input
                          type="password"
                          placeholder="****"
                          onChange={(e) => console.log(e.target.value)}
                          className="w-full px-4 py-3 mb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black" />
                      <a href="#" className="text-sm text-black-500 hover:underline">
                          Esqueceu a senha?
                      </a>
                  </>} />}
              button={<ButtonPageComponent buttonTextProps="Entrar" onClick={handleLogin} />} 
              link={"#"} 
              textLink={"Novo usuário? Clique aqui!"}
            />
    </>
  );
};
