import { FaPlus } from "react-icons/fa"
import LeftSideBar from "./components/sidebars/LeftSideBar"
import RightSideBar from "./components/sidebars/RightSideBar"
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';


import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Navbar from "./components/Navbar";
import { useAuth } from "./hooks/useAuth";
import { usePosts } from "./hooks/usePosts";

function CommonLayout({children}: {children: any}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-col px-36 w-full min-h-screen bg-gray-100 relative'>

      <div className="w-full h-full bg-gray-100 px-6 py-4 flex flex-col">
        {/* Navbar Component */}
        <Navbar />
        <div className="w-full flex items-end justify-end p-4">
          <button
            onClick={handleOpenModal}
            className="bg-[#3E5AF0] hover:bg-[#324eec] text-gray-200 font-bold py-2 px-4 rounded inline-flex items-center">
            <FaPlus className="w-4 h-4 text-white" />
            <span className="text-white font-bold px-2">Add Post</span>
          </button>
        </div>
        {/* Create 3 sections for left(25%), center(50%), and right(25%) sections */}
        <div className="flex items-start flex-wrap">
          {/* left section with 25% width */}
          <div className="w-[25%] p-4">
            <LeftSideBar />
          </div>
          {/* center section with 50% width */}
          <div className="w-[50%] p-5">
            {children}
          </div>

          {/* Right section with 25% width */}
          <div className="w-[25%] p-4">
            <RightSideBar />
          </div>
        </div>
      </div>
      {
        isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} setIsModalOpen={setIsModalOpen} />
        )
      }
    </div>
  )
}


const Modal = ({ isOpen, onClose, setIsModalOpen }: { isOpen: boolean; onClose: () => void, setIsModalOpen: any }) => {

 const {user} = useAuth();
 const {addPost} = usePosts();

  const [editorState, setEditorState] = useState<any>(EditorState.createEmpty())
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState)
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setHtmlContent(html)

  }

  const handlePost = () => {
    if (!title || !htmlContent){
        return;
    }
    const newPost = {
        id: Math.floor(100000 + Math.random() * 900000),
        title,
        description: htmlContent,
        likes: 0,
        bookmarked: false,
        isLiked: false,
        user: {
            fullName: user? user.fullName: '',
            userName: user? user.userName: ''
        },
        comments: []
    }
    addPost(newPost);
    setTitle("");
    setHtmlContent("");
    setEditorState(EditorState.createEmpty());
    setIsModalOpen(false);
  }
  if (!isOpen) return null;

  return (
    <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[100%] max-w-2xl rounded-lg shadow-lg p-6 relative">
        <IoMdClose className="w-6 h-6 text-black cursor-pointer absolute right-5 top-3" onClick={onClose} />
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Post</h2>

        <div className="flex flex-col gap-3">
        <div className="">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
        </div> 
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper border"
            editorClassName="demo-editor min-h-[200px] border border-gray-300 px-2 py-1 rounded"
            onEditorStateChange={onEditorStateChange}
            placeholder="Write Something..."
          />
        </div>
        <div className="flex justify-end my-3">
          <button
            onClick={handlePost}
            className="bg-[#3E5AF0] hover:bg-[#324eec] text-gray-200 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};




export default CommonLayout
