import React, {useState} from "react";
import {AppBarTitleAddSearch} from "../../utility/components/AppBarTitle";
import {OpenWith} from "@material-ui/icons";
import {Divider, Typography, Button} from "@material-ui/core";
import {H1Title, H2Title, MainArticle} from "./Titles";
import {makeStyles} from "@material-ui/core/styles";
import {InfoBox} from "./InfoBox";
import {YesNoLinkDialog} from "./YesNoLinkDialog";

export const PurchaseOptions = ()=>{
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState("https://approve.me/s/darbyfurnitureoutlet/29207");
    return (
        <div>
            <YesNoLinkDialog open={open}
                             setOpen={setOpen}
                             url={url}
            />
            <div style={{backgroundColor:"#101010"}}>
                <AppBarTitleAddSearch
                    title=""
                    LeftIcon={OpenWith}
                    imageUrl="logo3.png"
                    backgroundColor={"#626166"}
                    useBigSearch={false}
                />
            </div>
            <Typography
                variant="h5"
                color="inherit"
                className={classes.typography}
            >
                <H1Title>Purchase Options</H1Title>
            </Typography>
            <div className={classes.itemContainer}>
                <div className={classes.imageContainer}>
                    <img alt=""
                         style={{width: "100%"}}
                         src={`1stFranklin31.png`}
                    />
                </div>
                <div className={classes.itemDescriptionContainer}>
                    <H2Title>1st Franklin Finance Company</H2Title>
                    <MainArticle>Credit Check Required</MainArticle>
                    <MainArticle>Printable Application usually answered within 2 hours</MainArticle>
                    <MainArticle>No qualifying questions, approval based on credit history, no application fee, monthly payments, 12 to 26 month terms, 10% down payment required, Georgia residents only, photo id required.</MainArticle>
                </div>
            </div>

            <div className={classes.itemContainer}>
                <div className={classes.imageContainer}>
                    <img alt=""
                         style={{width: "100%"}}
                         src={`progressive.png`}
                    />
                </div>
                <div className={classes.itemDescriptionContainer}>
                    <H2Title>Lease-To-Own Powered By Progressive Leasing</H2Title>
                    <MainArticle>No Credit Needed</MainArticle>
                    <MainArticle>90 Day purchase options - Online Application - Instant Answer</MainArticle>
                    <MainArticle>$49.99 Initial Payment - Automatic payment draft</MainArticle>
                    <MainArticle>**90-day Purchase Options: Standard agreement offers 12 months to ownership. 90-day purchase options cost more than the retailer’s cash price (except 3-month option in CA). To purchase early call 877-898-1970.**</MainArticle>
                    <MainArticle>*The initial payment (plus tax) is charged at leasts signing. Remaining lease payemnt will be determined upon item selection.*</MainArticle>
                    <p>
                        <Button className={classes.appButton}
                                variant="contained" color="primary"
                                onClick={() => {
                                    setUrl("https://approve.me/s/darbyfurnitureoutlet/29207");
                                    setOpen(true)
                                }}
                        >
                            Jonesboro Store Application »
                        </Button>

                        <Button className={classes.appButton}
                                variant="contained" color="primary"
                                onClick={() => {
                                    setUrl("https://approve.me/s/darbyfurnitureoutlet/39896");
                                    setOpen(true)
                                }}
                        >
                            Griffin Store Application »
                        </Button>

                    </p>

                </div>
            </div>
            <InfoBox />
            <Divider variant="middle" style={{margin: 10}} />
        </div>
    )
};

const useStyle = makeStyles({
    appButton: {
        width: 350,
        marginBottom : 20
    },
    imageContainer: {
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden",
        marginRight: 10,
        marginLeft: -10,
        overflowX: "scroll",
        width: 400,
        "@media (max-width: 1000px)": {
            width: "100%"
        }
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
        maxWidth: 400,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        padding: 15,
        backgroundColor: "#e1e0e2",
        "@media (max-width: 1000px)": {
            marginBottom: 10,
            maxWidth: "none"
        }
    }
})