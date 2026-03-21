import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      {/* Main */}
      <div className="flex justify-center px-6 py-20">
        <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-10 shadow-xl">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-extrabold text-[#112D4E]">
              Create Account
            </h1>
            <p className="font-medium text-slate-400">
              Join EduVault and start building your portfolio
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-slate-500">
                I agree to the{" "}
                <a
                  href="#"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Terms
                </a>{" "}
                &{" "}
                <a
                  href="#"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Privacy Policy
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-bold text-white transition hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-slate-400">Already have an account?</span>
            <a
              href="/login"
              className="ml-1 font-bold text-blue-600 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SignUp;
