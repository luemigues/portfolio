import styled from 'styled-components';
import {styles} from '../../../utils/stylevars.js';

export const Nav = styled.nav`
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin: 0 1rem;
    width: 72%;

`;

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    margin-right: 3rem;
    margin-left: 0.5rem;

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
