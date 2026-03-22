import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    {
      id: 1,
      title: "SaaS Admin Dashboard",
      cat: "Web Development",
      price: "Rs. 499",
      seller: "Gavi",
      college: "Budha College",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
      studentImg: "https://i.pravatar.cc/100?img=1",
      badge: "Top Seller",
      sales: "12 sales",
      update: "Updated today",
      note: "Used by 3 student teams this month",
    },
    {
      id: 2,
      title: "AI Assistant Interface",
      cat: "AI / ML",
      price: "Rs. 899",
      seller: "Devansh",
      college: "Budha College",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
      studentImg: "https://i.pravatar.cc/100?img=2",
      badge: "Rising",
      sales: "7 sales",
      update: "Updated 2 days ago",
      note: "Prompt flows and UI kit included",
    },
    {
      id: 3,
      title: "Floral Summer Dress",
      cat: "Fashion Design",
      price: "Rs. 249",
      seller: "Vanshika",
      college: "Budha College",
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
      studentImg: "https://i.pravatar.cc/100?img=3",
      badge: "Verified",
      sales: "3 sales",
      update: "Updated yesterday",
      note: "Most saved fashion listing this week",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      (category === "All" || product.cat === category) &&
      (product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.seller.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFF]">
      <Navbar />

      <div className="mx-auto max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        <h1 className="mb-2 text-3xl font-extrabold text-[#112D4E] sm:text-4xl">
          Student Marketplace
        </h1>
        <p className="mb-8 text-slate-500">
          Buy and sell projects created by students with real pricing, sales,
          and recent activity built in.
        </p>

        <div className="mb-8 flex gap-4">
          <input
            type="text"
            placeholder="Search by project name or student seller..."
            className="flex-1 rounded-xl border border-slate-200 bg-white px-5 py-3 outline-none focus:ring-2 focus:ring-blue-100"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="mb-8 flex gap-4 overflow-x-auto pb-2">
          {["All", "Web Development", "Fashion Design", "AI / ML"].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-xl border px-4 py-2 text-sm font-semibold whitespace-nowrap ${
                category === item
                  ? "border-blue-100 bg-blue-100 text-blue-700"
                  : "border-slate-200 bg-white text-slate-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`rounded-2xl bg-white p-4 shadow ${
                index === 1 ? "md:translate-y-1" : ""
              }`}
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
                  {product.badge}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {product.update}
                </span>
              </div>

              <img
                src={product.img}
                alt={product.title}
                className="mb-4 rounded-xl"
              />

              <h3 className="text-lg font-bold text-slate-900">{product.title}</h3>
              <p className="text-sm font-medium text-slate-400">{product.cat}</p>
              <p className="mt-3 text-sm text-slate-500">{product.note}</p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="font-bold text-blue-600">{product.price}</span>
                <button className="rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white">
                  View Listing
                </button>
              </div>

              <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={product.studentImg}
                    alt={product.seller}
                    className="h-8 w-8 rounded-full"
                  />
                  <div>
                    <span className="block text-sm font-semibold text-slate-800">
                      {product.seller}
                    </span>
                    <span className="text-xs text-slate-400">{product.college}</span>
                  </div>
                </div>

                <span className="text-xs font-semibold text-orange-500">
                  {product.sales}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Products;
