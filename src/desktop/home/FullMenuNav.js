import React from "react";
import {SideStrip} from "fancy-menu";
import {makeStyles} from "@material-ui/core/styles";
import {HomeTwoTone, Timelapse} from "@material-ui/icons";
import {useIsMobile} from "../../utility/useIsMobile";

const mainLinks = [
    {label : "Home", icon: HomeTwoTone, selected: true, link:"#" },
    {label : "Purchase Options", icon: Timelapse },
    {label : "Franklin", icon: Timelapse, link:"#purchaseOptions" },
    {label : "Progressive", icon: Timelapse, link:"#purchaseOptions" },
    {label : "Categories", icon: Timelapse },
    {label : "Sofa & Loveseat", icon: Timelapse, link:"#/category/5f72aebb35d2b81b6497f4bb" },
    {label : "Bedroom Suites", icon: Timelapse, link:"#/category/5f72af5735d2b81b6497f4bd" },
    {label : "Coffee & End Tables", icon: Timelapse, link:"#/category/5f72af7635d2b81b6497f4be" },
    {label : "Dining & Servers", icon: Timelapse, link:"#/category/5f72af4935d2b81b6497f4bc" },
];

const bottomLinks = [

];

export const FullMenuNavComponent = ({children})=> {
    const isMobile = useIsMobile();
    const classes = useStyles(isMobile);

    return (
        <div>
            <SideStrip mainLinks={mainLinks}
                       bottomLinks={bottomLinks}
                       expandMenu={false}
                       userLabel=""
                       hideAvatar={true}
            />
            <div className={classes.mainContainer}>
                {children}
            </div>
        </div>)
};

export const FullMenuNav = FullMenuNavComponent;

const useStyles = (isMobile) => makeStyles({
    mainContainer:{
        marginLeft: isMobile ? 0 : 70
    },
})();
