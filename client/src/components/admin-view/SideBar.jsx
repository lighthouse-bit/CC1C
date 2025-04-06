import { Home, User, Text, HandCoins, HelpCircle, Image, MessageCircle, Bell, LogOut, Settings, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import rounded from "../../assets/rounded.png";

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/admin" },
    { name: "User Profile", icon: User, path: "/admin/profile" },
    { name: "Typography", icon: Text, path: "/admin/typography" },
    { name: "Images", icon: Image, path: "/admin/images" },
    { name: "Messages", icon: MessageCircle, path: "/admin/messages" },
    { name: "Donations", icon: HandCoins, path: "/admin/donations" },
    { name: "Notifications", icon: Bell, path: "/admin/notfications" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden transition-opacity ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar Panel */}
      <div
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-white p-4 shadow-md transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0`}
      >
        {/* Close Button on mobile */}
        <div className="flex justify-between items-center md:hidden mb-4">
          <img src={rounded} alt="CCIS Logo" className="w-10 h-10" />
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Static Logo Section */}
        <div className="hidden md:flex items-center gap-2 mb-4">
          <img src={rounded} alt="CCIS Logo" className="w-12 h-12" />
        </div>

        <h2 className="mb-3 text-sm font-semibold">GENERAL</h2>
        <hr className="mb-4" />

        <nav className="mb-6 space-y-1">
          {menuItems.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={name}
              to={path}
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-200"
              onClick={() => setSidebarOpen(false)} // Close after click on mobile
            >
              <Icon size={20} />
              {name}
            </NavLink>
          ))}
        </nav>

        <h2 className="mb-3 text-sm font-semibold">ACCOUNT</h2>
        <div className="space-y-1 border-t pt-2">
          <NavLink to="/admin/settings" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200">
            <Settings size={20} /> Settings
          </NavLink>
          <NavLink to="/admin/help" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200">
            <HelpCircle size={20} /> Help
          </NavLink>
          <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 w-full text-left">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
