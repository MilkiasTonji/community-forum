import Post from "./components/Post"

import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import CommonLayout from "./CommonLayout";

function App() {

  return (
    <CommonLayout>
      <Post />
    </CommonLayout>
  )
}



export default App
