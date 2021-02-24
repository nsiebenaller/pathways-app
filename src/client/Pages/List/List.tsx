import { getPlayers } from "client/Api";
import React from "react";
import * as css from "./styled";

function getOffset(page: number) {
    if (page <= 0) return 0;
    const numberPerPage = 50;
    const offset = page * numberPerPage;
    const start = offset - numberPerPage;
    return start;
}

export default function List() {
    const [players, setPlayers] = React.useState<Array<Player>>();
    const [playerId, setPlayerId] = React.useState<number>(-1);
    const [page, setPage] = React.useState<number>(1);
    const [loading, setLoading] = React.useState<boolean>(false);

    async function loadPlayers(limit = 50, offset = 0) {
        setLoading(true);
        setPlayers(await getPlayers(limit, offset));
        setLoading(false);
    }

    React.useEffect(() => {
        loadPlayers();
    }, []);
    React.useEffect(() => {
        loadPlayers(50, getOffset(page));
    }, [page]);

    const playerList = React.useMemo(() => {
        if (!players) return [];
        return players.map((player) => (
            <PlayerItem
                key={player.id}
                player={player}
                playerId={playerId}
                setPlayerId={setPlayerId}
            />
        ));
    }, [players, playerId]);

    const selectedPlayer = React.useMemo(() => {
        return players?.find((x) => x.id === playerId);
    }, [players, playerId]);

    if (!players) {
        return <div>loading...</div>;
    }

    const backPage = () => setPage(page - 1);
    const forwardPage = () => setPage(page + 1);

    return (
        <main style={{ overflow: "hidden" }}>
            <css.Container>
                <css.PlayerList>
                    {playerList}
                    <css.ListActionsContainer>
                        <css.ListActions>
                            <button onClick={backPage}>back</button>
                            <button onClick={forwardPage}>forward</button>
                            <span>
                                <b>Page:</b> {page}
                            </span>
                            <span>{loading ? "loading..." : "Done."}</span>
                        </css.ListActions>
                    </css.ListActionsContainer>
                </css.PlayerList>
                <PlayerDetails player={selectedPlayer} />
            </css.Container>
        </main>
    );
}

interface PlayerItemProps {
    player: Player;
    playerId: number;
    setPlayerId: (id: number) => void;
}
function PlayerItem({ player, playerId, setPlayerId }: PlayerItemProps) {
    const selectPlayer = React.useCallback(() => {
        setPlayerId(player.id);
    }, [player, setPlayerId]);

    return (
        <css.PlayerItem
            onClick={selectPlayer}
            selected={playerId === player.id}
        >
            {player.lastName}, {player.firstName}
            {player.preferredName ? `"${player.preferredName}"` : ""}
        </css.PlayerItem>
    );
}

function PlayerDetails({ player }: { player: Player | undefined }) {
    if (!player) {
        return <css.NoPlayerSelected>select a player</css.NoPlayerSelected>;
    }
    return (
        <css.PlayerDetailsContainer>
            <b>ID: </b>
            <span>{player.id}</span>
            <b>firstName: </b>
            <span>{player.firstName}</span>
            <b>lastName: </b>
            <span>{player.lastName}</span>
            <b>preferredName: </b>
            <span>{player.preferredName}</span>
            <b>createdAt: </b>
            <span>{player.createdAt}</span>
            <b>updatedAt: </b>
            <span>{player.updatedAt}</span>
            {Object.keys(player.data).map((field) => (
                <React.Fragment key={field}>
                    <b>{field} </b>
                    <span>{player.data[field]}</span>
                </React.Fragment>
            ))}
        </css.PlayerDetailsContainer>
    );
}
