import styled from 'styled-components';
import {styles} from '../../../utils/stylevars.js';

export const Nav = styled.nav`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;
    width: 71%;

`;

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    margin-right: 3.5rem;
    margin-left: 1rem;

`;

export const ListItem = styled.li`
    list-style-type: none;
    text-transform: uppercase;
    font-size: ${styles.fontSize.preg};
    font-weight: ${styles.fontWeight.preg};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    margin: 0.7rem;

    &:hover, &:active {
        color:${styles.colors.blue};
    }

`;
