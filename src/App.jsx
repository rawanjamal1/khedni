import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="welcome">
              <h1 className="logo">Welcome to Khedni</h1>
              <h2 className="arabic-logo">معك</h2>
              <p className="slogan" dir="rtl">
                نفس الطريق؟ يلا منروح سوا!
              </p>
            </div>
          }
        />
        <Route path="/about" element={<div>About Khedni</div>} />
        <Route path="/services" element={<div>Our Services</div>} />
        <Route path="/contact" element={<div>Contact Us</div>} />
      </Routes>
    </>
  );
}
export default App;
