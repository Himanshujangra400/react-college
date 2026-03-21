import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <section className="flex min-h-[90vh] items-center bg-gradient-to-b from-blue-50 to-white px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-[#112D4E] md:text-6xl">
              Build Your <br /> Academic Identity
            </h1>

            <p className="mt-4 text-2xl font-semibold text-slate-700">
              Showcase Projects. Get Recognized.
            </p>

            <p className="mt-6 max-w-md text-lg text-slate-500">
              Create a verified digital academic portfolio trusted by
              institutions.
            </p>

            <div className="mt-12 flex gap-4">
              <a href="/portfolio">
                <button className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:scale-105">
                  Create Portfolio
                </button>
              </a>

              <a href="/department">
                <button className="rounded-xl border px-8 py-4 font-bold hover:bg-slate-50">
                  Explore Students
                </button>
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://cdn.prod.website-files.com/6595ee355a0f462797ab252b/660275fc3924a89897235389_0_3%20(3)-p-800.webp"
              alt="Students using EduVault"
              className="rounded-[3rem] shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-3">
          <div>
            <h2 className="text-4xl font-bold">25+</h2>
            <p className="text-slate-400">Students</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">1</h2>
            <p className="text-slate-400">Colleges</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">10+</h2>
            <p className="text-slate-400">Projects</p>
          </div>
        </div>
      </section>

      <section className="mx-4 rounded-[3rem] bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-extrabold text-[#112D4E]">
            Why Choose EduVault?
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-10 shadow">
              <h3 className="mb-2 text-xl font-bold">Upload Projects</h3>
              <p className="text-slate-500">Showcase your work easily.</p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow">
              <h3 className="mb-2 text-xl font-bold">Verified Profiles</h3>
              <p className="text-slate-500">Build trust with institutions.</p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow">
              <h3 className="mb-2 text-xl font-bold">Connect</h3>
              <p className="text-slate-500">Reach top colleges easily.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 bg-blue-600 py-24 text-center text-white">
        <h2 className="text-4xl font-extrabold">
          Ready to Build Your Academic Identity?
        </h2>

        <a href="/signup">
          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-bold text-blue-600">
            Get Started Now
          </button>
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
