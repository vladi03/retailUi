// noinspection JSUnresolvedVariable

import React from "react";
import {siteModel} from "../../models/siteModel";
import {connectArray} from "../../utility/helpers";
import {useParams} from "react-router-dom";
import {CatalogList} from "./CatalogList";
import {SiteHeader} from "./SiteHeader";
import {H1Title,MainArticle} from "./Titles";
import {makeStyles} from "@material-ui/core/styles";
//import {PicRatioView} from "pic-ratio-fill";
import {Divider, Typography} from "@material-ui/core";
import {CategoryList} from "./CategoryList";
import {InfoBox} from "./InfoBox";

const catalogApi = process.env.CATALOG_API;

const CatalogItemComponent = ({ catalogs, site }) => {
    const { catalogId, categoryId } = useParams();
    const classes = useStyle();
    const catalog = catalogs.find((cat) => cat._id === catalogId);
    const image = catalog && catalog.images && catalog.images[0];

    const salesBackgroundRgbValue = site.salesBackgroundColor?.length > 2 ?
        `rgb(${site.salesBackgroundColor[0]},${site.salesBackgroundColor[1]}, ${site.salesBackgroundColor[2]})`:
        "rgb(255,255,255)";

    const salesFontRgbValue = site.salesFontColor.length > 2 ?
        `rgb(${site.salesFontColor[0]},${site.salesFontColor[1]}, ${site.salesFontColor[2]})`:
        "rgb(255,255,255)";

    return (
        <div>
            <SiteHeader url={"#/"} />
            {catalog &&
            <div>
                <Typography
                    variant="h5"
                    color="inherit"
                    className={classes.typography}
                >
                    <H1Title>{catalog.shortDesc}</H1Title>
                </Typography>
                <div className={classes.itemContainer}>
                    <div className={classes.itemDescriptionContainer}>
                        { catalog.sale && catalog.sale.enabled &&
                            <div
                                className={classes.catSale}
                                style={{
                                    "backgroundColor": salesBackgroundRgbValue,
                                    "color" : salesFontRgbValue
                                }}
                            >Sale : ${catalog.sale?.price}</div>
                        }
                        <H1Title>${catalog.unitPrice}</H1Title>
                        <MainArticle>{catalog.description}</MainArticle>
                        <MainArticle>{catalog.extraDesc}</MainArticle>
                        <MainArticle>Model# : {catalog.modelNumber}</MainArticle>
                    </div>
                    <div className={classes.imageContainer}>
                        <img alt=""
                             style={{height: "100%"}}
                             src={`${catalogApi}/catalogApi/api/v1/catalog/file/${image.id}`}
                        />
                    </div>
                </div>
            </div>
            }

            {categoryId && <CatalogList categoryId={categoryId} />}
            <CategoryList />
            <InfoBox />
            <Divider variant="middle" style={{margin: 10}} />
        </div>
    );
}

export const CatalogItem = connectArray(CatalogItemComponent, [siteModel]);

const useStyle = makeStyles({
    imageContainer: {

        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden",
        marginRight: 10,
        marginLeft: -10,
        overflowX: "scroll",
    },
    imageContainerZoom: {
        width: "100%"
    },
    itemImage: {
        maxHeight: 400
    },
    itemContainer : {
        display: "flex",
        justifyContent: "center",
        marginLeft: 5,
        marginBottom: 10,
        "@media (max-width: 1000px)": {
            display: "block"
        }
    },
    typography: {
        flexGrow: 1,
        align: "center",
        color: "#1a8bdf",
        "text-align": "center",
        marginTop: 20,
        border: "#d2d0d5 solid 3px",
        padding: 15,
        margin: 10,
        borderRadius: 15
    },
    itemDescriptionContainer: {
        position: "relative",
        maxWidth: 400,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        padding: 15,
        backgroundColor: "#e1e0e2",
        "@media (max-width: 1000px)": {
            marginBottom: 10,
            maxWidth: "none"
        }
    },
    catSale: {
        position: "absolute",
        //transform: "translate(10%, 15%)",
        zIndex: 9,
        fontSize: 28,
        fontWeight: 900,
        padding: 15,
        //font: "800 16px Arial",
        "border-bottom-right-radius": 10,
        "border-bottom-left-radius": 10,
        "border-top-left-radius": 10,
        color: "white",
        right:10,
        top: 0,
        transform: "rotate(0deg)"
    }
});
