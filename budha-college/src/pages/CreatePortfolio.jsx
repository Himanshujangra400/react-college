import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createPortfolio } from "../lib/api";

function CreatePortfolio() {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    id: "",
    name: "",
    role: "Student Creator",
    college: "Budha College",
    department: "Fashion Design",
    bio: "",
    profileImg: "https://i.pravatar.cc/300",
    portfolioUrl: "",
    linkedin: "",
    github: "",
    contactEmail: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const buildId = (value) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    const finalId = form.id.trim() || buildId(form.name);

    if (!form.name.trim()) {
      setError("Please enter student name");
      return;
    }

    if (!finalId) {
      setError("Please enter a valid portfolio id or name");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        id: finalId,
        name: form.name.trim(),
        role: form.role.trim(),
        college: form.college.trim(),
        bio:
          form.bio.trim() ||
          `${form.name.trim()} from ${form.department} builds projects and actively contributes to student portfolio work.`,
        profileImg: form.profileImg.trim(),
        stats: [
          form.department,
          form.contactEmail ? `Contact: ${form.contactEmail}` : "Open for collaboration",
          "New portfolio",
        ],
        projects: [
          {
            id: 1,
            title: "Portfolio Starter Project",
            desc:
              form.portfolioUrl.trim() ||
              "Project details will be updated by the student.",
            img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
            meta: "Recently published",
          },
        ],
      };

      const response = await createPortfolio(payload);
      setMessage(response.message || "Portfolio saved successfully");
      navigate(`/portfolio/${finalId}`);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-12">
        <form onSubmit={handleSubmit}>
        <p className="mb-2 text-xs font-medium text-slate-400">
          Home &gt; <span className="font-bold text-slate-800">Create Portfolio</span>
        </p>

        <h1 className="mb-2 text-3xl font-extrabold text-[#112D4E] sm:text-4xl">
          Create Portfolio
        </h1>
        <p className="mb-10 font-medium text-slate-500">
          Build a student profile that looks ready for placement reviews,
          project sales, and portfolio sharing.
        </p>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-3">
            <div className="rounded-2xl border border-slate-50 bg-white p-2 shadow-sm">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full rounded-xl px-4 py-4 text-left text-sm font-bold ${
                  activeTab === "profile"
                    ? "border-l-4 border-blue-600 bg-blue-50 text-blue-600"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                Profile Information
              </button>

              <button
                onClick={() => setActiveTab("projects")}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-4 text-sm font-bold ${
                  activeTab === "projects"
                    ? "border-l-4 border-blue-600 bg-blue-50 text-blue-600"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <span>Projects</span>
                <span className="rounded-lg bg-blue-100 px-2 py-0.5 text-[10px] text-blue-600">
                  2
                </span>
              </button>

              <button
                onClick={() => setActiveTab("contact")}
                className={`w-full rounded-xl px-4 py-4 text-left text-sm font-bold ${
                  activeTab === "contact"
                    ? "border-l-4 border-blue-600 bg-blue-50 text-blue-600"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                Contact Info
              </button>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Progress
              </p>
              <p className="mt-3 text-2xl font-extrabold text-[#112D4E]">72%</p>
              <p className="mt-2 text-sm text-slate-500">
                One profile section, two project cards, and contact links left
                before publishing.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-50 bg-white p-5 shadow-sm sm:rounded-[2.5rem] sm:p-10 lg:col-span-9">
            {activeTab === "profile" && (
              <div className="mb-12">
                <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#112D4E]">
                      Profile Information
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                      Add the details colleges and buyers actually want to see.
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                    Draft saved 4 min ago
                  </span>
                </div>

                <div className="flex flex-col gap-10 md:flex-row">
                  <div className="text-center">
                    <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[2rem] border-4 border-slate-50 bg-slate-100 sm:h-40 sm:w-40">
                      <span className="text-sm font-semibold text-slate-400">
                        Profile Photo
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-500">
                      Recommended: clean headshot, natural light
                    </p>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
                          Student Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Enter full name"
                          className="w-full rounded-2xl bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-blue-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
                          Portfolio Id
                        </label>
                        <input
                          type="text"
                          name="id"
                          value={form.id}
                          onChange={handleChange}
                          placeholder="e.g. himanshu"
                          className="w-full rounded-2xl bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-blue-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
                          College
                        </label>
                        <select
                          name="college"
                          value={form.college}
                          onChange={handleChange}
                          className="w-full rounded-2xl bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-blue-100"
                        >
                          <option>Budha College</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
                          Department
                        </label>
                        <select
                          name="department"
                          value={form.department}
                          onChange={handleChange}
                          className="w-full rounded-2xl bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-blue-100"
                        >
                          <option>Fashion Design</option>
                          <option>BCA</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
                          Role
                        </label>
                        <input
                          type="text"
                          name="role"
                          value={form.role}
                          onChange={handleChange}
                          placeholder="e.g. Full Stack Developer"
                          className="w-full rounded-2xl bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-blue-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
                          Profile Image URL
                        </label>
                        <input
                          type="text"
                          name="profileImg"
                          value={form.profileImg}
                          onChange={handleChange}
                          placeholder="https://..."
                          className="w-full rounded-2xl bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-5">
                      <p className="text-sm font-semibold text-slate-700">
                        Portfolio headline preview
                      </p>
                      <textarea
                        name="bio"
                        value={form.bio}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Write a short bio for your portfolio"
                        className="mt-2 w-full rounded-xl bg-white p-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="mb-12">
                <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#112D4E]">
                      Projects
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                      Keep your best work visible, current, and easy to skim.
                    </p>
                  </div>
                  <button className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white sm:w-auto">
                    Add Project
                  </button>
                </div>

                <div className="flex flex-col gap-6 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:flex-row">
                  <div className="flex h-40 w-full items-center justify-center rounded-2xl border-2 border-dashed bg-slate-50 text-slate-300 sm:w-56">
                    Thumbnail Ready
                  </div>

                  <div className="flex-1 py-2">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <h3 className="text-2xl font-black text-[#112D4E]">
                        Campus Fashion Catalog
                      </h3>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
                        Live
                      </span>
                    </div>
                    <p className="text-slate-500">
                      12 product shots, a clean pricing sheet, and one public
                      case study already attached.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                        Rs. 1,200 earned
                      </span>
                      <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                        3 sales
                      </span>
                      <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                        Updated yesterday
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-extrabold text-[#112D4E]">
                    Contact Info
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Add the links recruiters and buyers usually ask for first.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="portfolioUrl"
                    value={form.portfolioUrl}
                    onChange={handleChange}
                    placeholder="Portfolio URL"
                    className="rounded-2xl bg-slate-50 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-100"
                  />
                  <input
                    type="text"
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleChange}
                    placeholder="LinkedIn Profile"
                    className="rounded-2xl bg-slate-50 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-100"
                  />
                  <input
                    type="text"
                    name="github"
                    value={form.github}
                    onChange={handleChange}
                    placeholder="GitHub or Behance"
                    className="rounded-2xl bg-slate-50 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-100"
                  />
                  <input
                    type="email"
                    name="contactEmail"
                    value={form.contactEmail}
                    onChange={handleChange}
                    placeholder="Contact Email"
                    className="rounded-2xl bg-slate-50 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white disabled:opacity-60"
                  >
                    {loading ? "Publishing..." : "Publish Portfolio"}
                  </button>

                  {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}
                  {message ? <p className="text-sm font-semibold text-green-600">{message}</p> : null}
                </div>
              </div>
            )}
          </div>
        </div>
        </form>
      </main>

      <div className="border-t border-slate-100 bg-white py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 text-sm sm:flex sm:flex-wrap sm:items-center sm:justify-between">
          <div><span className="font-bold text-slate-900">180+</span> Total Students</div>
          <div><span className="font-bold text-slate-900">24</span> Top Sellers</div>
          <div><span className="font-bold text-slate-900">120+</span> Fashion Sketches</div>
          <div><span className="font-bold text-slate-900">Rs. 62,000+</span> Total Sales</div>
        </div>
      </div>
    </div>
  );
}

export default CreatePortfolio;
