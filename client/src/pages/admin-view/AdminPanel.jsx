import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "@/components/admin-view/SideBar";
import Navbar from "@/components/admin-view/Navbar";
import DashboardCards from "@/components/admin-view/DashboardCards";
import Updates from "../../components/admin-view/Updates";
import FileUpload from "@/components/admin-view/FileUpload";
import ToGallery from "@/components/admin-view/ToGallery";

const AdminPanel = () => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [password, setPassword] = useState("");

  const correctPassword = "AgentB24"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAccessGranted(true);
    } else {
      alert("Incorrect password!");
    }
  };

  if (!accessGranted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">Admin Access</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Admin Password"
              className="border p-2 rounded w-full"
            />
            <button
              type="submit"
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="p-6 space-y-6 flex-1 overflow-y-auto">
          <h1 className="text-2xl font-bold text-blue-700">WELCOME BACK, ADMIN!</h1>

          {/* Dashboard Stats */}
          <DashboardCards />

          {/* Blog Management Section */}
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">Blog Management</h2>
            <p className="text-gray-600">Create and manage blog posts</p>
            <Link
              to="/admin/blogs/new"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Manage Blog
            </Link>
          </div>

          {/* File Upload */}
          <FileUpload />

          {/* Gallery Upload */}
          <ToGallery />

          {/* Latest Updates */}
          <Updates />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
