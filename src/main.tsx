// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import MyPosts from './components/MyPosts.tsx';
import Bookmarks from './components/Bookmarks.tsx';
import Profile from './components/Profile.tsx';


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/my-posts" element={<MyPosts />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

)
