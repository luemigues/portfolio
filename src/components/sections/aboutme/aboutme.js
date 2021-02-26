import { React, useState, useEffect } from 'react';
import {getWindowDimensions} from '../../../utils/helperfunctions.js';
import {Section, SkillsButtonContainer} from './aboutme-styling.js';
import Profile from './profile/profile.js';
import SocialMediaButtons from './mediabuttons/mediabuttons.js';
import Skills from './skills/skills.js';

function AboutMe(props){

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const isMobile = windowDimensions.width < 990;

    return (
        <Section>
            <Profile isMobile={isMobile} />
            <SkillsButtonContainer>
                <SocialMediaButtons />
                <Skills />
            </SkillsButtonContainer>

        </Section>
    )
}

export default AboutMe;