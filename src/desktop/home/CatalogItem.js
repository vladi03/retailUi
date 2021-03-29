import React from "react";
import {siteModel} from "../../models/siteModel";
import {connectArray} from "../../utility/helpers";
import {useParams} from "react-router-dom";
import {CatalogList} from "./CatalogList";
import {SiteHeader} from "./SiteHeader";

const CatalogItemComponent = ({}) => {
    const { catalogId, categoryId } = useParams();
    return (
        <div>
            <SiteHeader />
            test {catalogId} : {categoryId}
            {categoryId && <CatalogList categoryId={categoryId} />}
        </div>
    );
};

export const CatalogItem = connectArray(CatalogItemComponent, [siteModel]);