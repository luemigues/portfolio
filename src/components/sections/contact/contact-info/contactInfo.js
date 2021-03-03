import React from 'react';
import {InfoContainer, IconStyleWrapper, Information} from './contactInfo-styling';

function ContactInfo({Icon, text}){
    return(
        <InfoContainer>
            <IconStyleWrapper>
                <Icon />
            </IconStyleWrapper>
            <Information>
                {text}
            </Information>
        </InfoContainer>
    )
}

export default ContactInfo;