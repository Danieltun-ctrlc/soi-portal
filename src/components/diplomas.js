import Nav from "./header";
import { useEffect, useState, useRef } from "react";
import "../assets/diplomas.css";
import DTECH from "../assets/diploma-in-information-technology.jpg";
import DAA from "../assets/diploma-in-applied-ai-and-analytics.jpg";
import DFT from "../assets/diploma-in-financial-technology.jpg";
import DCCM from "../assets/diploma-in-enterprise-cloud-computing-and-management.jpg";
import DCD from "../assets/diploma-in-cybersecurity-and-digital-forensics.jpg";
import { Outlet, useNavigate } from "react-router-dom";

function Cards({ dip }) {
  const navigate = useNavigate();
  let datas = [
    [DTECH, "dtech"],
    [DAA, "daa"],
    [DFT, "dft"],
    [DCCM, "dccm"],
    [DCD, "dcd"],
  ];
  return (
    <div className="dip-stack">
      {datas.map((data) => (
        <div
          className={`card-diploma`}
          style={{
            backgroundImage: "url(" + data[0] + ")",
          }}
          onClick={() => {
            dip(data);
            navigate(`${data[1]}`);
          }}
        ></div>
      ))}
    </div>
  );
}

export default function Dip({ fav, setting }) {
  let [DIP, setDIP] = useState("");

  function niceone(data) {
    setDIP(data[0]);
  }
  return (
    <div
      className={`diploma-main  ${DIP !== "" ? "bg-change" : ""}`}
      style={{
        backgroundImage: "url(" + DIP + ")",
      }}
    >
      <Nav />
      <div>Please holder</div>
      <h1>EXPLORE AROUND THE DIPLOMAS OF THE SCHOOL OF INFOCOMM</h1>
      <Cards dip={niceone} />
      <Outlet context={{ fa: fav, set: setting }} />
    </div>
  );
}
