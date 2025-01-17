import React, { useRef, useState } from "react";
import "./home.css";
import Intro from "../components/introsection/Intro";
import Header from "../components/header/Header";
import WorkExperience from "../components/workExperience/WorkExperience";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";
import BottomSheetMobile from "../components/stickyBottomSheet/BottomSheet";
import WhatsappIcon from "../components/whatsappIcon/WhatsappIcon";

const Home = () => {
  const sectionRef = useRef(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const manageBehavior = ()=>{
    sectionRef.current.scrollIntoView({ behavior: "smooth" })
    setIsSheetOpen(false)
    setIsResumeOpen(false)
  }

  return (
    <div className="portfolio_page">
      {/* <Header /> */}
      <Intro />
      <WorkExperience />
      <Skills />
      <Projects refAF={sectionRef} />
      <Footer />
      <BottomSheetMobile
        isSheetOpen={isSheetOpen}
        setIsSheetOpen={setIsSheetOpen}
        isResumeOpen={isResumeOpen}
        setIsResumeOpen={setIsResumeOpen}
        scrollToSection={manageBehavior}
      />
      <WhatsappIcon/>
    </div>
  );
};

export default Home;
