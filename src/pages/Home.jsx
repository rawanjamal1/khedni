import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const rides = [
  {
    id: 1,
    driver: "Ahmad",
    from: "Danniyeh",
    to: "Tripoli",
    time: "5:30 PM",
    seats: 2,
    price: 4,
  },
  {
    id: 2,
    driver: "Sara",
    from: "Tripoli",
    to: "Danniyeh",
    time: "8:00 AM",
    seats: 3,
    price: 4,
  },
  {
    id: 3,
    driver: "Omar",
    from: "Danniyeh",
    to: "Tripoli",
    time: "2:00 PM",
    seats: 1,
    price: 5,
  },
  {
    id: 4,
    driver: "Maya",
    from: "Tripoli",
    to: "Danniyeh",
    time: "10:00 AM",
    seats: 2,
    price: 3,
  },
  {
    id: 5,
    driver: "Karim",
    from: "Danniyeh",
    to: "Tripoli",
    time: "4:00 PM",
    seats: 3,
    price: 5,
  },
];

const routePath =
  "M100 280 C190 310 195 220 270 200 S430 190 390 105 S345 65 365 45";

function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedRide, setSelectedRide] = useState(null);

  function changeRide(direction) {
    setActiveIndex(
      (current) => (current + direction + rides.length) % rides.length,
    );
  }

  const visibleRides = [
    rides[(activeIndex - 1 + rides.length) % rides.length],
    rides[activeIndex],
    rides[(activeIndex + 1) % rides.length],
  ];

  return (
    <main className="home-experience">
      <div className="home-overlay" />

      <section className="experience-content">
        <div className="experience-copy">
          <span className="experience-eyebrow">
            YOUR LOCAL RIDE-SHARING COMMUNITY
          </span>

          <h1>
            Same Route,
            <br />
            <span>New Connections.</span>
          </h1>

          <p>
            Connecting passengers and drivers between Danniyeh and Tripoli.
            Share rides, save money, and travel together.
          </p>

          <Link to="/choose-role" className="experience-cta">
            Khedni معك <span>→</span>
          </Link>
        </div>

        <div className="experience-route">
          <svg
            viewBox="0 0 500 350"
            className="experience-route-svg"
            role="img"
            aria-label="Animated route between Tripoli and Danniyeh"
          >
            <defs>
              <filter id="khedni-glow">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>

            <path
              d={routePath}
              className="experience-route-glow"
              filter="url(#khedni-glow)"
            />

            <path d={routePath} className="experience-route-line" />

            <circle cx="100" cy="280" r="7" fill="#39F5C5" />
            <circle cx="365" cy="45" r="7" fill="#39F5C5" />

            <g className="experience-car">
              <g transform="translate(-22 -15)">
                <path
                  d="M3 10 L10 3 H34 L41 10 V25 H3 Z"
                  fill="#39F5C5"
                  stroke="#0D1728"
                  strokeWidth="2"
                />

                <path d="M13 5 H31 L35 11 H9 Z" fill="#0D1728" />

                <circle cx="12" cy="25" r="5" fill="#07121D" />
                <circle cx="33" cy="25" r="5" fill="#07121D" />
              </g>

              <animateMotion
                path={routePath}
                dur="10s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </g>
          </svg>

          <div className="experience-location location-start">
            <span>●</span> Danniyeh
          </div>

          <div className="experience-location location-end">
            <span>●</span> Tripoli
          </div>
        </div>
      </section>

      <section className="floating-rides">
        <div className="floating-rides-heading">
          <span>EXPLORE THE ROUTES</span>
          <strong>Featured Rides</strong>
          <small>Interactive demo · Sample ride data</small>
        </div>

        <div className="floating-carousel">
          <button
            className="floating-arrow"
            onClick={() => changeRide(-1)}
            aria-label="Previous ride"
          >
            ←
          </button>

          <div className="floating-card-list">
            {visibleRides.map((ride, index) => (
              <article
                className={
                  index === 1
                    ? "floating-ride-card center-card"
                    : "floating-ride-card"
                }
                key={ride.id}
              >
                <div className="floating-driver">
                  <div className="floating-avatar">{ride.driver.charAt(0)}</div>

                  <strong>{ride.driver}</strong>
                  <span className="floating-status" />
                </div>

                <h3>
                  {ride.from}
                  <span> → </span>
                  {ride.to}
                </h3>

                <div className="floating-ride-meta">
                  <span>◷ {ride.time}</span>
                  <span>♙ {ride.seats} seats</span>
                </div>

                <div className="floating-card-bottom">
                  <strong>
                    ${ride.price}
                    <small> / seat</small>
                  </strong>

                  <button onClick={() => setSelectedRide(ride)}>
                    Details →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button
            className="floating-arrow"
            onClick={() => changeRide(1)}
            aria-label="Next ride"
          >
            →
          </button>
        </div>

        <div className="carousel-dots">
          {rides.map((ride, index) => (
            <button
              key={ride.id}
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ride ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </section>

      {selectedRide && (
        <div
          className="experience-modal-backdrop"
          onClick={() => setSelectedRide(null)}
        >
          <div
            className="experience-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Ride details"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="experience-modal-close"
              onClick={() => setSelectedRide(null)}
              aria-label="Close ride details"
            >
              ✕
            </button>

            <span className="experience-eyebrow">RIDE DETAILS</span>

            <h2>
              {selectedRide.from} → {selectedRide.to}
            </h2>

            <p>Driver: {selectedRide.driver}</p>
            <p>Departure: {selectedRide.time}</p>
            <p>Seats available: {selectedRide.seats}</p>
            <p>Price: ${selectedRide.price} per seat</p>

            <Link to="/choose-role" className="experience-cta">
              Khedni معك →
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
