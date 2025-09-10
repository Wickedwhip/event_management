import AuthLayout from "../layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-[#1A1A1A] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-[#1A1A1A] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          type="submit"
          className="w-full bg-cyan-400 text-black font-bold py-3 rounded hover:bg-cyan-500 transition"
        >
          Login
        </button>
      </form>

      <div className="flex justify-between items-center mt-4 text-sm">
        <a href="/forgot-password" className="text-cyan-400 hover:underline">
          Forgot Password?
        </a>
        <a href="/register" className="text-cyan-400 hover:underline">
          Register
        </a>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
