import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { HeaderComponentLogout } from "../components/Home/HeaderLogout";

interface Post {
  authorId: string,
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  slug: string
}

export const ViewPostLogout: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); 
  const [post, setPost] = useState<Post | null>(null);


    useEffect(() => {
      api.get(`/posts/${slug}`) 
        .then(res => setPost(res.data))
        .catch(err => console.error("Erro:", err));
    }, [slug]);
      if (!post) return <p>Carregando...</p>;

  return (
    <>
      <HeaderComponentLogout />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded mb-6" />
        <p className="text-gray-700 mb-4">{post.content}</p>
        <p className="text-sm text-gray-500">Criado em: {new Date(post.createdAt).toLocaleDateString()}</p>
      </div>
    </>
  );
};
