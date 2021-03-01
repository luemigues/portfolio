import React from 'react';
import {Section, Title, InformationContainer, LinksContainer} from './contact-styling'
import ContactInfo from './contact-info/contactInfo';
import {Linkedin} from '@styled-icons/bootstrap/Linkedin';
import {Email} from '@styled-icons/entypo/Email';
import {Whatsapp} from '@styled-icons/bootstrap/Whatsapp';

function Contact(){
    return(
        <Section>
            <Title>
                I'd love to hear from you
            </Title>
            <InformationContainer>
                <LinksContainer>
                <a href="https://www.linkedin.com/in/luemigues/" target="_black">
                    <ContactInfo text="luemigues" Icon={Linkedin}/>
                </a>
                <a href="mailto:luemigues@gmail.com" target="_black">
                    <ContactInfo text="luemigues@gmail.com" Icon={Email}/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=46722807195&text=Hello%20Lucia!%20We%20saw%20your%20portfolio%20and%20would%20like%20to%20know%20more%20about%20you.%20" target="_black">
                    <ContactInfo text="+46 722 807 195" Icon={Whatsapp}/>
                </a>
                </LinksContainer>
            </InformationContainer>
        </Section>

    )
}

export default Contact;