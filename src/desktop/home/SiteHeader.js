import React from "react";
import {AppBarTitleAddSearch} from "../../utility/components/AppBarTitle";
import {OpenWith} from "@material-ui/icons";

export const SiteHeader = ({url}) => {

    return (
        <div style={{backgroundColor:"#101010"}}>
            <AppBarTitleAddSearch
                title=""
                LeftIcon={OpenWith}
                imageUrl="logo3.png"
                backgroundColor={"#626166"}
                useBigSearch={false}
                linkUrl={url}
                hideSearch={true}
                onSearchChange={(value) => {

                }}
            />
        </div>
    );
};