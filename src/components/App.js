import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Property from "./Property";
import Error404 from "./Error404";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
  );
}