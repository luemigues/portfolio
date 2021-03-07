import React from 'react';
import {Nav, ListContainer, ListItem, StyledLink} from './mobileMenu-styling.js';

function MobileMenu(props){

    return (
        <Nav>
            <ListContainer>
                <ListItem>
                    <StyledLink 
                    to="/" 
                    end
                    activeClassName="selected"
                    onClick={props.handleClick}>
                         About Me 
                    </StyledLink>
                </ListItem>

                <ListItem>
                    <StyledLink 
                    to="development" 
                    activeClassName="selected"
                    onClick={props.handleClick}> 
                        Development 
                    </StyledLink>
                </ListItem>

                {/* <ListItem>
                    <StyledLink 
                    to="design"                     
                    activeClassName="selected" 
                    onClick={props.handleClick}> 
                        Graphic Design 
                    </StyledLink>
                </ListItem>

                <ListItem>
                    <StyledLink 
                    to="photography"                    
                    activeClassName="selected" 
                    onClick={props.handleClick}> 
                        Photography 
                    </StyledLink>
                </ListItem> */}

                <ListItem>
                    <StyledLink 
                    to="contact" 
                    activeClassName="selected"
                    onClick={props.handleClick}>  
                        Get in touch 
                    </StyledLink>
                </ListItem>
            </ListContainer>
        </Nav>
    );
}

export default MobileMenu;