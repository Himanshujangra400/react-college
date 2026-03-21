function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">EDUVAULT</h2>
          <p className="text-sm leading-relaxed text-slate-400">
            A modern academic platform helping students and institutions
            showcase excellence through digital portfolios.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/products" className="hover:text-white transition">Products Marketplace</a></li>
            <li><a href="/top-students" className="hover:text-white transition">Students</a></li>
            <li><a href="/colleges" className="hover:text-white transition">Colleges</a></li>
          </ul>
        </div>

        {/* Institution */}
        <div>
          <h3 className="text-white font-semibold mb-4">For Institutions</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Partner With Us</a></li>
            <li><a href="#" className="hover:text-white transition">Admissions</a></li>
            <li><a href="#" className="hover:text-white transition">Programs</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm text-slate-400">Email: jangrahimanshu076@gmail.com</p>
          <p className="text-sm text-slate-400 mt-2">Phone: ----------</p>
          <p className="text-sm text-slate-400 mt-2">Karnal, Haryana, India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-sm text-slate-500">
        © 2026 EDUVAULT. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;