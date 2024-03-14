import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import AboutMe from "./pages/about/about";
import Project from "./pages/project/project";
import Contact from "./pages/contact/contact";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
