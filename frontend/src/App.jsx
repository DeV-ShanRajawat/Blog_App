import React from "react";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import BlogAdmin from "./pages/BlogAdmin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";

export default function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/admin" element={<BlogAdmin />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
