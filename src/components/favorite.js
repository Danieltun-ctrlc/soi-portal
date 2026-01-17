import { useNavigate } from "react-router-dom";
import "../assets/fav.css";
import Nav from "./header";

export default function FavPage({ fav, setting }) {
  const navigate = useNavigate();

  // Simple mapping for display names (edit if you want)
  const nameMap = {
    DTECH: "Diploma in Information Technology",
    DAA: "Diploma in Applied AI & Analytics",
    DFT: "Diploma in Financial Technology",
    DCCM: "Diploma in Enterprise Cloud Computing & Management",
    DCD: "Diploma in Cybersecurity & Digital Forensics",
  };

  function removeFav(short) {
    const updated = fav.filter((x) => x !== short);
    setting(updated);
  }

  return (
    <>
      <Nav />
      <div className="fav-page">
        <div className="fav-top">
          <h1 className="fav-title">Your Favorites</h1>
          <button className="fav-back" onClick={() => navigate("/diplomas")}>
            Back to Diplomas
          </button>
        </div>

        {fav.length === 0 ? (
          <div className="fav-empty">
            <p className="fav-empty-title">No favorites yet.</p>
            <p className="fav-empty-desc">
              Go to the Diplomas page and add some diplomas to your favorites.
            </p>
            <button
              className="fav-primary"
              onClick={() => navigate("/diplomas")}
            >
              Explore Diplomas
            </button>
          </div>
        ) : (
          <div className="fav-grid">
            {fav.map((short) => (
              <div key={short} className="fav-card">
                <div className="fav-badge">{short}</div>

                <h2 className="fav-card-title">
                  {nameMap[short] ? nameMap[short] : short}
                </h2>

                <p className="fav-card-desc">
                  Saved in your favorites. Click below to view its modules.
                </p>

                <div className="fav-actions">
                  <button
                    className="fav-primary"
                    onClick={() => navigate("/diplomas/" + short.toLowerCase())}
                  >
                    View Modules
                  </button>

                  <button
                    className="fav-secondary"
                    onClick={() => removeFav(short)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
