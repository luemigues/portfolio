import styled from 'styled-components';
import {styles} from '../../../utils/stylevars';

export const Section = styled.section`
    height: 100vh;
    max-width: 100%;
    margin: 0rem 8%;
    display: flex;
    padding-bottom: 56px;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 40px;
    font-weight: ${styles.fontWeight.pblack};
    font-family: ${styles.fontFam};
    color: ${styles.colors.blue};
    min-width: fit-content;
    text-transform: uppercase;
    margin: 4rem 0rem;
`;

export const InformationContainer =  styled.div`
    max-width: 900px;
    min-width: fit-content;
    width: 80%;
    padding: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    background: ${styles.colors.blue}

`


export const LinksContainer =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 1rem 2rem;
    background: ${styles.colors.blue}
`
