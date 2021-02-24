import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, ListContainer, ListItem} from './mobileMenu-styling.js';
import {styles} from '../../../utils/stylevars.js';

function MobileMenu(props){

     const active = {
        color: styles.colors.blue
    }

    return (
        <Nav>
            <ListContainer>
                <ListItem>
                    <NavLink 
                    to="/" 
                    exact="true"
                    activeStyle={active} 
                    onClick={props.handleClick}>
                         About Me 
                    </NavLink>
                </ListItem>

                <ListItem>
                    <NavLink 
                    to="development" 
                    exact="true" 
                    activeStyle={active} 
                    onClick={props.handleClick}> 
                        Development 
                    </NavLink>
                </ListItem>

                <ListItem>
                    <NavLink 
                    to="design"                     
                    exact="true" 
                    activeStyle={active} 
                    onClick={props.handleClick}> 
                        Graphic Design 
                    </NavLink>
                </ListItem>

                <ListItem>
                    <NavLink 
                    to="photography"                    
                    exact="true" 
                    activeStyle={active} 
                    onClick={props.handleClick}> 
                        Photgraphy 
                    </NavLink>
                </ListItem>

                <ListItem>
                    <NavLink 
                    to="contact"
                    exact="true" 
                    activeStyle={active} 
                    onClick={props.handleClick}>  
                        Get in touch 
                    </NavLink>
                </ListItem>
            </ListContainer>
        </Nav>
    );
}

export default MobileMenu;