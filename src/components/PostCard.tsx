import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoMdShareAlt } from "react-icons/io";
import HorizontalDivider from "./common/HorizontalDivider";
import {posts} from '../data/mockData';
import { Post } from "../types";


const PosterCard = ({post}: {post: Post}) => {
    const {user} = post
    return (
        <div className="flex items-center">
            {/* circular icon or image */}
            <img src="/user_profile.jpeg" alt="User Profile" className="w-12 h-12 rounded-full" />
            <div className="flex flex-col px-3">
                <div className="flex items-center">
                    <h2 className="text-md font-bold text-black">{user.fullName}</h2>
                    <div className="pl-2 flex items-center text-gray-600">
                        <span className="px-1 text-xl">-</span>
                        <span>2d</span>
                    </div>
                </div>
                <p className="text-xs text-gray-600">New York, United States</p>
            </div>
        </div>
    )
}

const ReactionSection = ({post}: {post: Post}) => {
    const {comments} = post
    return (
        <div className="flex items-center justify-between">
            {/* likes, comments, and send section */}
            <div className="flex gap-3 items-center">
                {/* likes */}
                <div className="flex px-2 items-center">
                    <CiHeart className="w-5 h-5" />
                    <span className="text-sm pl-1">{post.likes}</span>
                </div>
                {/* comments */}
                <div className="flex px-2 items-center">
                    <FaRegComment className="w-4 h-4" />
                    <span className="text-sm pl-1">{comments.length}</span>
                </div>
            </div>
            {/* Bookmark and Share section */}

            <div className="flex items-center gap-3">
                <IoMdShareAlt className="w-6 h-6" />
                <CiBookmark className="w-5 h-5" />
            </div>
        </div>
    )
}

const PostCard = () => {
    return (
        <>
        {
            posts && posts.map((post, index) => {
                return (
                    <div className="flex flex-col bg-white rounded-md p-5 gap-5 mb-5" key={index}>
                    <PosterCard post={post} />
                    <div className="py-5">
                       {post.description}
                    </div>
        
                    {
                        index == 1 && 
                        <div className="w-full h-80 rounded-md">
                        <img src="/post_img.jpg" alt="Post Image" className="w-full h-full object-cover rounded-md" />
                    </div>
                    }
        
                    <HorizontalDivider className="py-1 mt-5" />
                    <ReactionSection post={post} />
                </div>
                )
            })

        }

        {
            !posts && <div>No Posts</div>
        }
        </>
    )
}

export default PostCard