import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
interface CommentInputProps {
    addComment: (postId:number, content: string, user: any) => void;
    postId: number;
}


const CommentInput: React.FC<CommentInputProps> = ({ postId, addComment }) => {
    const [value, setValue] = useState<string>("");
    const {user} = useAuth();

    const handleSubmit = () => {
        if(!user){
            return;
        }
        if (value.trim()) {
            const commentText: string = value?.trim();
            addComment(postId, commentText, user);
            setValue("");
        }
    };

    return (
        <div className="flex items-center gap-2">
            <input
                type="text"
                id="company"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5
         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your comment..."
                required
                value={value}
                onChange={(e) => setValue(e.target.value)} />

            <button
                onClick={handleSubmit}
                className="w-[10%] border-[1px] border-[#3E5AF0] hover:bg-[#324eec] hover:text-white text-black font-bold py-1.5 px-4 rounded inline-flex items-center"
            >
                Send
            </button>
        </div>
    )
}

export default CommentInput