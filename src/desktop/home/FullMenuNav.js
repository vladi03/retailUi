import React from "react";
import {SideStrip} from "fancy-menu";
import {makeStyles} from "@material-ui/core/styles";
import {HomeTwoTone, Timelapse} from "@material-ui/icons";
import {useIsMobile} from "../../utility/useIsMobile";

const mainLinks = [
    {label : "Home", icon: HomeTwoTone, selected: true, link:"#" },
    {label : "Payment Options", icon: Timelapse, link:"#payment" }
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
        marginLeft: isMobile ? 7 : 70,
        marginRight: 7
    },
})();