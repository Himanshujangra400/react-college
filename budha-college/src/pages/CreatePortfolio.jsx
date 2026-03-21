import { useState } from "react";
import Navbar from "../components/Navbar";

function CreatePortfolio() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-[#F8FAFF] text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-12">
        <p className="mb-2 text-xs font-medium text-slate-400">
          Home &gt; <span className="font-bold text-slate-800">Create Portfolio</span>
        </p>

        <h1 className="mb-2 text-4xl font-extrabold text-[#112D4E]">
          Create Portfolio
        </h1>
        <p className="mb-10 font-medium text-slate-500">
          Build and showcase your personal portfolio to attract opportunities.
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
                className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-sm font-bold text-slate-500 hover:bg-slate-50"
              >
                <span>Projects</span>
                <span className="rounded-lg bg-blue-100 px-2 py-0.5 text-[10px] text-blue-600">
                  2
                </span>
              </button>

              <button
                onClick={() => setActiveTab("contact")}
                className="w-full rounded-xl px-4 py-4 text-left text-sm font-bold text-slate-500 hover:bg-slate-50"
              >
                Contact Info
              </button>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-50 bg-white p-6 shadow-sm sm:p-10 lg:col-span-9">
            {activeTab === "profile" && (
              <div className="mb-12">
                <div className="flex flex-col gap-10 md:flex-row">
                  <div className="text-center">
                    <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-[2rem] border-4 border-slate-50 bg-slate-100">
                      <span className="text-sm font-semibold text-slate-400">
                        Profile
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
                          College
                        </label>
                        <select className="w-full rounded-2xl bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-blue-100">
                          <option>Budha College</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
                          Department
                        </label>
                        <select className="w-full rounded-2xl bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-blue-100">
                          <option>Fashion Design</option>
                          <option>BCA</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="mb-12">
                <div className="flex flex-col gap-6 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:flex-row">
                  <div className="flex h-40 w-full items-center justify-center rounded-2xl border-2 border-dashed bg-slate-50 text-slate-300 sm:w-56">
                    No Thumbnail
                  </div>

                  <div className="flex-1 py-2">
                    <h3 className="text-2xl font-black text-[#112D4E]">
                      Project Title Here
                    </h3>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div>
                <h2 className="text-xl font-bold text-[#112D4E]">
                  Contact Info Section Coming Soon...
                </h2>
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="border-t border-slate-100 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-sm">
          <div>Total Students 180+</div>
          <div>Top Sellers 24+</div>
          <div>Fashion Sketches 120+</div>
          <div>Total Sales 620+</div>
        </div>
      </div>
    </div>
  );
}

export default CreatePortfolio;
