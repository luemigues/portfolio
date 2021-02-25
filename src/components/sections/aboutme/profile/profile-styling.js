import styled from 'styled-components';
import {styles} from '../../../../utils/stylevars.js';

export const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-content: center;
    aling-items: center
    
`;

export const Photo = styled.img`
    border-radius: 50%;
    box-shadow: 0px 0px 15px #01010154;
    width: 370px;
    height: 370px;
    opacity: 1;
    margin-right: 7%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-start;
`;

export const Name = styled.h1`
    text-align: left;
    font-size: ${styles.fontSize.pbold};
    font-weight: ${styles.fontWeight.pbold};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    text-transform: uppercase;

    width: 100%;
    min-width: max-content;
    margin-bottom: 1rem;

`;

export const Title = styled.h2`
    text-align: left;
    font-size: ${styles.fontSize.pblack};
    font-weight: ${styles.fontWeight.pblack};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    text-transform: uppercase;

    width: 100%;
    min-width: max-content;
    margin-bottom: 2rem;

`;

export const Description = styled.p`
    text-align: left;
    font-size: ${styles.fontSize.preg};
    font-weight: ${styles.fontWeight.preg};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    line-height: 1.5;

    text-align: justify;
    width: 100%;
    max-width: 520px;
`;