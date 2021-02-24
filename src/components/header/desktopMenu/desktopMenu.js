import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {Nav, ListContainer, ListItem} from './desktopMenu-styling';
import Button from '../../button/button.js';
import {styles} from '../../../utils/stylevars.js';


function DesktopMenu(props){
    const active = {
        color: styles.colors.blue
    }
    
    return (
        <Nav>
            <ListContainer>
                <ListItem>
                    <NavLink 
                    to="home" 
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
            </ListContainer>

            <Link to="/development">
                <Button text='Get in touch' />
            </Link>

        </Nav>
    )

}

export default DesktopMenu;