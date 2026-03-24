import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 px-6 pb-8 pt-16 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-base font-extrabold text-white">
              E
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">EDUVAULT</h2>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Academic SaaS Platform
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-400">
            EduVault helps colleges publish verified student portfolios,
            shortlist project work, and run a marketplace that feels active
            instead of empty.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
              142 portfolios live
            </span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
              38 sellers active this month
            </span>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="transition hover:text-white">Home</Link></li>
            <li><Link to="/products" className="transition hover:text-white">Student Marketplace</Link></li>
            <li><Link to="/top-students" className="transition hover:text-white">Student Leaderboard</Link></li>
            <li><Link to="/colleges" className="transition hover:text-white">Partner Colleges</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">For Institutions</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/department" className="transition hover:text-white">Department Directory</Link></li>
            <li><Link to="/portfolio" className="transition hover:text-white">Portfolio Builder</Link></li>
            <li><Link to="/students" className="transition hover:text-white">Student Profiles</Link></li>
            <li><Link to="/signup" className="transition hover:text-white">Start Campus Pilot</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Contact</h3>
          <p className="text-sm text-slate-400">support@eduvault.in</p>
          <p className="mt-2 text-sm text-slate-400">Reply time: usually under 3 hours</p>
          <p className="mt-2 text-sm text-slate-400">Karnal, Haryana, India</p>
          <p className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-500">
            Updated 2 days ago
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
        © 2026 EDUVAULT. Built for colleges, departments, and student creators.
      </div>
    </footer>
  );
}

export default Footer;
