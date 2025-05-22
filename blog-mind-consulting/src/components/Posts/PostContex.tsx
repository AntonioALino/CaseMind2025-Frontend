// src/contexts/PostContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../../services/api';

interface Post {
  id: string;
  title: string;
  content: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
}

interface PostContextType {
  posts: Post[];
  fetchPosts: () => Promise<void>;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const res = await api.get('/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error('usePosts must be used within PostProvider');
  return context;
};
