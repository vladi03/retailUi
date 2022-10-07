import './index.css'
import React from 'react'
import {render} from 'react-dom'
import RouteConfig from  "./route/RouteConfig";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { grey, yellow } from '@material-ui/core/colors';
import {createSiteHit} from "./models/siteMessages";
//import { Auth0Provider } from "@auth0/auth0-react";

const muiTheme = createTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        textColor: grey.A700,
        primary: {
            main: "#3d6090",
            success: "#4caf50",
            idle: yellow[500]
        },
        secondary: { main: "#428bca"}
    }
});

const Loader = () => {
    const hitDateStr = localStorage.getItem('hitDateMs');
    if(hitDateStr === null ||
        (Date.now() - Number(hitDateStr)) > 864000000
    ) {
        localStorage["hitDateMs"] = Date.now();
        console.log("createHit");
        createSiteHit().then();
    }

    return(<MuiThemeProvider theme={muiTheme}><RouteConfig/></MuiThemeProvider>);
}

render(
    <Loader/>
    ,
    document.querySelector('#app'));

