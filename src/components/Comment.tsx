import { Comment as CommentType } from '../types'

const Comment = ({ uniqueKey, comment }: { uniqueKey: string, comment: CommentType }) => {
    const { user } = comment
    return (
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
                <div className='flex items-center mt-2 gap-3'>
                    <p className='text-sm cursor-pointer'>Like</p>
                    <p className='text-sm cursor-pointer'>Reply</p>
                </div>
            </div>
        </div>
    )
}

export default Comment