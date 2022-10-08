import React from "react";
import {siteModel} from "../../models/siteModel";
import {connectArray} from "../../utility/helpers";
import {makeStyles} from "@material-ui/core/styles";
import {hoursToView} from "../../models/hoursHelper";
import {H1Title} from "./Titles";
import {Link, Typography} from "@material-ui/core";

const InfoBoxComponent = ({locations})=> {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <H1Title>Home of Affordable Furniture</H1Title>
            <div className={classes.shortArticle}>
                Serving the south side area of Atlanta for 50 years...
            </div>
            <div className={classes.mainArticle}>
                Bedroom suites, bedding, living room suits, coffee and end tables, dinette sets, dining room suits and
                other related furniture items all at deeply discounted prices. Easy financing and layaway.
            </div>
            <Link href={`#/purchaseOptions`} >
                <Typography variant="h5" style={{color: "#1a8bdf"}} >
                    > See Purchase Options
                </Typography>
            </Link>

            <div className={classes.locationListContainer}>
                {locations.map((location)=> {
                    const listOfHours = hoursToView(location.hours);
                    // noinspection JSUnresolvedVariable
                    return (
                        <div className={classes.locationItemContainer}
                             key={location._id}
                        >
                            <div >
                                <a href={location.mapLink}
                                   target="_new">
                                    <button className={classes.locationButtons}>
                                        {location.locationName}
                                    </button>
                                </a>
                            </div>
                            <div className={classes.locationFields}>
                                <div className={`${classes.locationLine} ${classes.hideMobile}`}>
                                    <div className={classes.fieldTitle}>Address: </div>
                                    <div className={classes.fieldValue}>
                                        {location.address.address1},
                                        <br /> {location.address.city} {location.address.state} {location.address.zipCode}
                                    </div>
                                </div>
                                <div className={`${classes.locationLine} ${classes.hideMobile}`}>
                                    <div className={classes.fieldTitle}>Phone: </div>
                                    <div className={classes.fieldValue}>
                                        {location.phonePublic}
                                    </div>
                                </div>
                                { location.email && location.email.length > 0 &&
                                    <div className={`${classes.locationLine}`}>
                                        <div className={classes.fieldTitle}>Email:</div>
                                        <div className={classes.fieldValue}>
                                            <a href="mailto:{location.email}">
                                                @{location.locationName}
                                            </a>
                                        </div>
                                    </div>
                                }
                                <div className={classes.locationLine}>
                                    <div className={classes.fieldTitle}>Hours: </div>
                                    <div className={classes.fieldValue}>
                                    {listOfHours.map((hourText) =>
                                        (<div key={hourText}>{hourText}</div>))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export const InfoBox = connectArray(InfoBoxComponent, [siteModel]);


const useStyles = makeStyles({
    mainContainer: {
        marginRight: 5,
        marginLeft: 5,
        flex: "auto",
        background: "rgb(176 175 178)",
        borderRadius: 10,
        padding: "15px 0 0 15px",
        "@media (max-width: 1020px)": {
            marginTop: 15
        },
        "@media (max-width: 600px)": {
            paddingBottom: 10
        }
    },
    title: {
        fontSize: 28,
        fontWeight: 900,
        color: "rgb(26, 139, 223)"
    },
    shortArticle: {
        color: "black",
        fontSize: 22
    },
    mainArticle : {
        fontSize: 20,
        marginTop: 5,
        "@media (max-width:1130px) and (min-width:1020px)": {
            display: "none"
        },
        "@media (max-width: 700px)": {
            display: "none"
        }
    },
    hideMobile: {
        "@media (max-width: 600px)": {
            display: "none"
        }
    },
    locationListContainer: {
        display: "flex",
        justifyContent: "space-around",
        //marginTop: 25,
        "@media (max-width: 600px)": {
            display: "flex"
        }
    },
    locationItemContainer: {
        //flexGrow: 1,
        border: 2,
        borderRadius: 10,
        marginBottom: 25,
        //marginLeft: 15,
        //marginRight: 25,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 4,
        paddingRight: 15,
        background: "#f2f2f5",
        "@media (max-width: 800px)": {
            marginLeft: 0,
            marginRight: 20,
        },
        "@media (max-width: 600px)": {
            marginLeft: 0,
            marginRight: 20,
        }
    },
    locationButtons: {
        width: 135,
        height: 35,
        marginBottom: 5,
        borderWidth: 1,
        borderLeftWidth: 10,
        cursor: "pointer"
    },
    locationFields: {
        marginLeft: 15
    },
    fieldTitle: {
        fontWeight: 1000
    },
    fieldValue: {
        marginLeft: 10
    },
    locationLine: {
        marginBottom: 0
    }
});