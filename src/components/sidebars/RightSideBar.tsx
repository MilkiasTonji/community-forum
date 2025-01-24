import { CiHeart } from "react-icons/ci"
import HorizontalDivider from "../common/HorizontalDivider"
import { usePosts } from "../../hooks/usePosts";

const RightSideBar = () => {
    const {posts} = usePosts();
    // Aggregate likes for each user
    const userLikes = posts.reduce((acc, post) => {
        const userName = post.user.userName;
        if (!acc[userName]) {
            acc[userName] = { ...post.user, totalLikes: 0 };
        }
        acc[userName].totalLikes += post.likes;
        return acc;
    }, {} as Record<string, { fullName: string; userName: string; totalLikes: number }>);


    // Convert aggregated data to array and sort by totalLikes
    const sortedUsers = Object.values(userLikes).sort(
        (a, b) => b.totalLikes - a.totalLikes
    );


    return (
        <div className="flex flex-col bg-white h-full p-5 rounded-md">
            <h1 className="text-2xl font-bold text-black">Top Users</h1>
            {
                sortedUsers && sortedUsers.map((user, index) => {
                    return (
                        <div className="flex flex-col" key={`${index}-${user.userName}`}>
                            <div className="flex items-center justify-between flex-wrap">
                                <div className="flex items-center py-4">
                                    {/* circular icon or image */}
                                    <img src="/user_profile.jpeg" alt="User Profile" className="lg:w-12 lg:h-12 w-9 h-9 rounded-full" />
                                    <div className="flex flex-col px-3">
                                        <div className="flex items-center">
                                            <h2 className="lg:text-md text-sm font-bold text-black">{user.fullName}</h2>
                                            <div className="pl-2 flex items-center text-gray-600 lg:block hidden">
                                                <span className="px-1 text-xl">-</span>
                                                <span>2d</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-600 lg:block hidden">New York, United States</p>
                                        <p className="text-xs text-gray-600 lg:hidden block">New York, US</p>
                                    </div>
                                </div>
                                <div className="flex px-2 items-center">
                                    <CiHeart className="w-5 h-5" />
                                    <span className="text-sm pl-1">{user.totalLikes}</span>
                                </div>
                            </div>
                            <HorizontalDivider className="py-1 mt-0" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RightSideBar