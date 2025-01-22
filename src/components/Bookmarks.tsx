import { useState } from "react";
import CommonLayout from "../CommonLayout"
import { useAuth } from "../hooks/useAuth";
import PostCard from "./PostCard";
import { Post } from "../types";
import { posts } from "../data/mockData";

const Bookmarks = () => {
  const { user } = useAuth();
  const [bookmarkedPosts,] = useState<Post[]>(posts);

  const _bookmarkedPosts = bookmarkedPosts.filter((post) => post.bookmarked);


  return (
    <CommonLayout>
      <div className="">
        {
          !user && <div>You are not logged in</div>
        }
        {
          user && <PostCard posts={_bookmarkedPosts} />
        }
      </div>
    </CommonLayout>
  )
}

export default Bookmarks