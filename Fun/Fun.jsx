$ git add README;
import React from "react";
import "./Fun.css";

function TimeLineItem(props) {
  return (
    <div 
    onClick={() => {
      props.setActiveTitle(props.title);
    }}
    className="fun-item"
    >

    <h1>{props.title}</h1>
    </div>
  );
}

export default function FunScreen() {
const [activeTitle, setActiveTitle] = React.useState("BLANK");

  return (
    <div className="fun-background">
      <div className="fun-background">
        <div className="fun-background">
          <TimeLineItem 
          title="Photos" 
          setActiveTitle={setActiveTitle}
          ></TimeLineItem>
          <TimeLineItem 
          title="Music" 
          setActiveTitle={setActiveTitle}
          ></TimeLineItem>
          <TimeLineItem 
          title="videos" 
          setActiveTitle={setActiveTitle}
          ></TimeLineItem>
        </div>
        <div className="fun-background">
          <h1>{activeTitle}</h1>
          
        </div>
      </div>
    </div>
  );
}
