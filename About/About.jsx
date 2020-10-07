import React from "react";
import "./About.css";
import CutePic from "../../assets/profile_pic.JPEG";
import CoolPic from "../../assets/Leif.jpg";
import {Link} from "react-router-dom";

export default function AboutScreen() {

  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture" />
        </div>
        <div className="intro-item">
          My name is Ivan, and I'm really enjoying this comp 
        </div>
        <div classname="intro-background">
        </div>
      </div>
    </div>
  );
}

function CoolPhoto(props) {
  return (
    <div 
    onClick={() => {
      props.setActiveTitle(props.title);
    }}
    className="intro-picture"
    >

    <h1>{props.title}</h1>
    </div>
  );
}

function SecondPhoto() {
  const [activeTitle, setActiveTitle] = React.useState("BLANK");
  
    return (
      <div className="intro-background">
        <div className="experience-background">
          <div className="photo-item">
            <CoolPhoto 
            title="Leif" 
            setActiveTitle={setActiveTitle}
            ></CoolPhoto>
          </div>
          <div className="highlight-background">
            <h1>{activeTitle}</h1>
            
          </div>
        </div>
      </div>
    );
  }
  