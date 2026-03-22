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

  const isActive = (link) =>
    link === "/" ? location.pathname === link : location.pathname.startsWith(link);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-12">
        <Link to="/" className="flex min-w-0 flex-1 items-center gap-3 md:flex-none">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 shadow-[0_10px_25px_rgba(37,99,235,0.25)] sm:h-11 sm:w-11">
            <span className="text-base font-extrabold text-white">E</span>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="truncate text-xl font-extrabold tracking-tight text-slate-800 sm:text-2xl">
                EDUVAULT
              </span>
              <span className="hidden rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700 sm:inline-flex">
                Live
              </span>
            </div>
            <p className="hidden text-xs text-slate-500 sm:block">
              142 portfolios live
              <span className="mx-2 text-slate-300">|</span>
              Rs. 48,600 student earnings this term
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-4 font-medium md:flex">
          {menuData.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className={
                isActive(item.link)
                  ? "rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                  : "rounded-full px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
              }
            >
              {item.name}
            </Link>
          ))}

          <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 xl:block">
            Updated 2 hours ago
          </div>

          <Link to="/login" className="ml-2 text-sm font-semibold text-slate-600 hover:text-blue-700">
            Login
          </Link>

          <Link to="/signup">
            <button className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(37,99,235,0.24)] transition hover:bg-blue-700">
              Start Building
            </button>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="shrink-0 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-3 border-t border-slate-100 bg-white px-6 pb-6 pt-4 font-medium md:hidden">
          <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
            142 portfolios live
            <span className="mx-2 text-slate-300">|</span>
            Updated 2 hours ago
          </div>

          {menuData.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              onClick={() => setOpen(false)}
              className={
                isActive(item.link)
                  ? "rounded-2xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700"
                  : "rounded-2xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
              }
            >
              {item.name}
            </Link>
          ))}

          <Link to="/login" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50">
            Login
          </Link>

          <Link to="/signup" onClick={() => setOpen(false)}>
            <button className="mt-1 w-full rounded-xl bg-blue-600 py-3 font-bold text-white">
              Start Building
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
