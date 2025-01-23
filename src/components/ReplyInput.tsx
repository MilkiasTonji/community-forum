import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
interface ReplyInputProps {
    addReply: (postId:number, commentId: number, content: string, user: any, replyId?: number) => void;
    postId: number;
    commentId: number;
    replyId?: number;
    type?: string;
    toggleCommentReply: any;
}


const ReplyInput: React.FC<ReplyInputProps> = ({ postId, commentId, addReply, replyId, type, toggleCommentReply }) => {
    const [value, setValue] = useState<string>("");
    const {user} = useAuth();

    const handleSubmit = () => {
        if(!user){
            return;
        }

        if (value.trim()) {
            const commentText: string = value?.trim();
            if(type=="comment"){
                addReply(postId, commentId, commentText, user, replyId);
            }else if (type=="reply"){
                addReply(postId, commentId, commentText, user, replyId);
            }
            setValue("");
            toggleCommentReply();
        }
    };

    return (
        <div className="w-[85%] flex items-center gap-2">
            <input
                type="text"
                id="company"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5
         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your reply..."
                required
                value={value}
                onChange={(e) => setValue(e.target.value)} />

            <button
                onClick={handleSubmit}
                className=" border-[1px] border-[#3E5AF0] hover:bg-[#324eec] hover:text-white text-black font-bold py-1.5 px-4 rounded inline-flex items-center"
            >
                Reply
            </button>
        </div>
    )
}

export default ReplyInput