import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    height: 100vh;
    width: 100vw;
    background: red;
    opacity: 0.3;
    padding-top: 150px;
`;

const H1 = styled.h1`
    text-align: center;
    color: white;
    font-size: 32px;
`;

function AboutMe(props){
    return (
        <Div>
            <H1>About Me</H1>
        </Div>
    )
}

export default AboutMe;