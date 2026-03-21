import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      <div className="flex justify-center px-6 py-20">
        <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-10 shadow-xl">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-extrabold text-[#112D4E]">
              Welcome Back
            </h1>
            <p className="font-medium text-slate-400">
              Login to your EduVault account
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-200"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-200"
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-500">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                Remember me
              </label>

              <a href="#" className="font-semibold text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-bold text-white hover:bg-blue-700"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-slate-400">Don't have an account?</span>
            <a href="/signup" className="ml-1 font-bold text-blue-600 hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
