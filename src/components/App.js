import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Housing from "./Housing";
import Error404 from "./Error404";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/house/:id" element={<Housing />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
  );
}