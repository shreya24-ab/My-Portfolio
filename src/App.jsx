// src/App.jsx

import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <BrowserRouter>

      <div className="app-shell">

        {/* NAVBAR */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* MAIN CONTENT */}
        <main className="page-content">

          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* ABOUT */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* PROJECTS */}
            <Route
              path="/projects"
              element={<Projects />}
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* INVALID PAGE */}
            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </main>

        {/* FOOTER */}
        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;