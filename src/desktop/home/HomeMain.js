import React, {Fragment, useEffect} from "react";
//import { useAuth0 } from "@auth0/auth0-react";
import {AppBarTitleAddSearch} from "../../utility/components/AppBarTitle";
import {OpenWith} from "@material-ui/icons";
import {siteModel} from "../../models/siteModel";
//import {CatalogTable} from "../catalog/CatalogTable";
import {connectArray} from "../../utility/helpers";
//import {catalogModel} from "../../models/home/catalogModel";
import {CategoryList} from "./CategoryList";
import {CatalogList} from "./CatalogList";
import { Divider } from "@material-ui/core";
import { Carousel } from "./Carousel";

export const HomeMainComponent = ({siteDataInitLoaded, onSiteDataInit }) => {
    useEffect(()=> {
        if(!siteDataInitLoaded)
            onSiteDataInit();
    });

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
            <div style={{display: "flex", alignItems: "stretch"}}>
            <Carousel />
            <div style={{
                marginRight: 5, marginLeft: 10, flex: "auto",
                background: "rgb(176 175 178)",
                borderRadius: 10
            }}>

            </div>
            </div>
            <CategoryList />
            <Divider variant="middle" />
            <CatalogList categoryId={"6059569ec9d6c1ae352412bc"} />
        </Fragment>
    );
};

export const HomeMain = connectArray(HomeMainComponent,[siteModel]);