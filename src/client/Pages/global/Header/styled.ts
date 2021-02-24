import styled from "styled-components";
import { Button } from "ebrap-ui";
import * as theme from "client/theme";

export const Container = styled.header`
    position: sticky;
    top: 0;
    background: white;
    padding: 20px 40px;
    box-shadow: ${theme.shadow3};
    display: grid;
    grid-template-columns: 1fr min-content;
    background: white;
    z-index: 1;
`;

export const AppName = styled.div`
    font-size: 2em;
    font-weight: bold;
    color: ${theme.purple500};
`;

export const Menu = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style: none;
    > * {
        margin-left: 20px;
    }
`;

export const MenuOption = styled(Button)`
    > * {
        border: 1px solid transparent;
    }
    &:hover {
        text-decoration: underline;
    }
`;
