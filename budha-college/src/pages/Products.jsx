import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    {
      id: 1,
      title: "Saas Admin Dashboard",
      cat: "Web Development",
      price: "Rs. 499",
      seller: "Gavi",
      college: "Budha College",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
      studentImg: "https://i.pravatar.cc/100?img=1",
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

      <div className="mx-auto max-w-7xl flex-1 px-6 py-10">
        <h1 className="mb-2 text-4xl font-extrabold">Student Marketplace</h1>
        <p className="mb-8 text-slate-500">
          Buy and sell projects created by students
        </p>

        <div className="mb-8 flex gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 rounded-xl border px-5 py-3"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="mb-8 flex gap-4 overflow-x-auto">
          {["All", "Web Development", "Fashion Design", "AI / ML"].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-xl border px-4 py-2 ${
                category === item ? "bg-blue-100 text-blue-600" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="rounded-2xl bg-white p-4 shadow">
              <img
                src={product.img}
                alt={product.title}
                className="mb-4 rounded-xl"
              />

              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-sm text-slate-400">{product.cat}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-blue-600">{product.price}</span>
                <button className="rounded-lg bg-blue-600 px-4 py-1 text-white">
                  View
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <img
                  src={product.studentImg}
                  alt={product.seller}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm">{product.seller}</span>
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
