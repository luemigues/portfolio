import React from 'react';
import {ButtonsContainer, SocialMediaContainer, LinkedinIcon, GithubIcon} from './mediabuttons-styling.js';
import Button from '../../../button/button.js';

function SocialMediaButtons(){

    return(

        <ButtonsContainer>
            <Button color="grey" text="Download CV" />
            <SocialMediaContainer>
                <LinkedinIcon/>
                <GithubIcon />
            </SocialMediaContainer>
        </ButtonsContainer>
        
    )
}

export default SocialMediaButtons;