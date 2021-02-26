import styled from 'styled-components';
import {Menu} from '@styled-icons/material/Menu';
import {Close} from '@styled-icons/material/Close';
import {styles} from '../../../utils/stylevars.js';


const mobileBP = `(max-width: 990px)`;

export const Header = styled.header`
    height: 56px;
    width:  100%;
    padding: 0rem 8%;
    position: fixed;

    border: 1px solid ${styles.colors.border};
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
    backdrop-filter: blur(31px);
    -webkit-backdrop-filter: blur(31px);
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    z-index: 200;

    @media ${mobileBP} { 
        min-width: 250px;
        padding: 0px
    }
`;

export const Title = styled.h1`
    font-size: ${styles.fontSize.pextrab};
    font-weight: ${styles.fontWeight.pextrab};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    text-align: left;
    text-transform: uppercase;
    min-width:fit-content;

    @media ${mobileBP} { 
        margin-left: 2rem;
    }
`;


export const BlueMenu = styled(Menu)`
    color: ${styles.colors.blue};
    width: 32px;
    margin-right: 2rem;
`;

export const BlueClose = styled(Close)`
    color: ${styles.colors.blue};
    width: 32px;;
    margin-right: 2rem;
`;