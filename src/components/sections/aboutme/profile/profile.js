import React from 'react';
import {Photo, Name, Title, Description, ProfileContainer, TextContainer} from './profile-styling.js';
import profilePhoto from '../../../../utils/CV-Migues.jpg';

function Profile(){
    return (
        <ProfileContainer>
            <Photo src={profilePhoto}/>
            <TextContainer>
                <Name>
                    Lucia Eugenia Migues
                </Name>
                <Title>
                    JR Frontend Developer
                </Title>
                <Description>
                    I recently moved to Stockholm, Sweden and I am interested in taking my first steps in the world of web development, with knowledge in HTML, CSS, JavaScript, React and Git.<br/>
                    <br/> I consider myself a proactive and eager to learn person. Always trying to learn, improve and look for new challenges.<br/>
                    <br/>My most recent work experience was as Marketing Leader, leading the design team. In this position, I have managed to enhance my soft skills by dealing with clients and continuous teamwork. I have also strengthened my experience in designing, including tools such as the Adobe package into my day to day.
                </Description>
            </TextContainer>
        </ProfileContainer>
    );
}

export default Profile