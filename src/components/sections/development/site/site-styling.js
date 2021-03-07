import styled from 'styled-components';
import {styles} from '../../../../utils/stylevars';
import noImageCard from '../../../../assets/noImageWeb.png';


export const SiteContainer = styled.div`
    width: 300px;
    min-width: 300px;
    margin: 1rem 1.5rem;
    &:hover div:first-child{
        transform: translateY(0rem);
    }
`;

export const Card = styled.div`
    background: transparent url(${props => props.img ? props.img : noImageCard }) 0% 0% no-repeat padding-box;;
    background-color: ${styles.colors.border};
    background-size: cover;
    background-position: center;
    box-shadow: 0px 3px 6px #0000006E;

    display: flex;
    justify-content: strech;
    align-items: flex-end;
    width: 100%;
    height: 180px;

    transform: translateY(2rem);
    transition: transform ease 0.2s;

`;

export const CardTitleContainer = styled.div`
    box-shadow: 3px 0px 6px #0000004A;
    background: rgba(255, 255, 255, 0.7) 0% 0% no-repeat padding-box;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    width: 100%;
    height: 2rem;
    
`;

export const CardTitle = styled.p`
    font-size:  ${styles.fontSize.preg};
    font-weight: ${styles.fontWeight.preg};
    font-family: ${styles.fontFam};
    color: ${styles.colors.grey};
    text-transform: uppercase;
    text-align: left;
    margin: 0.1rem 1rem;
    line-height: 2rem;
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 1rem 0rem;
`;

export const Link = styled.p`
    font-size:  ${styles.fontSize.preg};
    font-weight: ${styles.fontWeight.preg};
    font-family: ${styles.fontFam};
    color: ${styles.colors.blue};
    text-align: left;
    margin: 0rem 1rem;
`;