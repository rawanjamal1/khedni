import { useEffect, useState } from "react";
import "./ThemePicker.css";

const colors = [
  { name: "Electric Mint", hex: "#39F5C5" },
  { name: "Ocean Blue", hex: "#38BDF8" },
  { name: "Lavender", hex: "#A78BFA" },
  { name: "Rose", hex: "#FB7185" },
  { name: "Amber", hex: "#FBBF24" },
  { name: "Emerald", hex: "#34D399" },
];

function ThemePicker() {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedColor, setSelectedColor] = useState(() => {
    const savedColor = localStorage.getItem("khedni-accent");
    return colors.some((color) => color.hex === savedColor)
      ? savedColor
      : "#39F5C5";
  });

  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", selectedColor);

    localStorage.setItem("khedni-accent", selectedColor);
  }, [selectedColor]);

  function chooseColor(hex) {
    setSelectedColor(hex);
  }

  function resetColor() {
    setSelectedColor("#39F5C5");
  }

  return (
    <div className="theme-picker">
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Customize website colors"
        aria-expanded={isOpen}
      >
        🎨
      </button>

      {isOpen && (
        <div className="theme-panel">
          <div className="theme-panel-heading">
            <div>
              <h3>Make it yours</h3>
              <p>Choose your Khedni color</p>
            </div>

            <button
              type="button"
              className="theme-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close color picker"
            >
              ×
            </button>
          </div>

          <div className="theme-colors">
            {colors.map((color) => (
              <button
                key={color.hex}
                type="button"
                className={`theme-color ${
                  selectedColor === color.hex ? "chosen" : ""
                }`}
                style={{ "--swatch-color": color.hex }}
                data-color={color.name}
                title={color.name}
                aria-label={`Choose ${color.name}`}
                aria-pressed={selectedColor === color.hex}
                onClick={() => chooseColor(color.hex)}
              />
            ))}
          </div>

          <div className="theme-panel-bottom">
            <span>
              {colors.find((color) => color.hex === selectedColor)?.name}
            </span>

            <button type="button" onClick={resetColor}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemePicker;
