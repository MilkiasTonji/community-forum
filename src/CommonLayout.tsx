import { FaPlus } from "react-icons/fa"
import LeftSideBar from "./components/sidebars/LeftSideBar"
import RightSideBar from "./components/sidebars/RightSideBar"
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import DOMPurify from 'dompurify';


import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

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
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        )
      }
    </div>
  )
}


const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {

  const [editorState, setEditorState] = useState<any>(EditorState.createEmpty())
  const [htmlContent, setHtmlContent] = useState<string>('');

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState)
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setHtmlContent(html)

  }

  const handlePost = () => {
    console.log(htmlContent);
  }
  if (!isOpen) return null;

  return (
    <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[100%] max-w-2xl rounded-lg shadow-lg p-6 relative">
        <IoMdClose className="w-6 h-6 text-black cursor-pointer absolute right-5 top-3" onClick={onClose} />
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Post</h2>

        <div>
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper border p-4"
            editorClassName="demo-editor min-h-[200px] border border-gray-300 p-2 rounded"
            onEditorStateChange={onEditorStateChange}
          />
          {/* sanitize the htmlContent to avoid potential XSS attacks */}
          <div className="prose prose-lg max-w-none bg-gray-100 p-4 rounded border"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }} />

        </div>
        <div className="flex justify-end">
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
