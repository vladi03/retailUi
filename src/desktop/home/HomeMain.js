import React, {Fragment, useEffect} from "react";
//import { useAuth0 } from "@auth0/auth0-react";
import {AppBarTitleAddSearch} from "../../utility/components/AppBarTitle";
import {OpenWith} from "@material-ui/icons";
import {siteModel} from "../../models/siteModel";
//import {CatalogTable} from "../catalog/CatalogTable";
import {connectArray} from "../../utility/helpers";
//import {catalogModel} from "../../models/home/catalogModel";
import {CategoryList} from "./CategoryList";

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
            <CategoryList />
        </Fragment>
    );
};

export const HomeMain = connectArray(HomeMainComponent,[siteModel]);