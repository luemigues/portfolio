import styled from 'styled-components';
import {styles} from '../../../../utils/stylevars.js';

const mobileBP = `(max-width: 990px)`;

export const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-content: center;
    aling-items: center;

    @media only screen and ${mobileBP}  { 
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
        max-width: 88%;
    }
    
`;

export const Photo = styled.img`
    border-radius: 50%;
    box-shadow: 0px 0px 15px #01010154;
    width: 370px;
    height: 370px;
    opacity: 1;
    margin-right: 7%;

    @media only screen and ${mobileBP} { 
        margin-bottom: 2rem;
        width: 250px;
        height: 250px;
        margin-right: 0px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-start;

    @media only screen and ${mobileBP} { 
        justify-content: center;
        max-width: 320px;
    }

`;

export const Name = styled.h1`
    font-size: ${styles.fontSize.pbold};
    font-weight: ${styles.fontWeight.pbold};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    text-transform: uppercase;

    width: 100%;
    min-width: max-content;
    margin-bottom: 1rem;

    @media only screen and ${mobileBP} { 
        min-width: 250px;
    }

`;

export const Title = styled.h2`
    font-size: ${styles.fontSize.pblack};
    font-weight: ${styles.fontWeight.pblack};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    text-transform: uppercase;

    width: 100%;
    min-width: max-content;
    margin-bottom: 2rem;

    @media only screen and ${mobileBP} { 
        justify-content: center;
        min-width: 250px;
    }

`;

export const Description = styled.p`
    font-size: ${styles.fontSize.preg};
    font-weight: ${styles.fontWeight.preg};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    line-height: 1.5;

    text-align: justify;
    width: 100%;
    max-width: 520px;

    @media only screen and ${mobileBP} { 
        justify-content: center;
        min-width: 250px;
    }
`;