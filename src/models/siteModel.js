import {createContext} from "../utility/modelContext";
import {getSiteData} from "./siteMessages";
import {createSiteCategoriesModel} from "./siteMainPageCalc";

let provider = null;

export const createModel = () => ({
    categories: [],
    catalogs: [],
    locations: [],
    siteCategories: [],
    siteDataLoading: false,
    siteDataHasError: false,
    siteDataLoadError: "",
    siteDataInitLoaded: false,
    activeCategoryItem: null,

    onSiteDataInit
});

const onSiteDataInit = async ()=> {
    provider.setState({"siteDataInitLoaded": true});
    const result = await getSiteData();
    result.siteCategories = createSiteCategoriesModel(result,3);
    provider.setState(result);
};

export const  getInitialState = (classInstance) => {
    provider = classInstance;
    setTimeout(onSiteDataInit, 100);
    return  createModel();
};
export const siteModel = createContext(createModel, getInitialState);