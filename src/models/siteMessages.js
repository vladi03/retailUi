import {handleResponse} from "../utility/helpers";

export const getSiteParams = async () => {
    const catalogApi = process.env.CATALOG_API;
    const userDomain = process.env.DOMAIN;
    //
    const url = `${catalogApi}/catalogApi/api/v1/site/${userDomain}`;
    const payloadGeneric = {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    };

    return fetch(url, payloadGeneric)
        .then(handleResponse()).then((result) => {
            return {
                site: result && result.length > 0 ? result[0] : { },
                siteLoading: false,
                siteHasError: false
            };
        }).catch((error) => {
            return {
                site: {
                    salesBackgroundColor: [0, 255, 255],
                    salesFontColor: [0,0,0]},
                siteLoading: false,
                siteLoadError: error.message || error,
                siteHasError: true
            };
        });
};

export const getSiteData = async () => {
    const catalogApi = process.env.CATALOG_API;
    const userDomain = process.env.DOMAIN;
    const url = "https://us-central1-our-pursuit-92702.cloudfunctions.net/site/domain/darbyfurnitureoutlet.com";
    const urlReal = `${catalogApi}/catalogApi/api/v1/site/domain/${userDomain}`;
    const payloadGeneric = {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
            //"Authorization": `Bearer ${token}`
        }
    };

    return fetch(url, payloadGeneric)
        .then(handleResponse()).then((result) => {
            console.log("result");
            console.log(result);
            return {
                categories: result.categories,
                catalogs: result.catalogs,
                locations: result.locations,
                siteDataLoading: false,
                siteDataHasError: false,
                siteDataLoadError: false
            }
        }).catch(() => {
            return {
                siteData: [],
                siteDataLoading: false,
                siteDataHasError: true,
                siteDataLoadError: ""//error.message || error
            };
        });

};

///catalogApi/api/v1/hit/sites/60a1734e08d51c1bbc35b93e
export const createSiteHit = async () => {
    const catalogApi = process.env.CATALOG_API;
    //const userDomain = process.env.DOMAIN;
    const url = `${catalogApi}/catalogApi/api/v1/hit/sites/60a1734e08d51c1bbc35b93e`;
    // noinspection DuplicatedCode
    const payloadGeneric = {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    };

    // noinspection JSUnusedLocalSymbols
    return fetch(url, payloadGeneric)
        .then(handleResponse()).then((result) => {
            console.log("hit complete");
            return true
        }).catch(() => {
            console.log("hit error");
            return false;
        });
};
