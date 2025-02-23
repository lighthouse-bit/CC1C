import { Home, User, Image, MessageCircle, Bell, LogOut, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/admin" },
    { name: "User Profile", icon: User, path: "/admin/profile" },
    { name: "Typography", icon: Image, path: "/admin/typography" },
    { name: "Messages", icon: MessageCircle, path: "/admin/messages" },
    { name: "Donations", icon: Bell, path: "/admin/donations" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-100 p-4 shadow-md">
      <h2 className="text-xl font-bold mb-4">CCIS+</h2>
      <nav>
        {menuItems.map(({ name, icon: Icon, path }) => (
          <NavLink key={name} to={path} className="flex items-center gap-2 p-2 mb-2 hover:bg-gray-200 rounded">
            <Icon size={20} />
            {name}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto border-t pt-2">
        <NavLink to="/admin/settings" className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
          <Settings size={20} /> Settings
        </NavLink>
        <button className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded w-full text-left">
          <LogOut size={20} /> Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;