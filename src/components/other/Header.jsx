import React from "react";

const Header = ({ changeuser, data, onRefresh }) => {
  const handleLogout = () => {
    localStorage.removeItem("loggedInuser");
    changeuser(null);
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          {data?.firstName ? `Welcome, ${data.firstName}` : "Admin Dashboard"}
        </h1>
      </div>
      <div className="flex gap-3">
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="bg-emerald-500 text-white px-3 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-1 text-sm"
            title="Refresh tasks"
          >
            🔄 Refresh
          </button>
        )}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
