import React from 'react';
import styled from 'styled-components';
import {styles} from '../../../utils/stylevars.js';

const BackDiv = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: ${styles.colors.border};
    opacity: 0.5;
    top: 100px;
    left: 0;
    z-index: 100;
`;

function Backdrop(props){
    return <BackDiv onClick={props.handleClick}/>
}

export default Backdrop;