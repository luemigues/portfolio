import React from 'react';
import styled from 'styled-components';
import {styles} from '../../utils/stylevars.js';
import Button from '../button/button.js';
import {Menu} from '@styled-icons/material/Menu'


const mobileBP = `(max-width: 990px)`;

const Header = styled.header`
    height: 56px;
    width:  100%;
    padding: 0px 9rem;
    position: fixed;

    border: 1px solid ${styles.colors.border};
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
    backdrop-filter: blur(31px);
    -webkit-backdrop-filter: blur(31px);
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${mobileBP} { 
        max-width: 990px;
    }
`;

const Title = styled.h1`
    font-size: ${styles.fontSize.pextrab};
    font-weight: ${styles.fontWeight.pextrab};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    text-align: left;
    text-transform: uppercase;
    min-width:fit-content;
`;

const Nav = styled.nav`
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin: 0 1rem;

    @media ${mobileBP} { 
        align-content: space-between;
        justify-content: flex-start;
    }
`;

const ListContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;

    @media ${mobileBP} { 
        align-content: space-between;
        justify-content: flex-start;
        flex-direction: column;
    }
    
`;

const ListItem = styled.li`
    list-style-type: none;
    text-transform: uppercase;
    font-size: ${styles.fontSize.preg};
    font-weight: ${styles.fontWeight.preg};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    margin: 0.7rem;
`;

const BlueMenu = styled(Menu)`
    color: ${styles.colors.blue};
    width: 32px;
    display: none;

    @media ${mobileBP} { 
        display: block;
    }
`;

function Topbar(props){

    const itemList = ['About Me', 'Development', 'Graphic Design', 'Photography']
    const listItems = itemList.map( (item) => {
       return <ListItem key={item}> {item} </ListItem>
    })

    return(
        <Header>
            <Title>
                Lucia E. Migues
            </Title>
            <Nav>
                <ListContainer>
                    {listItems}
                </ListContainer>
            </Nav>
            <BlueMenu />
            <Button text='Get in touch' />
        </Header>
    );
}

export default Topbar;