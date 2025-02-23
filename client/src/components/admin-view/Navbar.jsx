import { Bell, Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <input type="text" placeholder="Search..." className="border p-2 rounded-md w-1/3" />
      <div className="flex gap-4">
        <Bell size={24} className="cursor-pointer" />
        <img src="/user-avatar.png" alt="User" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;