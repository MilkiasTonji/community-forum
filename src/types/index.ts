export interface Comment {
    id: number;
    content: string;
    replies: Comment[]
}

export interface Post {
    id: number;
    title: string;
    description: string;
    comments: Comment[];
}

export interface linkType {
    id: number;
    to: string;
    name: string;
    icon: any;
}