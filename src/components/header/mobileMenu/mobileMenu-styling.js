import styled from 'styled-components';
import {styles} from '../../../utils/stylevars.js';
import {NavLink} from 'react-router-dom';

const activeClassName = 'selected';

export const Nav = styled.nav`
    display: block;
    flex-direction: column;
    align-content: space-between;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 56px;

    border-bottom: 1px solid ${styles.colors.border};
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
    backdrop-filter: blur(31px);
    -webkit-backdrop-filter: blur(31px);

    z-index: 150;
`;

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    margin: 1rem;
       
`;

export const ListItem = styled.li`
    list-style-type: none;
    text-transform: uppercase;
    font-size: ${styles.fontSize.preg};
    font-weight: ${styles.fontWeight.preg};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    margin: 0.7rem;
    width: max-content;


`;

export const StyledLink = styled(NavLink).attrs({
    activeClassName,
})`
    &:hover, &:active{
        color: ${styles.hover.text};
    }

    &.${activeClassName} {
    color: ${styles.hover.blue};
    }
`;