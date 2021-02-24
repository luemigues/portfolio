import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    height: 100vh;
    width: 100vw;
    background: blue;
    opacity: 0.3;
    padding-top: 150px;
`;

const H1 = styled.h1`
    text-align: center;
    color: white;
    font-size: 32px;
`;

function Develop(props){
    return (
        <Div>
            <H1>Develop</H1>
        </Div>
    )
}

export default Develop;