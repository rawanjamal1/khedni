import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ChooseRole from "./pages/ChooseRole";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-role" element={<ChooseRole />} />
        <Route path="/about" element={<div>About Khedni</div>} />
        <Route path="/services" element={<div>Our Services</div>} />
        <Route path="/contact" element={<div>Contact Us</div>} />
      </Routes>
    </>
  );
}

export default App;
