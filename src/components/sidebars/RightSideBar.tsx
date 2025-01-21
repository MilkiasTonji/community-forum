import { CiHeart } from "react-icons/ci"
import HorizontalDivider from "../common/HorizontalDivider"

const RightSideBar = () => {
    return (
        <div className="flex flex-col bg-white h-full p-5 rounded-md">
            <h1 className="text-2xl font-bold text-black">Top Users</h1>
            <div className="flex items-center justify-between">
                <div className="flex items-center py-4">
                    {/* circular icon or image */}
                    <img src="/user_profile.jpeg" alt="User Profile" className="w-12 h-12 rounded-full" />
                    <div className="flex flex-col px-3">
                        <div className="flex items-center">
                            <h2 className="text-md font-bold text-black">Ray Hammond</h2>
                            <div className="pl-2 flex items-center text-gray-600">
                                <span className="px-1 text-xl">-</span>
                                <span>2d</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600">New York, United States</p>
                    </div>
                </div>
                <div className="flex px-2 items-center">
                    <CiHeart className="w-5 h-5" />
                    <span className="text-sm pl-1">5.3k</span>
                </div>
            </div>
            <HorizontalDivider className="py-1 mt-0" />

            {/* second to be removed */}
            <div className="flex items-center justify-between">
                <div className="flex items-center py-4">
                    {/* circular icon or image */}
                    <img src="/user_profile.jpeg" alt="User Profile" className="w-12 h-12 rounded-full" />
                    <div className="flex flex-col px-3">
                        <div className="flex items-center">
                            <h2 className="text-md font-bold text-black">Ray Hammond</h2>
                            <div className="pl-2 flex items-center text-gray-600">
                                <span className="px-1 text-xl">-</span>
                                <span>2d</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600">New York, United States</p>
                    </div>
                </div>
                <div className="flex px-2 items-center">
                    <CiHeart className="w-5 h-5" />
                    <span className="text-sm pl-1">5.3k</span>
                </div>
            </div>
            <HorizontalDivider className="py-1 mt-0" />
        </div>
    )
}

export default RightSideBar