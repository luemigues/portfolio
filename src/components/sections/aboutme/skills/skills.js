import React from "react";
import {
  SkillsContainer,
  DevelopmentSkills,
  DesignSkills,
} from "./skills-styling";
import Skill from "./skill-item/skill-item.js";
import { styleSkills } from "../../../../utils/helperfunctions";

import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { ReactLogo } from "@styled-icons/simple-icons/ReactLogo";
import { Html5 } from "@styled-icons/simple-icons/Html5";
import { Css3 } from "@styled-icons/simple-icons/Css3";
import { NodeDotJs } from "@styled-icons/simple-icons/NodeDotJs";
import { Git } from "@styled-icons/simple-icons/Git";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Adobexd } from "@styled-icons/simple-icons/Adobexd";
import { Adobephotoshop } from "@styled-icons/simple-icons/Adobephotoshop";
import { Adobeillustrator } from "@styled-icons/simple-icons/Adobeillustrator";
import { Adobepremierepro } from "@styled-icons/simple-icons/Adobepremierepro";
import { Adobelightroom } from "@styled-icons/simple-icons/Adobelightroom";

const devSkills = [
  { Icon: Javascript, name: "Javascript" },
  { Icon: ReactLogo, name: "React JS" },
  { Icon: Html5, name: "HTML5" },
  { Icon: Css3, name: "Css" },
  { Icon: NodeDotJs, name: "Node JS" },
  { Icon: Git, name: "Git" },
  { Icon: Sass, name: "Sass" },
];

const designSkills = [
  { Icon: Adobexd, name: "Adobe XD" },
  { Icon: Adobephotoshop, name: "Photoshop" },
  { Icon: Adobeillustrator, name: "Illustrator" },
  { Icon: Adobepremierepro, name: "Premiere" },
  { Icon: Adobelightroom, name: "Lightroom" },
];

function Skills() {
  return (
    <SkillsContainer>
      <DevelopmentSkills>{styleSkills(devSkills, Skill)}</DevelopmentSkills>
      <DesignSkills>{styleSkills(designSkills, Skill)}</DesignSkills>
    </SkillsContainer>
  );
}

export default Skills;
