import { Post } from "../types";

export const posts: Post[] = [
  {
    id: 1,
    user: {
      fullName: "Ray Hammond",
      userName: "ray",
    },
    title: "My First Post",
    description:
      "I'm so glad to share with you guys some photos from my recent trip to the New-York. This city looks amazing, the buildings,nature,people all are beautiful. I highly recommend to visit this cool place! Also I would like to know what is your favorite place here or what you would like visit?",
    likes: 10,
    comments: [
      {
        id: 101,
        username: "ray",
        content: "Great post, Alice!",
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
    likes: 5,
    comments: [
      {
        id: 101,
        username: "Bob",
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
    comments: [
      {
        id: 101,
        username: "Babi",
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
    likes: 5,
    comments: [
      {
        id: 101,
        username: "Meki",
        content: "Great post, Lorem!",
        replies: [],
      },
    ],
  },
];
