import React, { useRef } from "react";
import "./home.css";
import Intro from "../components/introsection/Intro";
import Header from "../components/header/Header";
import WorkExperience from "../components/workExperience/WorkExperience";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/footer.jsx";
import BottomSheetMobile from "../components/stickyBottomSheet/BottomSheet";

const Home = () => {
  const sectionRef = useRef(null);

  return (
    <div className="portfolio_page">
      {/* <Header /> */}
      <Intro />
      <WorkExperience />
      <Skills/>
      <Projects refAF={sectionRef}/>
      <Footer/>
      <BottomSheetMobile scrollToSection={() => sectionRef.current.scrollIntoView({ behavior: 'smooth' })}/>
    </div>
  );
};

export default Home;
