import React from 'react';
import {ButtonsContainer, SocialMediaContainer, LinkedinIcon, GithubIcon} from './mediabuttons-styling.js';
import Button from '../../../button/button.js';
import CV from '../../../../utils/CV-LUCIA-MIGUES.pdf';

function SocialMediaButtons(){

    return(

        <ButtonsContainer>
                <a href={CV} download>
                    <Button type="download" text="Download CV" />
                </a>
            <SocialMediaContainer>
                <a href="https://www.linkedin.com/in/luemigues/" target="_black">
                    <LinkedinIcon/>
                </a>
                <a href="https://github.com/luemigues" target="_black">
                    <GithubIcon />
                </a>
            </SocialMediaContainer>
        </ButtonsContainer>
        
    )
}

export default SocialMediaButtons;