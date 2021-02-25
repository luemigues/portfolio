import React from 'react';
import {Section, SkillsButtonContainer} from './aboutme-styling.js';
import Profile from './profile/profile.js';
import SocialMediaButtons from './mediabuttons/mediabuttons.js';
import Skills from './skills/skills.js';

function AboutMe(props){
    return (
        <Section>
            <Profile />
            <SkillsButtonContainer>
                <SocialMediaButtons />
                <Skills />
            </SkillsButtonContainer>

        </Section>
    )
}

export default AboutMe;