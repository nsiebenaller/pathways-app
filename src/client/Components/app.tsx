import Axios from "axios";
import { TextField } from "ebrap-ui";
import React from "react";

export default function App() {
    const [auth, setAuth] = React.useState<boolean>(false);

    const login = async () => {
        const { data } = await Axios.get("/api/Login");
        setAuth(data.success);
    };
    const check = async () => {
        const { data } = await Axios.get("/api/Check");
        setAuth(data.success);
    };
    const logout = async () => {
        await Axios.get("/api/Logout");
        setAuth(false);
    };

    return (
        <div className={"app"}>
            <div className={"app-title"}>Pathways</div>
            <div className={"app-subtitle"}>College Recruiting</div>
            <div className={"login-container"}>
                <TextField
                    label={<b>Email Address</b>}
                    placeholder={"Email Address"}
                    fullWidth
                />
                <TextField
                    label={<b>Password</b>}
                    placeholder={"Password"}
                    fullWidth
                />
                <a className={"pwd-link"} href={"/"}>
                    Forgot your password?
                </a>
                <button className={"round-btn filled"}>LOG IN</button>
                <button className={"round-btn outlined"}>SIGN UP</button>
            </div>
        </div>
    );
}
