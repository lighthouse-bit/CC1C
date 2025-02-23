import React from "react";
import SideBar from "@/components/admin-view/sidebar";
import Navbar from "@/components/admin-view/Navbar";
import DashboardCards from "@/components/admin-view/DashboardCards";
import Updates from "@/components/admin-view/Updates.";

const AdminPanel = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />
      
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-blue-700">WELCOME BACK, ADMIN!</h1>
          
          {/* Dashboard Stats */}
          <DashboardCards />
          
          {/* Latest Updates */}
          <Updates />
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
