const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
  <div className="w-full max-w-sm p-6 bg-gray-950 text-white shadow-xl rounded-xl border border-gray-800">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-cyan-400 tracking-wide">
            Admin Login
        </h2>
        <form>
            <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button
             type="submit"
             className="w-full py-2 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-400 transition-all duration-300 shadow-md hover:shadow-cyan-500/50"
            >
            Login
            </button>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;

