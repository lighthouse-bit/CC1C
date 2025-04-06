import { Bell, Search, Menu } from "lucide-react";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Left section with hamburger menu and search */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        {/* Hamburger Icon for small screens */}
        <button
          className="md:hidden"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <Menu size={24} />
        </button>

        {/* Search bar (hidden on small screens) */}
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block border p-2 rounded-md w-64"
        />
      </div>

      {/* Right section */}
      <div className="flex gap-4 items-center">
        <Bell size={24} className="cursor-pointer" />
        <img
          src="/user-avatar.png"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
