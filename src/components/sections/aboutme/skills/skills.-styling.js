
import styled from 'styled-components';

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 520px;

    @media (max-width: 990px) { 
        margin-bottom: 2.5rem;
        justify-content: center;
        max-width: 290px;
    }

`;


export const DevelopmentSkills = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;

    @media (max-width: 990px) {
        justify-content: space-around; 
        min-width: 100%;
        max-width: 300px;

    }
`;


export const DesignSkills = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1rem;

    @media (max-width: 990px) {
        justify-content: space-around; 
        min-width: 100%;
        max-width: 300px;

    }
`;