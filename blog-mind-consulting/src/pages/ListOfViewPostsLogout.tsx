import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { HeaderComponentLogout } from "../components/Home/HeaderLogout";

interface Post {
  authorId: string,
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

export const ListViewPostsLogoutPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    
  api.get(`/posts`)
    .then(res => {
      console.log(res.data)
  setPosts(res.data);
})
    .catch((err) => console.error("Erro ao buscar posts:", err));
  }, []);

  return (
    <>
      <HeaderComponentLogout />
      <div className="max-w-6xl mx-auto p-6">
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
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
