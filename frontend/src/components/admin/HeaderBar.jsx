const HeaderBar = ({ onLogout }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#121212] border-b border-gray-800">
      <h1 className="text-lg font-bold">Event Management Admin</h1>
      <button
        onClick={onLogout}
        className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition"
      >
        Logout
      </button>
    </header>
  );
};

export default HeaderBar;
