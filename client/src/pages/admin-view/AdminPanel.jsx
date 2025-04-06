import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "@/components/admin-view/SideBar";
import Navbar from "@/components/admin-view/Navbar";
import DashboardCards from "@/components/admin-view/DashboardCards";
import Updates from "@/components/admin-view/Updates";
import ToGallery from "@/components/admin-view/ToGallery";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4 text-center">Admin Access</h2>
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
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar - hidden on small screens, shown on md+ */}
      <div className="hidden md:block">
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen}/>

        <main className="p-4 sm:p-6 space-y-6 flex-1 overflow-y-auto">
          <h1 className="text-2xl font-bold text-blue-700 text-center sm:text-left">
            WELCOME BACK, ADMIN!
          </h1>

          <DashboardCards />

          {/* Blog Management */}
          <div className="p-4 sm:p-6 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">Blog Management</h2>
            <p className="text-gray-600">Create and manage blog posts</p>
            <Link
              to="/admin/blogs/new"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Manage Blog
            </Link>
          </div>

          <ToGallery />
          <Updates />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
