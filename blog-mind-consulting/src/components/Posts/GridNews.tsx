export const PostGrid = ({ posts }: { posts: any[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {posts.map((post, idx) => (
      <div key={idx} className="text-center">
        <img src={post.imageUrl} alt={post.title} className="w-full h-40 object-cover rounded mb-2" />
        <h4 className="text-lg font-semibold">{post.title}</h4>
        <p className="text-gray-500 text-sm">{post.date}</p>
        <span className="text-5xl font-bold text-gray-200">{(idx + 1).toString().padStart(2, '0')}</span>
      </div>
    ))}
  </div>
);