import React, { useState } from "react";
import { api } from "../../services/api";
import  { loginSchema } from '../../schema/loginSchema';
import type { LoginData } from '../../schema/loginSchema';
import { toast, ToastContainer } from "react-toastify";
import { InputComponent } from "../InputComponent";
import { ButtonPageComponent } from "../ButtonPageComponent";
import { useNavigate } from "react-router-dom";

export default function LoginContainer() {

    const navigate = useNavigate();

    const [form, setForm] = useState<LoginData>({ password: '', email: '' });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const payload = {
    email: form.email,
    password: form.password, 
    };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        const result = loginSchema.safeParse(form);

        if (!result.success) {
        const firstError = result.error.errors[0].message;
        toast.error(firstError); 
        return;
        }
  

    try {
        const response = await api.post('/auth/login', payload);
        const token = response.data.token;

        toast.success('Login realizado com sucesso!');

        localStorage.setItem('authtoken', token);

        navigate('/home-login')
        

    } catch(err: any) {
        toast.error("Erro ao fazer login. Verifique os dados.")
    }
    }
    return (
        <>
        <div className="w-100">
        <h2 className="text-center text-xl font-semibold mb-6" >Conectar</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <InputComponent
                    titleInput="Email"
                    name="email"
                    value={form.email}
                    type="text"
                    onChange={handleChange}
                    placeholder="examplo@email.com"
                />

                <InputComponent
                    titleInput="Senha"
                    name="password"
                    value={form.password}
                    type="password"
                    onChange={handleChange}
                    placeholder="****"
                />
                <div className="text-right">
                <a href="/recover-password" className="text-sm text-black-500 hover:underline">Esqueceu a senha? </a>
                </div>
                <ButtonPageComponent 
                    buttonTextProps={"Entrar"}
                />
            <div className="text-center">
                <a href="/register" className="text-center text-black-500 hover:underline">Novo usuário? Clique aqui!</a>
            </div>
            </form>
        </div>
            <ToastContainer position="bottom-right" autoClose={3000}/>
            
        </>
    )
}