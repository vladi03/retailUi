import React, {Fragment, useEffect} from "react";
import {AppBarTitleAddSearch} from "../../utility/components/AppBarTitle";
import {makeStyles} from "@material-ui/core/styles";
import {OpenWith} from "@material-ui/icons";
import {siteModel} from "../../models/siteModel";
import {connectArray} from "../../utility/helpers";
import {CategoryList} from "./CategoryList";
import {CatalogList} from "./CatalogList";
import { Divider } from "@material-ui/core";
import { Carousel } from "./Carousel";
import {InfoBox} from "./InfoBox";


export const HomeMainComponent = ({siteDataInitLoaded, onSiteDataInit }) => {
    useEffect(()=> {
        if(!siteDataInitLoaded)
            onSiteDataInit();
    });
    const classes = useStyles();
    return (
        <Fragment>
            <div style={{backgroundColor:"#101010"}}>
            <AppBarTitleAddSearch
                title=""
                LeftIcon={OpenWith}
                imageUrl="logo3.png"
                backgroundColor={"#626166"}
                useBigSearch={false}
                onSearchChange={(value) => {

                }}

            />
            </div>
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
        "@media (max-width: 1100px)": {
            display: "contents"
        }
    }
});