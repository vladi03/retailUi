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
import {useParams} from "react-router-dom";


export const CategorySelectComponent = ({siteDataInitLoaded, onSiteDataInit }) => {
    useEffect(()=> {
        if(!siteDataInitLoaded)
            onSiteDataInit();
    });
    const classes = useStyles();
    const { categoryId } = useParams();
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

            <CatalogList categoryId={categoryId} />
            <Divider variant="middle" />
            <CategoryList />
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