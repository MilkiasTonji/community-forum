import { useState } from 'react';
import { Comment as CommentType, Post } from '../types'
import { usePosts } from '../hooks/usePosts';
import ReplyInput from './ReplyInput';

const Comment = ({ uniqueKey, comment, post }: { uniqueKey: string, comment: CommentType, post: Post }) => {
    const { user, replies } = comment
    const { addReply } = usePosts();


    const [commentReplyOpen, setCommentReplyOpen] = useState<boolean>(false);

    const toggleCommentReply = () => {
        setCommentReplyOpen(!commentReplyOpen);
    }

    return (
        <div className='w-full flex flex-col md:mx-5 mx-2'>
            <div className='w-full flex gap-2 my-3' key={uniqueKey}>
                <img src="/user_profile.jpeg" alt="User Profile" className="w-9 h-9 rounded-full" />
                <div className="flex flex-col px-3 py-1 rounded-md bg-gray-100">
                    <div className="flex items-center">
                        <h2 className="text-md font-bold text-black">{user.fullName}</h2>
                        <div className="pl-2 flex items-center text-gray-600">
                            <span className="px-1 text-xl">-</span>
                            <span>2d</span>
                        </div>
                    </div>
                    <p>{comment.content}</p>
                    <div className='flex items-center mt-2 gap-3' onClick={toggleCommentReply}>
                        <p className='text-sm cursor-pointer'>Reply</p>
                    </div>
                </div>
            </div>

            <div className='w-full flex gap-2 justify-center'>
                {
                    commentReplyOpen &&
                    <ReplyInput 
                        postId={post.id} 
                        commentId={comment.id} 
                        addReply={addReply} 
                        type="comment" 
                        toggleCommentReply={toggleCommentReply} 
                    />
                }
            </div>

            {/* display replies here */}
            <div className='flex flex-col items-center mx:1'>
                {
                    replies && replies.map((reply, index) => {
                        return (
                            <Replies 
                                uniqueKey={`${reply.id}-${index}`} 
                                reply={reply} 
                                key={`${reply.id}-${index}`} 
                                post={post} 
                                comment={comment}
                                depth={1}
                                toggleCommentReply={toggleCommentReply}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

const Replies = ({ uniqueKey, reply, post, comment, depth, toggleCommentReply }: { uniqueKey: string, reply: CommentType, post: Post, comment: CommentType, depth: number, toggleCommentReply: any }) => {
    const { user, replies } = reply
    const [openTextInput, setOpenTextInput] = useState<boolean>(false);
    const { addReply } = usePosts();

    const toggleTextInput = () => {
        setOpenTextInput(!openTextInput)
    }
    return (
        <div className='w-full flex flex-col mx-1'
            style={{ paddingLeft: `${depth * 20}px` }} // indentation
        >
            <div className='w-full flex gap-2 my-2 mx-5' key={uniqueKey}>
                <img src="/user_profile.jpeg" alt="User Profile" className="w-7 h-7 rounded-full" />
                <div className="flex flex-col px-3 py-1 rounded-md bg-gray-100">
                    <div className="flex items-center">
                        <h2 className="text-md font-bold text-black">{user.fullName}</h2>
                        <div className="pl-2 flex items-center text-gray-600">
                            <span className="px-1 text-xl">-</span>
                            <span>2d</span>
                        </div>
                    </div>
                    <p className='text-sm'>{reply.content}</p>
                    <div className='flex items-center mt-2 gap-3' onClick={toggleTextInput}>
                        <p className='text-sm cursor-pointer'>Reply</p>
                    </div>
                </div>
            </div>

            <div className='w-full flex gap-2 justify-end'>
                {
                    openTextInput &&
                    <ReplyInput 
                        postId={post.id} 
                        commentId={comment.id} 
                        addReply={addReply} 
                        replyId={reply.id} 
                        type="reply" 
                        toggleCommentReply={toggleTextInput} 
                    />
                }
            </div>

            {/* display replies here */}
            <div className='w-full flex flex-col items-center mx-1'>
                {
                    replies && replies.map((reply, index) => {
                        return (
                            <Replies 
                                uniqueKey={`${reply.id}-${index}`} 
                                reply={reply} 
                                key={`${reply.id}-${index}`} 
                                post={post} 
                                comment={comment}
                                depth={depth + 1}
                                toggleCommentReply={toggleTextInput}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Comment