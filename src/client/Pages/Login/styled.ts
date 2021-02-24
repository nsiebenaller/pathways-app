import styled from "styled-components";
import { Link } from "react-router-dom";
import * as theme from "client/theme";
import { Button } from "ebrap-ui";

export const Container = styled.div`
    height: 100%;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(/assets/purple_bg.jpg);
`;

export const Title = styled.div`
    font-size: 3em;
    font-weight: bold;
    color: ${theme.purple500};
    text-shadow: 0px 2px 2px ${theme.purple400};
`;

export const SubTitle = styled.div`
    font-size: 1em;
    color: white;
`;

export const LoginForm = styled.form`
    background: white;
    color: black;
    min-width: 450px;
    border-radius: 2px;
    box-shadow: ${theme.shadow2};
    margin: 10px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > * {
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const PasswordLink = styled(Link)`
    color: rgb(83, 20, 128);
    margin-bottom: 30px;
    text-decoration: underline;
    color: ${theme.purple500};
`;

export const RoundButton = styled(Button)`
    width: 100%;
    > * {
        width: 100%;
        border-radius: 50px;
    }
`;
