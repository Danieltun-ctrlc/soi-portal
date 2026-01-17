import Nav from "./header";
import { useEffect, useState, useRef } from "react";
import "../assets/banner.css";
import "../assets/slides.css";
import img1 from "../assets/banner1.jpg";
import img2 from "../assets/banner2.png";
import img3 from "../assets/banner3.jpg";
import it from "../assets/it.jpg";
import fintech from "../assets/fintech.jpg";
import ai from "../assets/aaa.jpg";
import cyber from "../assets/cyber.jpg";
import SE from "../assets/SE.jpg";
import DA from "../assets/da.jpg";
import CE from "../assets/cybersecurity.png";
import FT from "../assets/fintechh.png";
import CC from "../assets/cloudcomputing.jpg";
import CB from "../assets/cloudbannert.jpg";

function One_slide(props) {
  return (
    <div className="slide-box">
      <div
        className="slide-inner"
        style={{
          backgroundImage: "url(" + props.type + ")",
        }}
      >
        <span className="slide-label">{props.label}</span>
      </div>
    </div>
  );
}

function Slide_diploma_list() {
  return (
    <div className="slides">
      <One_slide label="IT" type={it} />
      <One_slide label="DFT" type={fintech} />
      <One_slide label="DAAA" type={ai} />
      <One_slide label="DCS" type={cyber} />
      <One_slide label="DCCM" type={CB} />
    </div>
  );
}

function Welcome_Content() {
  return (
    <div className="content">
      <h2>Welcome to the School of the INFOCOMM</h2>
      <p className="textone">
        The School of Infocomm at Republic Polytechnic is dedicated to nurturing
        the next generation of digital professionals. With a strong focus on
        emerging technologies such as artificial intelligence, cybersecurity,
        software engineering, and data analytics, SOI prepares students for the
        demands of the evolving digital economy. Through its problem-based
        learning approach, students develop real-world solutions, engage in
        collaborative projects, and gain valuable industry exposure. This
        ensures graduates are equipped with both technical proficiency and
        essential workplace skills. SOI graduates are highly sought after for
        their adaptability, innovation mindset, and ability to transform ideas
        into impactful digital solutions.
      </p>
    </div>
  );
}

function ScrollText() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-main">
      {[
        ["Want to become the software Engineer?", SE],
        ["Want to become the data analyst?", DA],
        ["Want to become the hacker?", CE],
        ["Want to become the fintech analyst?", FT],
        ["Want to become the cloud computing specialist?", CC],
      ].map((text, i) => (
        <div key={i} ref={(el) => (refs.current[i] = el)} className="showoff">
          <div class="v-line"></div>
          <img src={text[1]} alt="pic" className="imk" />
          <p>{text[0]}</p>
        </div>
      ))}
    </div>
  );
}

function Banner() {
  const slides = [
    {
      title: "NICVE Open House",
      desc: "Explore diplomas, campus life, and student projects.",
      cta: "Learn More",
      bg: img1,
    },
    {
      title: "Discover Your Diploma",
      desc: "Find what fits your interests and future career goals.",
      cta: "Browse Diplomas",
      bg: img2,
    },
    {
      title: "Build Your Portfolio",
      desc: "Join events, projects, and communities that help you grow.",
      cta: "Get Started",
      bg: img3,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev === slides.length - 1) return 0;
        return prev + 1;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [slides.length]);

  function goPrev() {
    setIndex((prev) => {
      if (prev === 0) return slides.length - 1;
      return prev - 1;
    });
  }

  function goNext() {
    setIndex((prev) => {
      if (prev === slides.length - 1) return 0;
      return prev + 1;
    });
  }

  function goTo(i) {
    setIndex(i);
  }

  return (
    <section className="banner">
      <div className="banner-window">
        <div
          className="banner-track"
          style={{ transform: "translateX(-" + index * 100 + "%)" }}
        >
          {slides.map((s, i) => (
            <div
              className="banner-slide"
              key={i}
              style={{
                backgroundImage: "url(" + s.bg + ")",
              }}
            >
              <div className="banner-content">
                <p className="banner-kicker">REPUBLIC POLYTECHNIC</p>
                <h2 className="banner-title">{s.title}</h2>
                <p className="banner-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="banner-nav banner-left"
          onClick={goPrev}
          type="button"
        >
          ‹
        </button>
        <button
          className="banner-nav banner-right"
          onClick={goNext}
          type="button"
        >
          ›
        </button>
      </div>

      <div className="banner-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === index ? "dot active" : "dot"}
            onClick={() => goTo(i)}
            aria-label={"Go to slide " + (i + 1)}
          />
        ))}
      </div>
    </section>
  );
}
export default function Home() {
  return (
    <div className="main">
      <Nav />
      <Banner />
      <Slide_diploma_list />
      <Welcome_Content />
      <ScrollText />
    </div>
  );
}
