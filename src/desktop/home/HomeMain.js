import React, {Fragment, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {siteModel} from "../../models/siteModel";
import {connectArray} from "../../utility/helpers";
import {CategoryList} from "./CategoryList";
import {CatalogList} from "./CatalogList";
import { Divider } from "@material-ui/core";
import { Carousel } from "./Carousel";
import {InfoBox} from "./InfoBox";
import {SiteHeader} from "./SiteHeader";

export const HomeMainComponent = ({siteDataInitLoaded, onSiteDataInit }) => {
    useEffect(()=> {
        if(!siteDataInitLoaded)
            onSiteDataInit();
    });
    const classes = useStyles();
    return (
        <Fragment>
            <SiteHeader />
            <div className={classes.titleBar}>
                <Carousel />
                <InfoBox />
            </div>
            <CategoryList />
            <Divider variant="middle" />
            <CatalogList categoryId={"6059569ec9d6c1ae352412bc"} />
        </Fragment>
    );
};

export const HomeMain = connectArray(HomeMainComponent,[siteModel]);

const useStyles = makeStyles({
    titleBar: {
        display: "flex",
        alignItems: "stretch",
        "@media (max-width: 1020px)": {
            display: "contents"
        }
    }
});