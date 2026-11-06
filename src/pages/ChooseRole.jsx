import { useState } from "react";
import { Link } from "react-router-dom";

function ChooseRole() {
  const [role, setRole] = useState("");

  return (
    <main className="choose-role-page">
      <Link to="/" className="back-link">
        ← Back Home
      </Link>

      <h1>How are you riding today?</h1>
      <p>Choose your role to get started with Khedni.</p>

      <div className="role-options">
        <button
          className={role === "Passenger" ? "role active" : "role"}
          onClick={() => setRole("Passenger")}
        >
          <span>♙</span>
          <strong>Passenger</strong>
          <small>Find or request a ride</small>
        </button>

        <button
          className={role === "Driver" ? "role active" : "role"}
          onClick={() => setRole("Driver")}
        >
          <span>🚕</span>
          <strong>Driver</strong>
          <small>Browse requests and offer rides</small>
        </button>
      </div>

      {role && (
        <div className="role-message">
          You selected <strong>{role}</strong>.
          <p>Your {role} dashboard is coming next.</p>
        </div>
      )}
    </main>
  );
}

export default ChooseRole;
