import { createContext, useState, ReactNode, useEffect } from 'react';
import { Post } from '../types';


interface PostsContextType {
  posts: Post[];
  addPost: (newPost: Post) => void;
  toggleBookmark: (postId: number) => void;
  toggleLikePost: (postId: number) => void;
}

export const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(() => {
    // Load posts from localStorage on initialization
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    // Persist posts to localStorage whenever they change
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost: Post) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const toggleBookmark = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post
      )
    );
  };

  const toggleLikePost = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.isLiked ? (post.likes || 0) - 1 : (post.likes || 0) + 1,
              isLiked: !post.isLiked, // Toggle the isLiked state
            }
          : post
      )
    );
  };


  return (
    <PostsContext.Provider value={{ posts, addPost, toggleBookmark, toggleLikePost }}>
      {children}
    </PostsContext.Provider>
  );
};

