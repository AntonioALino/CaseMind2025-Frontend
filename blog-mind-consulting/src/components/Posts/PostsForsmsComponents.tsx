import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { HeaderComponentLogin } from "../Home/HeaderLogin";
import { jwtDecode } from "jwt-decode";

interface Article {
  id?: string;
  title: string;
  text: string;
  image?: string;
  userId?: string
  
}

interface Props {
  mode: "create" | "edit";
}

export const ArticleForm: React.FC<Props> = ({ mode }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<Article>({ title: "", text: "" });
  const [preview, setPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (mode === "edit" && id) {
      api.get(`/posts/${id}`).then((res) => {
        
        const post = res.data;
        setForm(post);
        setPreview(`data:image/png;base64,${post.image}`); 
      });
    }
  }, [mode, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("authtoken");

    if (!token) {
        console.error("Token não encontrado");
        return;
    }

    interface TokenPayload {
        id: string;
        email: string;
        name: string;
        exp: number;
        iat: number;
    }

    const decoded = jwtDecode<TokenPayload>(token);
    const userId = decoded.id; 

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", form.text);
    formData.append('authorId', userId);
    if (imageFile) formData.append("image", imageFile);

    try {
      if (mode === "create") {
        await api.post("/posts", formData);
      } else {
        await api.put(`/posts/${id}`, formData);
      }
      navigate("/home-login");
    } catch (error) {
      console.error("Erro ao salvar artigo:", error);
    }
  };

  return (
    <>
    <HeaderComponentLogin/>
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {mode === "create" ? "Novo Artigo" : "Editar Artigo"}
        </h1>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          {mode === "create" ? "Criar" : "Salvar"}
        </button>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Título</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Inserir imagem</label>
        <input type="file" onChange={handleImage} />
        {preview && (
          <img src={preview} alt="Preview" className="mt-2 w-40 h-40 object-contain" />
        )}
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Texto</label>
        <textarea
          name="text"
          value={form.text}
          onChange={handleChange}
          rows={10}
          className="w-full p-2 border rounded"
        />
      </div>
    </form>
    </>
  );
};
