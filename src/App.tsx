import { FaPlus } from "react-icons/fa"
import Post from "./components/Post"
import LeftSideBar from "./components/sidebars/LeftSideBar"
import RightSideBar from "./components/sidebars/RightSideBar"
import { useState } from "react";

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-col px-36 w-full min-h-screen bg-slate-300 relative'>
      <div className="w-full flex items-end justify-end px-10 py-4">
        <button 
        onClick={handleOpenModal}
        className="bg-[#3E5AF0] hover:bg-[#324eec] text-gray-200 font-bold py-2 px-4 rounded inline-flex items-center">
          <FaPlus className="w-4 h-4 text-white" />
          <span className="text-white font-bold px-2">Add Post</span>
        </button>
      </div>
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
      {
        isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        )
      }
    </div>
  )
}


const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-lg rounded-lg shadow-lg p-6 relative">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Modal Title</h2>
        <p className="text-gray-600 mb-6">This is the modal content. Add your form or any content here.</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};




export default App
