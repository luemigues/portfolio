import React from 'react';
import {Section, Title, SitesContainer} from './development-styling.js';
import Site from './site/site';
import sites from '../../../utils/sitesInfo';


function Develop(props){
    console.log(sites)
    const showSites = sites.map( (site, i) => 
        <Site
            img={site.img} 
            title={site.title}
            github={site.github}
            website={site.website}
            key={i}/>
    );

    return (
        <Section>
            <Title>
                Development
            </Title>
            <SitesContainer>
                {showSites}
            </SitesContainer>
        </Section>
    )
}

export default Develop;