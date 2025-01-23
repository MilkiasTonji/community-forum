
import { usePosts } from "../hooks/usePosts";
import PostCard from "./PostCard"

const Post = () => {
  const {posts} = usePosts();
  return (
    <div className="">
        <PostCard posts={posts} />
    </div>
  )
}

export default Post