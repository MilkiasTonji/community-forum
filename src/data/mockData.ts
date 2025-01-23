import { Post } from "../types";

export const posts: Post[] = [
  {
    id: 1,
    user: {
      fullName: "Ray Hammond",
      userName: "mikeTonji",
    },
    title: "My First Post",
    description:
      "I'm so glad to share with you guys some photos from my recent trip to the New-York. This city looks amazing, the buildings,nature,people all are beautiful. I highly recommend to visit this cool place! Also I would like to know what is your favorite place here or what you would like visit?",
    likes: 10,
    bookmarked: false,
    isLiked: false,
    comments: [
      {
        id: 101,
        user: {
          fullName: "Jack Smith",
          userName: "jack",
        },
        content: "Great post, Ray!. I would like to visit New-York as well and you will guide me okay",
        replies: [],
      },
      {
        id: 101,
        user: {
          fullName: "Mary Smith",
          userName: "mary",
        },
        content: "Great post, Ray!. Let's do it together again",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    user: {
      fullName: "Jack Smith",
      userName: "jack",
    },
    title: "Hello World",
    description: "Excited to join this platform!",
    likes: 8,
    bookmarked: false,
    isLiked: false,
    comments: [
      {
        id: 101,
        user: {
          fullName: "Ray Hammond",
          userName: "ray",
        },
        content: "Great post, Alice!",
        replies: [],
      },
    ],
  },
  {
    id: 3,
    user: {
      fullName: "Mary Smith",
      userName: "mary",
    },
    title: "My top post",
    description:
      "I am really excited to share you about my thoughts on current American Politics issues. I like what is happening anyways",
    likes: 5,
    bookmarked: false,
    isLiked: false,
    comments: [
      {
        id: 101,
        user: {
          fullName: "John Doe",
          userName: "joe",
        },
        content: "Great post, Jack!",
        replies: [],
      },
    ],
  },
  {
    id: 4,
    user: {
      fullName: "John Doe ",
      userName: "joe",
    },
    title: "Lorem got back to posting",
    description:
      "I am really excited to share you about my thoughts on current American Politics issues. I like what is happening anyways",
    likes: 3,
    bookmarked: false,
    isLiked: false,
    comments: [
      {
        id: 101,
        user: {
          fullName: "Mary Smith",
          userName: "mary",
        },
        content: "Great post, Lorem!",
        replies: [],
      },
    ],
  },
];
