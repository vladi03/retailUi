/*global siteData */
import React from "react";
import { AppBar, Toolbar, IconButton, Typography,
     Button, TextField, InputAdornment, Link } from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import { Add as AddIcon, Search, ArrowBackIos} from "@material-ui/icons";
import {SearchTextBox} from "./SearchTextBox";
import PropTypes from 'prop-types';
import {useIsMobile} from "../useIsMobile";

const useStyles = makeStyles((theme) => {

    return {
        rootSearch: {
            backgroundColor: "#BDBDBD"
        },
        root: {
            backgroundColor: theme.palette.background.paper,
            color: "white",
            fontSize: "14px",
            marginBottom: 10,
            marginLeft: -6,
            boxShadow: "0 0",
            width: "calc(100% + 6px)"
        },
        rootMobile: {
            backgroundColor: theme.palette.background.paper,
            color: "black",
            fontSize: "14px",
            marginBottom: 10,
            marginTop: 0,
            paddingLeft: 20,
            boxShadow: "0 0",
            width: "unset"
        },
        toolBar : {
            minHeight: 38,
            height: 38
        },
        avatar : {
            backgroundColor: "transparent",
            color: theme.palette.primary.main,
            marginRight: 15,
            marginLeft: -15,
        },
        searchTextContainer: {
            display: "flex",
            position: "absolute",
            right: 5,
            top: 7,
        },
        childContainerNoSearch: {
            display: "flex",
        },
        childContainer: {
            display: "flex",
            //position: "absolute",
            right: 270,
            top: 7,
            marginLeft: 8
        },
        searchTextBox: {
            width: 200
        },
        searchTextLabel: {
            marginRight: "5px",
            marginTop: "6px",
        },
        menuButton: {
            marginLeft: -18,
            marginRight: 10,
        },
        labelTitle: {
            color: theme.palette.primary.main,
            //marginRight: 28,
            display: "flex"
        },
        labelTitleWithTextBox: {
            color: theme.palette.primary.main,
            marginRight: 28,
            display: "flex",
            marginTop: 12
        }
    };
});

export const AppBarTitleAddSearchComponent =
    ({ title, LeftIcon, onSearchChange, hideSearch, onAdd,
         addLabel, children, childHasTextBox, linkUrl,
         onAvatarClick, imageUrl, backgroundColor, useBigSearch}) => {

    const isMobile = useIsMobile();
    const classes = useStyles();
    return (
        <AppBar className={isMobile ? classes.rootMobile : classes.root}
                style={{backgroundColor}}
                position="static">
            <Toolbar variant="dense">
                {linkUrl && <Link href={linkUrl || "#"} style={{color: "black"}}>
                    <ArrowBackIos/>
                </Link>
                }
                <Link href={linkUrl || "#"}>
                {imageUrl && <img src={imageUrl} height={40} />}
                </Link>
                <span className={childHasTextBox ? classes.labelTitleWithTextBox : classes.labelTitle}>
                    {/*  <IconButton className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                                onClick={() => onAvatarClick && onAvatarClick()}
                    >
                        <LeftIcon />
                    </IconButton>*/}
                    <Typography variant="h6" color="inherit" >
                        {title}
                    </Typography>

                </span>
                {useBigSearch &&
                <TextField
                    variant="filled"
                    placeholder="Search for Furniture"
                    color="white"
                    classes={{
                        root: classes.rootSearch
                    }}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="start">
                                <IconButton
                                    aria-label="toggle password visibility"
                                >
                                    <Search />
                                </IconButton>
                            </InputAdornment>,
                    }}
                />}
                {onAdd &&
                    !isMobile &&
                    <Button variant="outlined"
                            color="secondary"
                            onClick={onAdd}
                            startIcon={<AddIcon />}
                            style={{marginLeft: 20}}>
                        {addLabel || "Add"}
                    </Button>
                }

                {onAdd &&
                    isMobile &&
                    <IconButton
                            color="secondary"
                            onClick={onAdd}
                            style={{marginLeft: 10}}>
                        <AddIcon />
                    </IconButton>
                }

                <span className={hideSearch || onSearchChange === undefined || childHasTextBox ? classes.childContainerNoSearch : classes.childContainer}>
                    {children}
                </span>
                {hideSearch !== true && onSearchChange !== undefined && !useBigSearch &&
                <span className={classes.searchTextContainer}>

                        <span className={classes.searchTextBox}>
                            <SearchTextBox onSearchChange={(value) => onSearchChange(value)} />
                        </span>
                    </span>
                }
            </Toolbar>
        </AppBar>
    )
};

export const AppBarTitleAddSearch = AppBarTitleAddSearchComponent;

export const AppBarTitleComponent = ({ title, LeftIcon, variant, iconSize, marginLeft, style, children,
                                        childHasTextBox
                                     }) => {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} style={style} position="static">
            <Toolbar variant="dense"  >
                <span className={ childHasTextBox ? classes.labelTitleWithTextBox : classes.labelTitle} >
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <LeftIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" style={{marginTop: 9}} >
                        {title}
                    </Typography>
                </span>
                <span className={classes.childContainerNoSearch }>
                    {children}
                </span>
            </Toolbar>
        </AppBar>
    )
};



export const AppBarTitle = AppBarTitleComponent;

AppBarTitle.propTypes = {
    LeftIcon: PropTypes.elementType.isRequired,
    title: PropTypes.string
};
