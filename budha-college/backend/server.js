import express from "express";
import cors from "cors";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storePath = path.join(__dirname, "data", "store.json");

app.use(cors());
app.use(express.json());

const readStore = async () => {
  const data = await fs.readFile(storePath, "utf-8");
  return JSON.parse(data);
};

const writeStore = async (data) => {
  await fs.writeFile(storePath, JSON.stringify(data, null, 2), "utf-8");
};

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, message: "Backend running" });
});

app.get("/api/products", async (req, res) => {
  const { search = "", category = "All" } = req.query;
  const store = await readStore();

  const filtered = store.products.filter((product) => {
    const inCategory = category === "All" || product.cat === category;
    const query = String(search).toLowerCase();
    const inSearch =
      product.title.toLowerCase().includes(query) ||
      product.seller.toLowerCase().includes(query);

    return inCategory && inSearch;
  });

  res.json({ data: filtered });
});

app.get("/api/students", async (req, res) => {
  const { search = "" } = req.query;
  const store = await readStore();
  const query = String(search).toLowerCase();

  const filtered = store.students.filter(
    (student) =>
      student.name.toLowerCase().includes(query) ||
      student.skill.toLowerCase().includes(query),
  );

  res.json({ data: filtered });
});

app.get("/api/top-students", async (_req, res) => {
  const store = await readStore();
  res.json({ data: store.topStudents });
});

app.get("/api/portfolios/:id", async (req, res) => {
  const store = await readStore();
  const portfolio = store.portfolios[req.params.id];

  if (!portfolio) {
    return res.status(404).json({ message: "Portfolio not found" });
  }

  return res.json({ data: portfolio });
});

app.post("/api/portfolios", async (req, res) => {
  const { id, name, role, college, bio, profileImg, stats = [], projects = [] } = req.body;

  if (!id || !name) {
    return res.status(400).json({ message: "id and name are required" });
  }

  const store = await readStore();

  store.portfolios[id] = {
    name,
    role: role || "Student",
    college: college || "Budha College",
    bio: bio || "",
    profileImg: profileImg || "https://i.pravatar.cc/300",
    stats,
    projects,
  };

  await writeStore(store);

  return res.status(201).json({ message: "Portfolio saved", data: store.portfolios[id] });
});

app.post("/api/auth/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "name, email and password are required" });
  }

  const store = await readStore();
  const exists = store.users.find((user) => user.email.toLowerCase() === email.toLowerCase());

  if (exists) {
    return res.status(409).json({ message: "Email already registered" });
  }

  const newUser = {
    id: `u${Date.now()}`,
    name,
    email,
    password,
  };

  store.users.push(newUser);
  await writeStore(store);

  return res.status(201).json({
    message: "Signup successful",
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
  });
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "email and password are required" });
  }

  const store = await readStore();
  const user = store.users.find(
    (item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password,
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  return res.json({
    message: "Login successful",
    user: { id: user.id, name: user.name, email: user.email },
    token: `demo-token-${user.id}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});