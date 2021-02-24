import React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { Button, command } from "ebrap-ui";
import * as css from "./styled";
import { logout } from "client/Api";

interface Props extends RouteComponentProps {
    isLoggedIn?: boolean;
}
function Header(props: Props) {
    const doLogout = async () => {
        await logout();
        props.history.push("/");
    };
    const goToLogin = () => props.history.push("/login");
    const doRegister = async () => {
        await command.alert("This action is currently unavailable");
    };
    const goToList = () => props.history.push("/list");
    const goToImport = () => props.history.push("/import");

    return (
        <css.Container>
            <css.AppName>
                <Link to={"/"}>Pathways</Link>
            </css.AppName>
            <css.Menu>
                {props.isLoggedIn === false && (
                    <>
                        <Button
                            variant="outlined"
                            color="purple"
                            onClick={doRegister}
                        >
                            Register
                        </Button>
                        <Button
                            variant="default"
                            color="purple"
                            onClick={goToLogin}
                            disabledElevation
                        >
                            Login
                        </Button>
                    </>
                )}
                {props.isLoggedIn === true && (
                    <>
                        <css.MenuOption
                            variant="minimal"
                            color="purple"
                            onClick={goToImport}
                            disabledElevation
                        >
                            Import
                        </css.MenuOption>
                        <css.MenuOption
                            variant="minimal"
                            color="purple"
                            onClick={goToList}
                            disabledElevation
                        >
                            List
                        </css.MenuOption>
                        <Button
                            variant="default"
                            color="purple"
                            onClick={doLogout}
                            disabledElevation
                        >
                            Logout
                        </Button>
                    </>
                )}
            </css.Menu>
        </css.Container>
    );
}

export default withRouter(Header);
