import React from "react";
import Project from "../../components/Project/Project";
import Webscraper from "../../assets/webscraper.png"

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      All your amazing projects will go here!
      <Project 
      title="HCS-Workshop-1" 
      link="http://www.hcs.harvard.edu"
      source={Webscraper}
      ></Project>
    </div>
  );
}
