import { Routes, Route } from "react-router-dom";
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

        <Route
          path="/passenger"
          element={
            <div className="temporary-page">
              <h1>Passenger Dashboard</h1>
              <p>Coming soon...</p>
            </div>
          }
        />

        <Route
          path="/driver"
          element={
            <div className="temporary-page">
              <h1>Driver Dashboard</h1>
              <p>Coming soon...</p>
            </div>
          }
        />

        <Route
          path="/rides"
          element={
            <div className="temporary-page">
              <h1>Available Rides</h1>
              <p>Coming soon...</p>
            </div>
          }
        />

        <Route
          path="/about"
          element={
            <div className="temporary-page">
              <h1>About Khedni</h1>
              <p>Connecting people along the same route.</p>
            </div>
          }
        />

        <Route
          path="/contact"
          element={
            <div className="temporary-page">
              <h1>Contact Us</h1>
              <p>Contact page coming soon...</p>
            </div>
          }
        />

        <Route
          path="*"
          element={
            <div className="temporary-page">
              <h1>Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
