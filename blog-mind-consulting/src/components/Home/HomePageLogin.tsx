import { usePosts } from '../Posts/PostContex';
import { ImageFromData } from '../ImagesComponent/ImagesConverter'; // ajuste o caminho conforme necessário
import { HeaderComponentLogin } from '../Home/HeaderLogin';

export const HomeLoginComponent = () => {
  const { posts } = usePosts();

  return (
    <div>
      <div>
        <HeaderComponentLogin />
      </div>
      <div className="p-4 max-w-7xl mx-auto">
        {Array.isArray(posts) && posts.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">{posts[0].title}</h2>
            <ImageFromData data={posts[0].image} alt="Post" />
            {posts[0].content ? (
              <p>{posts[0].content.substring(0, 100)}...</p>
            ) : (
              <p>Sem conteúdo disponível</p>
            )}

            <div className="grid grid-cols-3 gap-4 mt-8">
              {posts.slice(1).map((post, i) => (
                <div key={post.id || i} className="border p-2 rounded shadow">
                  <ImageFromData data={post.image} alt={`thumb-${i}`} />
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-500">
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
