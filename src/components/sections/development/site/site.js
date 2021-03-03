import React from 'react';
import {SiteContainer, Card, CardTitleContainer, CardTitle, LinksContainer, Link} from './site-styling';

function Site (props){
    return(
        <SiteContainer>
            <Card img={props.img}>
                <CardTitleContainer>
                    <CardTitle >{props.title}</CardTitle>
                </CardTitleContainer>
            </Card>
            <LinksContainer>
                <a href={props.github} target="_blank" rel="noreferrer">
                    <Link>see code &gt;</Link>
                </a>
                {props.website && (
                    <a href={props.website} target="_blank" rel="noreferrer">
                        <Link>visit website &gt;</Link>
                    </a>
                )}
            </LinksContainer>
        </SiteContainer>
        
    )
}

export default Site;