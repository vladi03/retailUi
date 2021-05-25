import {handleResponse} from "../utility/helpers";

export const getSiteData = async () => {
    const catalogApi = process.env.CATALOG_API;
    const userDomain = process.env.DOMAIN;

    const url = `${catalogApi}/catalogApi/api/v1/site/domain/${userDomain}`;
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
