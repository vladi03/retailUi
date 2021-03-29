import React, {Fragment} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { GlobalProviders} from "../GlobalProviders";
//import {getLoginRoute} from "./history";
//import {FullMenuNav} from "../desktop/home/FullMenuNav";
//import { LoggedOut } from "../desktop/accounts/LoggedOut";
//import {initAuthStore} from "../models/accounts/userAuthStore";
import {HomeMain} from "../desktop/home/HomeMain";
import {FullMenuNav} from "../desktop/home/FullMenuNav";
import {PaymentOptions} from "../desktop/home/PaymentOptions";
//import {PrivateRoute} from "./PrivateRoute";
//import { withAuth0 } from "@auth0/auth0-react";
//import {setTokenValue, hasToken} from "../models/accounts/userAuthStore";
//import {CategoryMaintenance} from "../desktop/home/CategoryMaintenance";
//import {setRouteComponent} from "../utility/helpers";
import {PopupError} from "../utility/components/PopupError";
import {CatalogItem} from "../desktop/home/CatalogItem";
import {CategorySelect} from "../desktop/home/CategorySelect";

// noinspection JSUnusedLocalSymbols
export class RouteComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            isMobile: window.innerWidth <= 760,
            errorMessage: "",
            showAlert: false,
            alertStatus: "",
            tokenLoading: false,
            tokenLoaded: false
        };
    }

    onCloseAlert() {
        // noinspection JSCheckFunctionSignatures
        this.setState({errorMessage: "", alertStatus: ""});
    }

    componentDidMount() {

    }

    render() {
        // noinspection JSUnusedLocalSymbols
        //const MenuNav = FullMenuNav; //isMobile ? MobileNav :

        return (
            <Fragment>
                <GlobalProviders>
                <PopupError
                    errorMessage={""}
                    onClearErrorMessage={() => this.onCloseAlert()}
                    status={0}
                />
                    <HashRouter>

                            <div>
                                <Route
                                      exact path="/"
                                      component={HomeMain} />
                                <Route
                                    exact path="/catalogItem/:catalogId/:categoryId?"
                                    component={CatalogItem} />
                                <Route
                                    exact path="/category/:categoryId"
                                    render={() => {
                                        window.scrollTo(0,0);
                                        return (<CategorySelect />)
                                    }}
                                />

                                <Route
                                    exact path="/payment"
                                    component={PaymentOptions}
                                />
                            </div>

                    </HashRouter>
                </GlobalProviders>
            </Fragment>
        );
    }
}

/*

 */

export default RouteComponent