import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuData = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "Students", link: "/top-students" },
    { name: "Colleges", link: "/colleges" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
            <span className="font-bold text-white">E</span>
          </div>
          <span className="text-2xl font-extrabold text-slate-800">
            EDUVAULT
          </span>
        </Link>

        <div className="hidden items-center gap-8 font-medium md:flex">
          {menuData.map((item) => {
            const active = location.pathname === item.link;

            return (
              <Link
                key={item.link}
                to={item.link}
                className={
                  active
                    ? "font-semibold text-blue-600"
                    : "text-slate-600 hover:text-blue-700"
                }
              >
                {item.name}
              </Link>
            );
          })}

          <Link to="/login" className="ml-4 text-slate-600 hover:text-blue-700">
            Login
          </Link>

          <Link to="/signup">
            <button className="rounded-xl bg-blue-600 px-6 py-2 font-bold text-white transition hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-sm font-semibold md:hidden"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-slate-100 bg-white px-6 pb-6 pt-4 font-medium md:hidden">
          {menuData.map((item) => (
            <Link key={item.link} to={item.link} onClick={() => setOpen(false)}>
              {item.name}
            </Link>
          ))}

          <Link to="/login" onClick={() => setOpen(false)}>
            Login
          </Link>

          <Link to="/signup" onClick={() => setOpen(false)}>
            <button className="mt-4 rounded-xl bg-blue-600 py-2 font-bold text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
