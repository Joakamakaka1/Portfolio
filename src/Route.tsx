import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Projects from "./pages/projects";
import SelectLanguage from "./pages/selectLanguage";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/selectLanguage" element={<SelectLanguage />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
