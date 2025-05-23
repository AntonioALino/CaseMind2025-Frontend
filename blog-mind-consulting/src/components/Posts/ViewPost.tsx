import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { api } from "../../services/api";
import { HeaderComponentLogin } from "../Home/HeaderLogin";

interface Post {
  authorId: string,
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

export const ViewMyPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authtoken");
    if (!token) {
      console.error("Token não encontrado");
      return;
    }
    
  api.get(`/users/posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      console.log(res.data)
  setPosts(res.data);
})
    .catch((err) => console.error("Erro ao buscar posts:", err));
  }, []);

  const handleEdit = (id : string) => {
    navigate(`/edit-post/${id}`);
  };

  return (
    <>
      <HeaderComponentLogin />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Meus Artigos</h1>
        {posts.length === 0 ? (
          <p>Você ainda não criou nenhum post.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="border rounded-xl p-4 shadow hover:shadow-lg transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Criado em: {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <button
                  onClick={() => handleEdit(post.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Editar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
