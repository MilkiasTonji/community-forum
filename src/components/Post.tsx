import PostCard from "./PostCard"
import { posts } from '../data/mockData';

const Post = () => {
  return (
    <div className="">
        <PostCard posts={posts} />
    </div>
  )
}

export default Post