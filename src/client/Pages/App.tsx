import React from "react";
import {
    Route,
    RouteComponentProps,
    Switch,
    withRouter,
} from "react-router-dom";

import { check } from "client/Api";
import Header from "./global/Header/Header";
import Footer from "./global/Footer/Footer";
import Importer from "./Importer/Importer";
import List from "./List/List";
import Login from "./Login/Login";
import Main from "./Main/Main";

function useSecurity(routerProps: RouteComponentProps) {
    const [allowed, setAllowed] = React.useState<boolean>();
    React.useEffect(() => {
        (async () => {
            const { success } = await check();
            setAllowed(success);
        })();
    }, [routerProps]);
    return allowed;
}

interface Props extends RouteComponentProps {}
function App(props: Props) {
    const allowed = useSecurity(props);

    return (
        <>
            {/* <Header isLoggedIn={allowed} /> */}

            <Switch>
                <Route path={"/"} exact component={Main} />
                <Route path={"/login"} exact component={Login} />
                <Route
                    path={"/import"}
                    exact
                    component={secure(Importer, allowed)}
                />
                <Route path={"/list"} exact component={secure(List, allowed)} />
                <Route component={NotFound} />
            </Switch>

            <Footer />
        </>
    );
}
export default withRouter(App);

function secure(component: () => JSX.Element, allowed?: boolean) {
    if (allowed === undefined) return () => <div />;
    if (!allowed) return () => <div>NOT ALLOWED</div>;
    return component;
}

function NotFound() {
    return <div>NOT FOUND</div>;
}
