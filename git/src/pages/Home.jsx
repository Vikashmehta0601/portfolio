import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import Intro from "../components/introsection/Intro";
import WorkExperience from "../components/workExperience/WorkExperience";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";
import BottomSheetMobile from "../components/stickyBottomSheet/BottomSheet";
import WhatsappINT from "../components/whatsappconnect/WhatsappINT";
import Joyride from "react-joyride";

const Home = () => {
  const sectionRef = useRef(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [run, setRun] = useState(false);

  const manageBehavior = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setIsSheetOpen(false);
    setIsResumeOpen(false);
  };

  useEffect(() => {
    const isTourShown = localStorage.getItem("tourShown");
    if (!isTourShown) {
      setRun(true);
      localStorage.setItem("tourShown", "true");
    }
  }, []);

  const steps = [
    {
      target: ".step1",
      content: "Welcome to the application! This is the introduction section where we explain what this app is about.",
    },
    {
      target: ".step2",
      content: "Here, you'll find details about Work Experience. Explore the roles and achievements in this section.",
    },
    {
      target: ".step3",
      content: "This is the Projects section. It showcases the amazing work done, with descriptions and links.",
    },
  ];


  return (
    <div className="portfolio_page">
      <Joyride
        steps={steps}
        run={run}
        continuous={true}
        scrollToFirstStep={true}
        showSkipButton={true}
        styles={{
          options: {
            zIndex: 10000000,
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)", 
          },
        }}
      />
      {/* <Header /> */}
      <Intro joyClass={"step1"} />
      <WorkExperience joyClass={"step2"} />
      <Skills />
      <Projects refAF={sectionRef} joyClass={"step3"} />
      <Footer />
      <BottomSheetMobile
        isSheetOpen={isSheetOpen}
        setIsSheetOpen={setIsSheetOpen}
        isResumeOpen={isResumeOpen}
        setIsResumeOpen={setIsResumeOpen}
        scrollToSection={manageBehavior}
        joyClass={"step4"}
      />
      <WhatsappINT />
    </div>
  );
};

export default Home;
