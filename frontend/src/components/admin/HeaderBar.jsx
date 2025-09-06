const HeaderBar = () => {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <button className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
    </header>
  );
};

export default HeaderBar;

