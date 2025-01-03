import React, { useState } from "react";


const SkillToolCard = (props) => {
  const [skill, setSkill] = useState();
  const HoverSkill = (hoveredSkill) => {
    setSkill(hoveredSkill);
  };
  return (
    <div
      className={`skillsToolLogo ${props.name}`}
      onMouseEnter={() => HoverSkill(props.name)}
      onMouseLeave={() => HoverSkill()}
      key = {props.id}
    >
      <h4
        style={{ color: `${props.color}` }}
        className={skill === `${props.name}` ? "skillTitle" : "hidden"}
      >
        {skill}
      </h4>
      {props.image}
    </div>
  );
};

export default SkillToolCard;
