export const SideNews = ({ posts }: { posts: any[] }) => (
  <div className="bg-black text-white p-6 rounded-lg">
    <h3 className="text-xl font-bold mb-4">New</h3>
    <ul className="space-y-2 text-sm">
      {posts.map((post, idx) => (
        <li key={idx} className="hover:underline cursor-pointer">{post.title}</li>
      ))}
    </ul>
  </div>
);