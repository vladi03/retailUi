import React from 'react';
import {siteModel} from "./models/siteModel";

export const GlobalProviders = ({children}) => {

    return (
        <siteModel.ModelProvider>
            {children}
        </siteModel.ModelProvider>
    );
};