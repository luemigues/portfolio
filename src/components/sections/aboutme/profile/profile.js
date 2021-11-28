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
          I recently moved to Stockholm, Sweden and I am taking my
          first steps in the world of web development, with knowledge in Javascript, React, HTML,
          CSS, Node.js and Git.
          <br />
          <br /> I consider myself a proactive and eager to learn person. Always
          trying to learn, improve and look for new challenges.
          <br />
          <br /> My goal is to combine my passion for coding and design to
          become a skilled frontend developer, creating clean and efficient code
          that gives users the best experience.
          <br />
          <br />I am currently working as Software Developer, focusing on
          improving my coding skills, problem solving and decision making in
          order to prioritize the development of the product and the client’s
          needs.
        </Description>
      </TextContainer>
    </ProfileContainer>
  );
}

export default Profile;
