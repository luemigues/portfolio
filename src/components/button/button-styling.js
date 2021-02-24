import styled from 'styled-components';
import {styles} from '../../utils/stylevars.js';

const ButtonS = styled.button`
    background: ${props => props.color === 'grey' ? styles.colors.grey : styles.colors.blue};
    color: ${styles.colors.white};

    font-size: ${styles.fontSize.preg};
    font-weight: ${styles.fontWeight.preg};
    font-family: ${styles.fontFam};
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;

    width:  ${props => props.color === 'grey' ? '176px' : '150px'};
    min-width: fit-content;
    height: 32px;
    padding: 5px 17px;
    border: none;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus{
        outline: 0;
    }

    @media (max-width: 990px) { 
        display: none;
    }

    // display: ${props => props.isMobile ? 'none' : 'block'};
`;

export default ButtonS