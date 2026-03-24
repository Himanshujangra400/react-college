const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || "Request failed");
  }

  return payload;
}

export function getProducts({ search = "", category = "All" } = {}) {
  const params = new URLSearchParams({ search, category });
  return request(`/products?${params.toString()}`);
}

export function getStudents(search = "") {
  const params = new URLSearchParams({ search });
  return request(`/students?${params.toString()}`);
}

export function getTopStudents() {
  return request("/top-students");
}

export function getPortfolio(id) {
  return request(`/portfolios/${id}`);
}

export function signup(data) {
  return request("/auth/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function login(data) {
  return request("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function createPortfolio(data) {
  return request("/portfolios", {
    method: "POST",
    body: JSON.stringify(data),
  });
}