import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { command, TextField, Button } from "ebrap-ui";
import { login } from "client/Api";
import * as css from "./styled";

type LoginEvent =
    | React.FormEvent<HTMLFormElement>
    | React.MouseEvent<HTMLButtonElement, MouseEvent>;

function Login({ history }: RouteComponentProps) {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    const submitForm = async (e: LoginEvent) => {
        e.preventDefault();
    };
    const doLogin = async (e: LoginEvent) => {
        e.preventDefault();
        const { success } = await login(email, password);
        if (success) {
            return history.push("/list");
        } else {
            await command.alert("Invalid Credentials");
        }
    };
    const doForgotPassword = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        await command.alert("This action is currently unavailable");
    };
    const doSignUp = async () => {
        await command.alert("This action is currently unavailable");
    };

    return (
        <main>
            <css.Container>
                <css.Title>Pathways</css.Title>
                <css.SubTitle>College Recruiting</css.SubTitle>
                <css.LoginForm onSubmit={submitForm}>
                    <TextField
                        label={<b>Email Address</b>}
                        placeholder={"Email Address"}
                        onChange={setEmail}
                        fullWidth
                    />
                    <TextField
                        label={<b>Password</b>}
                        placeholder={"Password"}
                        type={"password"}
                        onChange={setPassword}
                        fullWidth
                    />
                    <css.PasswordLink to={"/"} onClick={doForgotPassword}>
                        Forgot your password?
                    </css.PasswordLink>
                    <css.RoundButton
                        onClick={doLogin}
                        color={"purple"}
                        variant="default"
                        disabledElevation
                    >
                        LOG IN
                    </css.RoundButton>
                    <css.RoundButton
                        onClick={doSignUp}
                        color={"purple"}
                        variant="outlined"
                        disabledElevation
                    >
                        SIGN UP
                    </css.RoundButton>
                </css.LoginForm>
            </css.Container>
        </main>
    );
}

export default withRouter(Login);
