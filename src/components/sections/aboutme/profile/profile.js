import React from "react";
import {
  Photo,
  Name,
  Title,
  Description,
  ProfileContainer,
  TextContainer,
} from "./profile-styling.js";
import profilePhoto from "../../../../assets/CV-Migues.jpg";

function Profile() {
  return (
    <ProfileContainer>
      <Photo src={profilePhoto} />
      <TextContainer>
        <Name>Lucia Eugenia Migues</Name>
        <Title>Frontend Developer JR</Title>
        <Description>
          Software Developer living in Stockholm, Sweden. Experience working
          with Javascript, React, HTML, CSS, Node.js and Git.
          <br />
          <br /> I am proactive person, eager to keep learning, improving and looking
          for new challenges. Passionate about design and user experience.
          <br />
          <br /> My goal is to combine my passion for coding and design to
          create clean and efficient code that gives users the best experience
          possible.
          <br />
          <br />
          Currently working as Software Developer, focusing on improving my
          coding skills, problem solving and decision making in order to
          prioritize the development of the product and satisfy the client’s
          needs.
        </Description>
      </TextContainer>
    </ProfileContainer>
  );
}

export default Profile;
