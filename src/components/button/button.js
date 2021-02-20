import styled from 'styled-components';
import {styles} from '../../utils/stylevars.js';

const ButtonS = styled.button`
    background: ${props => props.grey ? styles.colors.grey : styles.colors.blue};
    color: ${styles.colors.white};

    font-size: ${styles.fontSize.preg16};
    font-weight: ${styles.fontWeight.preg16};
    font-family: ${styles.fontFam};
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;

    width:  ${props => props.grey ? '176px' : '150px'};
    padding: 5px 17px;
    border: none;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
`;


function Button (props){
    return  <ButtonS> Get in touch </ButtonS>
};

export default Button