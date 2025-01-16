import React, { useRef, useState } from "react";
import "./style.css";
import IMAGES from "../../contants";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { saveAs } from "file-saver";

const BottomSheetMobile = ({scrollToSection}) => {

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleResume = () => {
    setIsResumeOpen(!isResumeOpen);
    setIsSheetOpen(false)
  };
  const handleAchievements = () => {
    setIsSheetOpen(!isSheetOpen);
    setIsResumeOpen(false)
  };
  const closeSheet=()=>{
    setIsSheetOpen(false)
    setIsResumeOpen(false)
  }

  const handleDownload = () => {
    const fileUrl = IMAGES.resumePDF; 
    saveAs(fileUrl, "VikashResume"); 
  };

  return (
    <div className="custom-bottom-sheet-container custom_bottomSheet">
      <div className={`menu-button ${isSheetOpen ? "active" : ""}`}>
        <ul>
          <li onClick={scrollToSection}>Projects</li>
          <li onClick={handleResume}>Resume</li>
          <li onClick={handleAchievements}>Achivements</li>
        </ul>
      </div>

      <div
        className={`bottom-sheet ${isSheetOpen || isResumeOpen ? "open" : ""}`}
      >
        <button className="close_sheet" onClick={closeSheet}>x</button>
        <div className="sheet-content">
          {isSheetOpen && (
            <>
              <h3>SuperStar Of The Month</h3>
              <PhotoProvider>
                <PhotoView src={IMAGES.achievement}>
                  <img
                    src={IMAGES.achievement}
                    alt="Example"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </PhotoView>
              </PhotoProvider>
            </>
          )}
          {isResumeOpen && (
            <>
              <h3 className="resume_download">Resume <img src={IMAGES.download} alt="download" onClick={handleDownload}/></h3>
              <PhotoProvider>
                <PhotoView src={IMAGES.resume1}>
                  <img
                    src={IMAGES.resume1}
                    alt="Example"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </PhotoView>
                <PhotoView src={IMAGES.resume2}>
                  <img
                    src={IMAGES.resume2}
                    alt="Example"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      cursor: "pointer",
                      opacity:"0"
                    }}
                  />
                </PhotoView>
              </PhotoProvider>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomSheetMobile;
