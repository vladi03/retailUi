import React, {Fragment} from "react";
import {connectArray} from "../../utility/helpers";
import {siteModel} from "../../models/siteModel";
import {makeStyles} from "@material-ui/core/styles";
import {Paper, Typography, Link} from "@material-ui/core";
import {PicRatioView} from "pic-ratio-fill";

export const CategoryListComponent = ({siteCategories})=> {
    const classes = useStyle();
    const catalogApi = process.env.CATALOG_API;

    return (
        <Fragment>
            <ul className={classes.container}>
            {siteCategories.map((category)=> {

                const preventDefault = (event) => event.preventDefault();

                // noinspection JSUnresolvedVariable
                return (
                    <li className={classes.item} key={category._id}>
                        <Paper className={classes.itemContainer}>
                            <div className={classes.itemImageBox}>
                                <PicRatioView
                                    src={`${catalogApi}/catalogApi/api/v1/catalog/file/${category.image.id}`}
                                    width={"100%"}
                                    height={250}
                                    colorRgb={category.image.colorRgb}
                                    colorRgbOpposite={category.image.colorRgbOther}
                                    willFitWidth={false}
                                />

                            </div>
                            <div className={classes.itemText}>
                                <Typography variant="h5" style={{color: "#1a8bdf"}} >
                                    {category.category}
                                </Typography>

                                {category.catalogList.map((catalog)=> {

                                    // noinspection JSUnresolvedVariable
                                    return (
                                        <div style={{marginBottom: 4}}>
                                            <Link href="#" onClick={preventDefault}>
                                                {catalog.shortDesc}
                                            </Link>
                                        </div>
                                    );
                                })}

                                <Typography variant="h6" style={{color: "#1a8bdf"}} >
                                    <Link href="#" onClick={preventDefault}>
                                    Shop all {category.category}
                                    </Link>
                                </Typography>
                            </div>
                        </Paper>
                    </li>
                );
            })}
            </ul>
        </Fragment>
    )
};

export const CategoryList = connectArray(CategoryListComponent,
    [siteModel]);

const useStyle = makeStyles({
    container: {
        display: "flex",
        "list-style": "none",
        "padding-left": 5,
        "flex-flow": "row wrap",
        "justify-content": "space-around"
    },
    item: {
        width: "calc(25% - 10px)",
        height: 400,
        padding:5,
        overflow: "hidden",
        "@media (max-width: 1280px)" : {
            width: "calc(50% - 10px)"
        },
        "@media (max-width: 600px)" : {
            width: "calc(100% - 10px)"
        }
    },
    itemContainer: {
        //padding: 15,
        height: "calc(100% - 0px)"
    },
    itemImageBox: {
        width: "100%",
        height: 250,
        overflow: "hidden",
        display:"inline-block",
        backgroundColor: "#afcdee",
        padding:0
    },
    itemText: {
        height: 150,
        paddingLeft: 7
    }
});
