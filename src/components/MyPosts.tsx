import CommonLayout from "../CommonLayout"
import { posts } from "../data/mockData"
import { useAuth } from "../hooks/useAuth"
import PostCard from "./PostCard"

const MyPosts = () => {
  const { user } = useAuth();

  // Filter posts for the logged-in user
  const myPosts = posts.filter(
    (post) => user ? post.user.userName === user.userName : []
  );

  console.log("myPosts: ", myPosts)
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