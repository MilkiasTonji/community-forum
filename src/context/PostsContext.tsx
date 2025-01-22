import { createContext, useContext, useState } from 'react';
import { Post } from '../types';

export const PostsContext = createContext<{ posts: Post[]; setPosts: React.Dispatch<React.SetStateAction<Post[]>> }>({
  posts: [],
  setPosts: () => {},
});

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
