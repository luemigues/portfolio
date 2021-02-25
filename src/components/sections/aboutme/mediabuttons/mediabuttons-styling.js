import styled from 'styled-components';
import {styles} from '../../../../utils/stylevars.js';
import {Linkedin} from '@styled-icons/bootstrap/Linkedin';
import {GithubSquare} from '@styled-icons/fa-brands/GithubSquare';

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    min-width: 370px;
    margin-right: 7%;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    margin: 1rem 0rem;
`;

export const LinkedinIcon = styled(Linkedin)`
    color: ${styles.colors.grey};
    width: 28px;
    transition: color 0.5s;

    &:hover{
        color: ${styles.hover.grey};
    }
`;

export const GithubIcon = styled(GithubSquare)`
    color: ${styles.colors.grey};
    width: 28px;
    margin-left: 1rem;
    transition: color 0.5s;

    &:hover{
        color: ${styles.hover.grey};
    }
    
`;