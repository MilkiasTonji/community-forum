
import CommonLayout from "../CommonLayout"
import { usePosts } from "../hooks/usePosts";
import PostCard from "./PostCard";

const Bookmarks = () => {
  const { user } = usePosts();
  const {posts} = usePosts();

  // Filter bookmarked posts
  const bookmarkedPosts = posts.filter((post) => post.bookmarked);

  return (
    <CommonLayout>
      <div className="">
        {
          !user && <div>You are not logged in</div>
        }
        {
          user && <PostCard posts={bookmarkedPosts} />
        }
      </div>
    </CommonLayout>
  )
}

export default Bookmarks