import React from "react";
import {makeStyles} from "@material-ui/core/styles";

export const H1Title = ({children})=> {
    const classes = useStyles();
    return (
        <div className={classes.h1Title}>{children}</div>
    );
}

export const MainArticle = ({children})=> {
    const classes = useStyles();
    return (
        <div className={classes.mainArticle}>{children}</div>
    );
}

const useStyles = makeStyles({
    h1Title: {
        fontSize: 28,
        fontWeight: 900,
        color: "rgb(26, 139, 223)"
    },
    mainArticle : {
        fontSize: 20,
        marginTop: 15
    }
});
