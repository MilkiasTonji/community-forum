import Post from "./components/Post"
import LeftSideBar from "./components/sidebars/LeftSideBar"
import RightSideBar from "./components/sidebars/RightSideBar"

function App() {
  return (
    <div className='flex flex-col p-36 w-full min-h-screen bg-slate-300'>
      <div className="w-full h-full bg-slate-300 px-6 py-4 flex flex-col">
        {/* Navbar Component */}
        {/* <Navbar /> */}
        {/* Create 3 sections for left(25%), center(50%), and right(25%) sections */}
          <div className="flex items-start flex-wrap">
            {/* left section with 25% width */}
            <div className="w-[25%] p-4">
              <LeftSideBar />
            </div>
            {/* center section with 50% width */}
            <div className="w-[50%] p-5">
                <Post />
            </div>

            {/* Right section with 25% width */}
            <div className="w-[25%] p-4">
              <RightSideBar />
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
