import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";
import Colleges from "./pages/Colleges";
import CreatePortfolio from "./pages/CreatePortfolio";
import Department from "./pages/Department";
import Free from "./pages/Free";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotData from "./pages/NotData";
import Products from "./pages/Products";
import StudentPortfolio from "./pages/StudentPortfolio";
import Students from "./pages/Students";
import TopStudents from "./pages/TopStudents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/portfolio" element={<CreatePortfolio />} />
        <Route path="/portfolio/:id" element={<StudentPortfolio />} />
        <Route path="/department" element={<Department />} />
        <Route path="/free" element={<Free />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notdata" element={<NotData />} />
        <Route path="/products" element={<Products />} />
        <Route path="/student-portfolio" element={<StudentPortfolio />} />
        <Route path="/students" element={<Students />} />
        <Route path="/top-students" element={<TopStudents />} />
        <Route path="*" element={<NotData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
