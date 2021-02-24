import styled from "styled-components";
import * as theme from "client/theme";

export const Container = styled.footer`
    background: ${theme.grey300};
    padding: 80px 20px;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    > b {
        color: ${theme.purple500};
    }
    > small {
        font-size: 0.7em;
        margin-left: 5px;
        color: ${theme.grey500};
        white-space: nowrap;
    }
`;
