export interface Comment {
    id: number;
    content: string;
    username: string;
    replies: Comment[]
}

export interface Post {
    id: number;
    title: string;
    description: string;
    user: User;
    comments: Comment[];
    likes: number;
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