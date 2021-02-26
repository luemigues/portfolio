import styled from 'styled-components';
import {styles} from '../../utils/stylevars.js';

const ButtonS = styled.button`
    background: ${props => props.type === 'download' ? styles.colors.grey : styles.colors.blue};
    box-shadow: 0px 3px 6px #00000029;
    color: ${styles.colors.white};
    transition: background 0.5s;

    font-size: ${styles.fontSize.preg};
    font-weight: ${styles.fontWeight.preg};
    font-family: ${styles.fontFam};
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;

    width:  ${props => props.type === 'download' ? '176px' : '150px'};
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

    &:hover, &:active{
        background: ${props => props.type === 'download' ? styles.hover.grey : styles.hover.blue};
    }

    @media (max-width: 990px) { 
        display:${props => props.type === 'download' ? 'block' : 'none'};
        background:${props => props.type === 'download' && styles.colors.blue};

        &:hover, &:active{
            background: ${props => props.type === 'download' && styles.hover.blue};
        }
    }

`;

export default ButtonS