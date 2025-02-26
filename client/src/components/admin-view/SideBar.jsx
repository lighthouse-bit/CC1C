import { Home, User,Text,HandCoins,HelpCircle,  Image, MessageCircle, Bell, LogOut, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import rounded from "../../assets/rounded.png";

const SideBar = () => {
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
    <div className="w-64 h-screen bg-gray-100 p-4 shadow-md">
       {/* Logo Section */}
       <div className="flex items-center gap-2 mb-4">
        <img src={rounded} alt="CCIS Logo" className="w-12 h-12" /> 
      </div>
      <h2 className="mb-3">GENERAL</h2>
      <hr />
      <nav className="mb-6">
        {menuItems.map(({ name, icon: Icon, path }) => (
          <NavLink key={name} to={path} className="flex items-center gap-2 p-2 mb-2 hover:bg-gray-200 rounded">
            <Icon size={20} />
            {name}
          </NavLink>
        ))}
      </nav>

      <h2 className="mb-3">ACCOUNT</h2>
      <div className="mt-auto border-t pt-2">
        <NavLink to="/admin/settings" className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
          <Settings size={20} /> Settings
        </NavLink>
        <NavLink to="/admin/settings" className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
          <HelpCircle  size={20} /> Help
        </NavLink>
        <button className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded w-full text-left">
          <LogOut size={20} /> Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;