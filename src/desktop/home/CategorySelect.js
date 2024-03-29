import React, {Fragment, useEffect} from "react";
import {AppBarTitleAddSearch} from "../../utility/components/AppBarTitle";
import {makeStyles} from "@material-ui/core/styles";
import {OpenWith} from "@material-ui/icons";
import {siteModel} from "../../models/siteModel";
import {connectArray} from "../../utility/helpers";
import {CategoryList} from "./CategoryList";
import {CatalogList} from "./CatalogList";
import { Divider } from "@material-ui/core";
import {InfoBox} from "./InfoBox";
import {useParams} from "react-router-dom";
import {SiteHeader} from "./SiteHeader";


export const CategorySelectComponent = ({siteDataInitLoaded, onSiteDataInit }) => {
    console.log("-----------");
    /*
    useEffect(()=> {
        if(!siteDataInitLoaded)
            onSiteDataInit();
    });
     */
    const classes = useStyles();
    const { categoryId } = useParams();
    return (
        <Fragment>
            <SiteHeader url={"#/"} />

            <CatalogList categoryId={categoryId} />
            <Divider variant="middle" />
            <CategoryList />
            <InfoBox />
            <Divider variant="middle" style={{margin: 10}} />
        </Fragment>
    );
};

export const CategorySelect = connectArray(CategorySelectComponent,[siteModel]);

const useStyles = makeStyles({
    titleBar: {
        display: "flex",
        alignItems: "stretch",
        "@media (max-width: 1100px)": {
            display: "contents"
        }
    }
});