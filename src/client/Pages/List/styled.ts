import styled from "styled-components";
import * as theme from "client/theme";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
`;

export const PlayerList = styled.div`
    border-right: 1px solid ${theme.grey300};
    height: 100%;
    position: relative;
    overflow: auto;
`;

export const ListActionsContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`;

export const ListActions = styled.div`
    position: sticky;
    bottom: 0;
    width: 100%;
    background: rgba(235, 235, 235, 0.8);
    box-shadow: ${theme.shadow5};
    border-top: 1px solid ${theme.grey300};
    padding: 10px 80px;
    > * {
        margin-right: 20px;
    }
`;

export const PlayerItem = styled.div`
    padding: 10px 40px;
    border-bottom: 1px solid ${theme.grey300};
    ${theme.animate}
    cursor: pointer;
    background: ${({ selected }: { selected: boolean }) =>
        selected ? theme.grey200 : "white"};
    &:last-child {
        border-bottom: 1px solid transparent;
    }
    &:hover {
        background: ${theme.grey200};
    }
`;

export const NoPlayerSelected = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.grey200};
    color: ${theme.grey400};
    font-weight: bold;
    font-size: 3em;
`;

export const PlayerDetailsContainer = styled.div`
    max-height: 100%;
    overflow: auto;
    display: grid;
    grid-template-columns: 300px 200px;
    grid-auto-rows: 50px;
    b {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 5px 30px;
    }
    span {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    > * {
        border-bottom: 1px solid ${theme.grey300};
    }
`;
