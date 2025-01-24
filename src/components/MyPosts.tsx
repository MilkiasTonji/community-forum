import { useEffect } from "react"
import CommonLayout from "../CommonLayout"
import { posts } from "../data/mockData"
import { useAuth } from "../hooks/useAuth"
import PostCard from "./PostCard"
import { useNavigate } from "react-router"

const MyPosts = () => {
  const { user } = useAuth();
  const router = useNavigate();
  // Filter posts for the logged-in user
  const myPosts = posts.filter(
    (post) => user ? post.user.userName === user.userName : []
  );

  useEffect(()=> {
    if(!user){
      router("/");
    }
  },[])

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