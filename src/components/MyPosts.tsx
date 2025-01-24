import CommonLayout from "../CommonLayout"
import { usePosts } from "../hooks/usePosts"
import PostCard from "./PostCard"

const MyPosts = () => {
  const { user, posts } = usePosts();
  // Filter posts for the logged-in user
  const myPosts = posts.filter(
    (post) => user ? post.user.userName === user.userName : []
  );


  return (
    <CommonLayout>
      <div className="">
        {
          !user && <div>You are not logged in</div>
        }
        {
          user && <PostCard posts={myPosts} />
        }
      </div>
    </CommonLayout>
  )
}

export default MyPosts
