import { useNavigate } from "react-router-dom";
import { ImageFromData } from "../ImagesComponent/ImagesConverter";
import { usePosts } from "../Posts/PostContex";
import { SideNews } from "../Posts/SideNews";
import { HeaderComponentLogin } from "./HeaderLogin";

export const HomeLoginComponent = () => {
  const { posts } = usePosts();
  const navigate = useNavigate();

  return (
    <div>
      <HeaderComponentLogin />

      <div className="p-4 max-w-7xl mx-auto">
        {Array.isArray(posts) && posts.length > 0 ? (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <ImageFromData
                  data={posts[0].image}
                  alt="Post"
                  className="rounded-lg w-full h-100 object-cover mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{posts[0].title}</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Por {posts[0].name} — {new Date(posts[0].createdAt).toLocaleDateString()}
                </p>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => navigate(`/post/${posts[0].id}`)}
                  >
                    Ler mais
                  </button>
              </div>

              <div className="w-full md:w-[300px]">
                <SideNews posts={posts.slice(1)} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {posts.slice(1, 4).map((post, i) => (
                <div key={post.id || i} className="border p-2 rounded shadow">
                  <ImageFromData
                    data={post.image}
                    alt={`thumb-${i}`}
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-gray-500 text-sm">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Carregando posts...</p>
        )}
      </div>
    </div>
  );
};
