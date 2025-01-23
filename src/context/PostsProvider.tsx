import { useState, ReactNode, useEffect } from 'react';
import { Post, Reply, User } from '../types';
import { PostContext } from './PostContext';

import { posts as mockPosts } from '../data/mockData';

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Initialize posts data
  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    console.log("storedPosts: ", storedPosts);

    if (storedPosts && JSON.parse(storedPosts).length > 0) {
      console.log("Loading posts from localStorage");
      setPosts(JSON.parse(storedPosts));
    } else {
      // If no posts in localStorage, populate with mock data
      console.log("Populating with mockPosts");
      setPosts(mockPosts);
      localStorage.setItem("posts", JSON.stringify(mockPosts));
    }
  }, []);

  // Persist posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
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

  const addComment = (postId: number, commentText: string, user: User) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => post.id === postId ? {
              ...post,
              comments: [
                ...post.comments,
                { id: Math.floor(100000 + Math.random() * 900000), content: commentText, user: {fullName: user.fullName, userName: user.userName}, replies: []},
              ],
            }
          : post
      )
    );
  };

  const addReply = (
    postId: number,
    commentId: number,
    replyText: string,
    user: User,
    parentReplyId?: number // Optional for nested replies
  ) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const updatedComments = post.comments.map((comment) => {
            if (comment.id === commentId) {
              const addNestedReply = (replies: Reply[]): Reply[] =>
                replies.map((reply) => {
                  if (reply.id === parentReplyId) {
                    return {
                      ...reply,
                      replies: [
                        ...(reply.replies || []),
                        {
                          id: Math.floor(100000 + Math.random() * 900000),
                          content: replyText,
                          user,
                          replies: [],
                        },
                      ],
                    };
                  }
                  return {
                    ...reply,
                    replies: addNestedReply(reply.replies || []),
                  };
                });
  
              return {
                ...comment,
                replies: parentReplyId
                  ? addNestedReply(comment.replies || [])
                  : [
                      ...(comment.replies || []),
                      {
                        id: Math.floor(100000 + Math.random() * 900000),
                        content: replyText,
                        user,
                        replies: [],
                      },
                    ],
              };
            }
            return comment;
          });
  
          return {
            ...post,
            comments: updatedComments,
          };
        }
        return post;
      })
    );
  };
  

  return (
    <PostContext.Provider value={{ posts, addPost, toggleBookmark, toggleLikePost, addComment, addReply }}>
      {children}
    </PostContext.Provider>
  );
};

