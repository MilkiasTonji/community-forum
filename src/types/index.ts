export interface Comment {
    id: number;
    content: string;
    user: User;
    replies?: Reply[]
}

export interface Post {
    id: number;
    title: string;
    description: string;
    user: User;
    comments: Comment[];
    likes: number;
    bookmarked: boolean,
    isLiked: boolean
}

export interface linkType {
    id: number;
    to: string;
    name: string;
    icon: any;
}

export interface User {
    fullName: string;
    userName: string;
    password?: string;
}

export interface Reply {
    id: number;
    content: string;
    user: User;
    replies: Reply[]; // Replies of this reply
  };