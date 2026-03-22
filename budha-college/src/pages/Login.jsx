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

      <div className="flex justify-center px-4 py-12 sm:px-6 sm:py-20">
        <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-6 shadow-xl sm:p-10">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
              Active now
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
              142 portfolios live
            </span>
          </div>

          <div className="mb-8 text-center">
            <h1 className="mb-2 text-2xl font-extrabold text-[#112D4E] sm:text-3xl">
              Welcome Back
            </h1>
            <p className="font-medium text-slate-400">
              Login to manage portfolios, project listings, and student activity.
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

            <div className="flex flex-col items-start justify-between gap-3 text-sm sm:flex-row sm:items-center">
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
              Continue to Dashboard
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-slate-400">Don't have an account?</span>
            <a href="/signup" className="ml-1 font-bold text-blue-600 hover:underline">
              Create one
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
