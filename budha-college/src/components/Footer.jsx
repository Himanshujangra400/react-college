function Footer() {
  return (
    <footer className="bg-slate-900 px-6 pb-8 pt-16 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-white">EDUVAULT</h2>
          <p className="text-sm leading-relaxed text-slate-400">
            A modern academic platform helping students and institutions
            showcase excellence through digital portfolios.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="transition hover:text-white">Home</a></li>
            <li><a href="/products" className="transition hover:text-white">Products Marketplace</a></li>
            <li><a href="/top-students" className="transition hover:text-white">Students</a></li>
            <li><a href="/colleges" className="transition hover:text-white">Colleges</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">For Institutions</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="transition hover:text-white">Partner With Us</a></li>
            <li><a href="#" className="transition hover:text-white">Admissions</a></li>
            <li><a href="#" className="transition hover:text-white">Programs</a></li>
            <li><a href="/contact" className="transition hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Contact</h3>
          <p className="text-sm text-slate-400">Email: jangrahimanshu076@gmail.com</p>
          <p className="mt-2 text-sm text-slate-400">Phone: ----------</p>
          <p className="mt-2 text-sm text-slate-400">Karnal, Haryana, India</p>
        </div>
      </div>

      <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
        (c) 2026 EDUVAULT. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
