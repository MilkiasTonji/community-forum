export interface Comment {
    id: number;
    content: string;
    user: User;
    replies: Comment[]
}

export interface Post {
    id: number;
    title: string;
    description: string;
    user: User;
    comments: Comment[];
    likes: number;
    bookmarked: boolean,
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