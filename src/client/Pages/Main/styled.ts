import styled from "styled-components";
import * as theme from "client/theme";

// Main Hero
export const HeroContainer = styled.div`
    position: relative;
`;
export const TopNav = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const Title = styled.div`
    color: lightgray;
`;
export const Menu = styled.div`
    position: absolute;
    right: 20px;
`;
export const MainHeroImage = styled.img`
    width: 100%;
    background-color: ${theme.charcoal};
`;

// White Section
export const WhiteContainer = styled.div`
    position: relative;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(
            rgba(255, 255, 255, 0.98) 50%,
            rgba(255, 255, 255, 0.8) 80%
        );
    }
`;
export const WhiteImage = styled.img`
    width: 100%;
`;
export const InnerContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CallToAction = styled.div`
    font-size: 2em;
    font-weight: 100;
    color: ${theme.gray};
    max-width: 800px;
    padding: 0 40px;
`;

// Card Section
export const CardContainer = styled.div`
    background-color: ${theme.lightGray};
`;
export const CardWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 120px;
`;
export const CardSectionTitle = styled.div`
    font-size: 2em;
    margin-left: 80px;
    margin-bottom: 20px;
`;
export const CardList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
        margin-right: 20px;
        margin-bottom: 40px;
    }
`;

// Home Card
export const Card = styled.div`
    background-color: white;
    box-shadow: ${theme.shadow5};
    border-radius: 10px;
    width: 250px;
    height: 400px;
    padding: 40px 30px;
    color: ${theme.gray};
`;
export const CardTitle = styled.div`
    font-size: 1.25em;
    font-weight: bold;
`;
export const CardItems = styled.ul`
    list-style-type: none;
    padding-left: 5px;
    > li {
        &:before {
            content: "-";
            margin-right: 5px;
        }
    }
`;
export const CardLink = styled.a``;
