import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, ListContainer, ListItem, StyledLink} from './desktopMenu-styling';
import Button from '../../button/button.js';


function DesktopMenu(props){
    
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

                <ListItem>
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
                        Photgraphy 
                    </StyledLink>
                </ListItem>
            </ListContainer>

            <Link to="/contact">
                <Button text='Get in touch' />
            </Link>

        </Nav>
    )

}

export default DesktopMenu;