import { createContext } from "react";
import { Post, User } from "../types";

interface PostContextType {
  posts: Post[];
  addPost: (newPost: Post) => void;
  toggleBookmark: (postId: number) => void;
  toggleLikePost: (postId: number) => void;
  addComment: (postId: number, commentText: string, user: User) => void;
  addReply: (postId: number, commentId: number, replyText: string, user: User,  parentReplyId?: number) => void;
  user: any;
  login: (userData: any) => void;
  logout: () => void;
  loadUser: () => void;
}

export const PostContext = createContext<PostContextType | undefined>(undefined);
