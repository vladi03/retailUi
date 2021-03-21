import React, {Fragment} from "react";
import {connectArray} from "../../utility/helpers";
import {siteModel} from "../../models/siteModel";
import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";

export const CategoryListComponent = ({siteCategories})=> {
    const classes = useStyle();

    return (
        <Fragment>
            <ul className={classes.container}>
            {siteCategories.map((category)=> {

                return (
                    <li className={classes.item}>
                        <Paper className={classes.itemContainer}>
                        {category.category}
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
        "padding-left": 5
    },
    item: {
        width: "calc(25% - 0px)",
        height: 150,
        padding:5
    },
    itemContainer: {
        padding: 15,
        height: "100%"
    }
});
