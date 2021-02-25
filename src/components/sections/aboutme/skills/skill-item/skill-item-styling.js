import styled from 'styled-components';
import {StyledIconBase} from '@styled-icons/styled-icon'
import {styles} from '../../../../../utils/stylevars.js';

export const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;

`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: #474747;
    height: 40px; 
    width: 40px;
  }
`

export const Title = styled.p`
    text-align: center;
    font-size: 8px;
    font-weight: ${styles.fontWeight.preg};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    text-transform: uppercase;
    margin-top: 0.3rem;

`;