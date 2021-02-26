import styled from 'styled-components';

const mobileBP = `(max-width: 990px)`;

export const Section = styled.section`
    height: 100vh;
    max-width: 100%;
    margin: 0rem 8%;
    padding-top: 115px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

    @media ${mobileBP} { 
        height: 100%;
        padding-top: 90px;
        align-items: center;
    }
`;

export const SkillsButtonContainer = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 4% 0%;
        justify-content: center;
        align-items: flex-start;

        @media ${mobileBP} { 
            flex-wrap: wrap-reverse;
            justify-items: center;
        }
`;