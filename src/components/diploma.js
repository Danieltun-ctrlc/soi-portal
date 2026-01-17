import { useParams, Outlet, useNavigate } from "react-router-dom";
import "../assets/diploma.css";
import DTECH from "../assets/diploma-in-information-technology.jpg";
import DAA from "../assets/diploma-in-applied-ai-and-analytics.jpg";
import DFT from "../assets/diploma-in-financial-technology.jpg";
import DCCM from "../assets/diploma-in-enterprise-cloud-computing-and-management.jpg";
import DCD from "../assets/diploma-in-cybersecurity-and-digital-forensics.jpg";

export const diplomasData = [
  {
    id: "dtech",
    name: "Diploma in Information Technology",
    short: "DTECH",
    description:
      "Focuses on software development, web apps, and IT fundamentals.",
    image: DTECH,

    modules: [
      {
        id: "frontend-dev",
        code: "C206",
        name: "Frontend Development",
        credits: 4,
        semester: 1,
        description:
          "Learn HTML, CSS, JavaScript, React, and UI/UX fundamentals.",
      },
      {
        id: "backend-dev",
        code: "C209",
        name: "Backend Development",
        credits: 4,
        semester: 2,
        description:
          "Covers APIs, databases, authentication, and server-side logic.",
      },
      {
        id: "oop",
        code: "C110",
        name: "Object-Oriented Programming",
        credits: 4,
        semester: 1,
        description: "Teaches OOP concepts using Java or Python.",
      },
    ],
  },

  {
    id: "daa",
    name: "Diploma in Applied AI & Analytics",
    short: "DAA",
    description: "Focuses on data science, AI models, and analytics.",
    image: DAA,

    modules: [
      {
        id: "data-visualisation",
        code: "C346",
        name: "Data Visualisation",
        credits: 4,
        semester: 1,
        description: "Learn Power BI, dashboards, and data storytelling.",
      },
      {
        id: "machine-learning",
        code: "C348",
        name: "Machine Learning",
        credits: 4,
        semester: 2,
        description: "Covers supervised, unsupervised learning and AI models.",
      },
      {
        id: "statistics",
        code: "C120",
        name: "Statistics for Analytics",
        credits: 4,
        semester: 1,
        description: "Probability, distributions, and real-world analytics.",
      },
    ],
  },

  {
    id: "dft",
    name: "Diploma in Financial Technology",
    short: "DFT",
    description: "Combines finance with modern technology.",
    image: DFT,

    modules: [
      {
        id: "blockchain",
        code: "F201",
        name: "Blockchain Fundamentals",
        credits: 4,
        semester: 1,
        description:
          "Learn about smart contracts, crypto, and distributed systems.",
      },
      {
        id: "fintech-apps",
        code: "F203",
        name: "FinTech Applications",
        credits: 4,
        semester: 2,
        description: "Build digital banking and payment systems.",
      },
    ],
  },

  {
    id: "dcd",
    name: "Diploma in Cybersecurity & Digital Forensics",
    short: "DCD",
    description: "Focuses on cyber defence, hacking, and investigations.",
    image: DCD,

    modules: [
      {
        id: "ethical-hacking",
        code: "C350",
        name: "Ethical Hacking",
        credits: 4,
        semester: 2,
        description: "Learn penetration testing and security attacks.",
      },
      {
        id: "network-security",
        code: "C351",
        name: "Network Security",
        credits: 4,
        semester: 1,
        description: "Covers firewalls, IDS, and secure networking.",
      },
    ],
  },

  {
    id: "dccm",
    name: "Diploma in Cloud Computing and Development",
    short: "DCCM",
    description: "Combines cloud computing with the production.",
    image: DCCM,

    modules: [
      {
        id: "aws",
        code: "D101",
        name: "AWS",
        credits: 4,
        semester: 1,
        description: "Learn more about the aws.",
      },
      {
        id: "linux",
        code: "D102",
        name: "Linux fundamentals",
        credits: 4,
        semester: 2,
        description: "Learn linux prompts and their systems",
      },
    ],
  },
];

function DipCard({ data, fadata, settFav }) {
  let navi = useNavigate();
  function modulechange(id) {
    navi(id);
  }
  return (
    <div className="dip-card">
      <img src={data.image} className="proimg" alt={data.name} />

      <div className="dip-content">
        <div className="dip-header">
          <h2 className="dip-title">{data.name}</h2>
          <p className="dip-short">{data.short}</p>
          {fadata.includes(data.short) ? (
            <button
              className="fav fav-y"
              onClick={(e) => {
                e.stopPropagation();
                settFav(data.short, "remove");
              }}
            >
              Favorited
            </button>
          ) : (
            <button
              className="fav"
              onClick={(e) => {
                e.stopPropagation();
                settFav(data.short, "add");
              }}
            >
              Add to favorite
            </button>
          )}
        </div>

        <p className="dip-desc">{data.description}</p>

        <div className="dip-modules">
          <h3>Modules</h3>
          <ul>
            {data.modules.map((mod) => (
              <li key={mod.id} onClick={() => modulechange(mod.id)}>
                <strong>{mod.code}</strong> — {mod.name}
                <span className="mod-meta">
                  {mod.credits} credits · Semester {mod.semester}
                </span>
                <Outlet context={{ mo: mod.id, de: mod.description }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function DiplomasDataC({ fav, setting }) {
  let { diplomaId } = useParams();

  function settFav(data, mode) {
    if (mode === "remove") {
      console.log(fav);
      let new_one = fav.filter((datat) => datat !== data);
      console.log(new_one);
      setting(new_one);
    } else {
      console.log("sure");
      setting((prev) => [...prev, data]);
    }
  }

  let true_data = diplomasData.filter((dipdata) => dipdata.id === diplomaId);
  console.log(true_data[0]);
  return (
    <div>
      <DipCard data={true_data[0]} fadata={fav} settFav={settFav} />
    </div>
  );
}
