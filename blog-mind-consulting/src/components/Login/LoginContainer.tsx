import React, { useState } from "react";
import { api } from "../../services/api";
import  { loginSchema } from '../../schema/loginSchema';
import type { LoginData } from '../../schema/loginSchema';
import { toast, ToastContainer } from "react-toastify";
import { InputComponent } from "../InputComponent";
import { ButtonPageComponent } from "../ButtonPageComponent";

export default function LoginContainer() {
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
        const token = response.data;

        toast.success('Login realizado com sucesso!');

        localStorage.setItem('authtoken', token);

        

    } catch(err: any) {
        toast.error("Erro ao fazer login. Verifique os dados.")
    }
    }
    return (
        <>
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

                <ButtonPageComponent 
                    buttonTextProps={"Entrar"}
                />
            </form>

            <ToastContainer position="bottom-right" autoClose={3000}/>
        </>
    )
}