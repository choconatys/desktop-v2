import { motion } from "framer-motion";
import { shade } from "polished";

import styled from "styled-components";

import Bakery from "../../assets/bakery.png";

export const Container = styled(motion.main)`
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
`;

export const Content = styled.section`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
`;

export const Carousel = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 2rem;

    @media (max-width: 670px) {
        margin: 0 auto;

        padding: 0 1rem;
    }
`;

export const CarouselContent = styled.div`
    width: 100%;
    max-width: 1400px;
    background: red;
    height: 45rem;

    padding: 1rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: url(${Bakery});
    background-size: 100%;
    background-position-y: -12.2rem;
    background-repeat: no-repeat;

    @media (max-width: 1450px) {
        max-width: 1350px;   
    }

    @media (max-width: 1409px) {
        background: url(${Bakery});
        background-size: 97%;
        background-position-y: -10rem;
        background-repeat: no-repeat;
    }

    @media (max-width: 1270px) {
        background: url(${Bakery});
        background-size: 97%;
        background-position-y: -4rem;
        background-repeat: no-repeat;
    }

    @media (max-width: 1175px) {
        background: transparent;
    }

    @media (max-width: 670px) {
        height: 28rem;
    }
`;

export const MouseDown = styled.button`
    position: absolute;
    bottom: -1rem;

    svg {
        font-size: 1.4rem;

        color: var(--text);
    }
`;

export const AboutUs = styled.section`
    padding: 10rem 0;
`;

export const BakeryPhoto = styled.img`
    width: 30rem;

    @media (max-width: 1080px) {
        display: none;
    }
`;

export const Welcome = styled.section`
    max-width: 700px;
    
    h1 {
        font-size: 4rem;
        line-height: 3.8rem;

        margin-bottom: 2rem;
    }

    h2 {
        font-size: 1.45rem;
        font-weight: 300;
    }

    @media (max-width: 490px) {
        h1 {
            font-size: 3.6rem;

            margin-bottom: 1rem;
        }
    }
    
    @media (max-width: 448px) {
        h1 {
            font-size: 3.4rem;
            
            margin-bottom: .8rem;
        }
        
        h2 {
            font-size: 1.24rem;
        }
    }
    
    @media (max-width: 420px) {
        h1 {
            font-size: 3rem;
            line-height: 3.2rem;
        }
    }
`;

export const ButtonsWrapper = styled.section`
    max-width: 680px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;

    margin-top: 60px;

    button, a {
        max-width: 20rem;
    }

    @media (max-width: 705px) {
        button, a {
            max-width: 45%;
        }
    }
`;

export const ButtonAboutUs = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    height: 3.5rem;

    color: var(--primary);

    border-radius: .2rem;

    font-weight: bold;

    transition: background-color .2s;

    &:hover {
        background: ${shade(.02, "#fff")}
    }
`;
