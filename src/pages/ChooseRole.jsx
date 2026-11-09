import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChooseRole.css";

function ChooseRole() {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  function handleContinue() {
    if (selectedRole === "passenger") {
      navigate("/passenger");
    } else if (selectedRole === "driver") {
      navigate("/driver");
    }
  }

  return (
    <main className="choose-role-page">
      <div className="choose-role-content">
        <p className="role-label">WELCOME TO KHEDNI</p>

        <h1>
          Your journey starts <span>here.</span>
        </h1>

        <p className="role-description">
          How would you like to use Khedni today?
        </p>

        <div className="role-options">
          <button
            type="button"
            className={`role-option ${
              selectedRole === "passenger" ? "selected" : ""
            }`}
            onClick={() => setSelectedRole("passenger")}
          >
            <div className="role-icon">👤</div>
            <h2>Passenger</h2>
            <p>Find a ride or request a trip.</p>
            <span className="role-select-text">
              {selectedRole === "passenger"
                ? "✓ Selected"
                : "Choose Passenger →"}
            </span>
          </button>

          <button
            type="button"
            className={`role-option ${
              selectedRole === "driver" ? "selected" : ""
            }`}
            onClick={() => setSelectedRole("driver")}
          >
            <div className="role-icon">🚕</div>
            <h2>Driver</h2>
            <p>View requests and connect with passengers.</p>
            <span className="role-select-text">
              {selectedRole === "driver" ? "✓ Selected" : "Choose Driver →"}
            </span>
          </button>
        </div>

        <button
          type="button"
          className="role-continue"
          onClick={handleContinue}
          disabled={!selectedRole}
        >
          Continue →
        </button>

        <p className="role-footer">Same route. Better connections.</p>
      </div>
    </main>
  );
}

export default ChooseRole;
