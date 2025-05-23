export const SideNews = ({ posts }: { posts: any[] }) => (
  <div className="bg-black text-white p-6 rounded-lg ">
    <h3 className="text-6xl font-bold mb-4 ">New</h3>
    <ul className="space-y-2 text-sm">
      {posts.map((post, idx) => (
        <>
        <div className="pb-5">
        <li key={idx} className="font-semibold text-white text-base leading-snug ">{post.title}</li>
        <li key={idx} className="hover:underline cursor-pointer opacity-80 hover:opacity-100 transition-opacity text-sm">{post.content}</li>
        </div> 
        </>
      ))}
    </ul>
  </div>
);