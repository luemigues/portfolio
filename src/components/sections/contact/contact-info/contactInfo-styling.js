import styled from 'styled-components';
import {StyledIconBase} from '@styled-icons/styled-icon';
import {styles} from '../../../../utils/stylevars.js';
const mobileBP = `(max-width: 600px)`;

export const InfoContainer = styled.div`
    display: flex;
    justfify-content: center;
    align-items: center;
    margin: 1.2rem 0rem;
    width: fit-content;
    
    @media ${mobileBP} { 
        margin: 0.8rem 0rem;
    }
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: ${styles.colors.white};
    height: 50px; 
    width: 50px;
    margin-right: 2rem;

    @media ${mobileBP} { 
      height: 25px; 
      width: 25px;
      margin-right: 0.7rem;
    }
  }
`

export const Information = styled.p`
    font-size: ${styles.fontSize.pblack};
    font-weight: ${styles.fontWeight.pblack};
    font-family: ${styles.fontFam};
    color: ${styles.colors.white};

    @media ${mobileBP} { 
        width: fit-content;
        font-size: ${styles.fontSize.pextrab};
        font-weight: ${styles.fontWeight.pbold};
    }
`;