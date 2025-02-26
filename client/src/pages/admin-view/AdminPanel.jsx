import React from "react";
import SideBar from "@/components/admin-view/SideBar";
import Navbar from "@/components/admin-view/Navbar";
import DashboardCards from "@/components/admin-view/DashboardCards";
import Updates from "../../components/admin-view/Updates";
import FileUpload from "@/components/admin-view/FileUpload";
import ToGallery from "@/components/admin-view/ToGallery";

const AdminPanel = () => {
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
