import styled from 'styled-components';
import {styles} from '../../../utils/stylevars';


export const Section = styled.section`
    max-width: 100%;
    margin: 0rem 5%;
    padding-top: 85px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

    @media (max-width: 990px) { 
        height: 100%;
        padding-top: 90px;
        align-items: center;
    }
`;

export const Title = styled.h1`
    font-size:  ${styles.fontSize.pblack};
    font-weight: ${styles.fontWeight.pblack};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    min-width: fit-content;
    text-transform: uppercase;
    margin: 1rem 0rem;
`;


export const SitesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-evenly;
`;