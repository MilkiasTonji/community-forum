import { NavLink } from "react-router"
import { linkType } from "../../types"
import { FaHome } from "react-icons/fa"
import { FaBookmark } from "react-icons/fa6"
import { MdExplore } from "react-icons/md";



const LeftSideBar = () => {
    const links: linkType[] = [
        {
            id: 1,
            to: "/",
            name: "Home",
            icon: <FaHome className="w-4 h-4" />
        },
        {
            id: 2,
            to: "/my-posts",
            name: "My Posts",
            icon: <MdExplore className="w-4 h-4" />

        },
        {
            id: 3,
            to: "/bookmarks",
            name: "Bookmarks",
            icon: <FaBookmark className="w-4 h-4" />

        }
    ]
    return (
        <div className="flex flex-col bg-white h-full p-5 rounded-md">
            <h1 className="text-2xl font-bold text-black">Main Menu</h1>

            {
                links.map((link: linkType, index: number) => {
                    return (
                        <div className="flex flex-col justify-center mt-3" key={`${link.id} - ${index}`}>
                        <NavLink
                            to={link.to}
                            className={({ isActive }) =>  isActive ? "bg-gray-300 p-2.5 flex items-center gap-2 rounded-md text-black" : "text-black p-2.5 rounded-md flex gap-2 items-center"}
                        >
                            <span>{link.icon}</span>
                            <span>{link.name}</span>
                        </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LeftSideBar