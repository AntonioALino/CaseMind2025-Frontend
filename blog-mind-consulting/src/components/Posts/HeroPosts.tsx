export const HeroPost = ({ post }: { post: any }) => (
  <div>
    <img src={post.imageUrl} alt={post.title} className="rounded-lg w-full h-64 object-cover mb-4" />
    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
    <p className="text-sm text-gray-600 mb-4">Por {post.author} — {post.date}</p>
    <button className="bg-red-500 text-white px-4 py-2 rounded">Ler mais</button>
  </div>
);