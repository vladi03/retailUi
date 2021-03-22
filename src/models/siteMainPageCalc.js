
export const createSiteCategoriesModel= ({categories, catalogs})=> {

    return categories.filter((cat) => !cat.systemOnly).map((cat) => {
        const catalogList = catalogs.filter((catalog) => {
            return catalog.categories.filter(
                (inCat) => inCat._id === cat._id).length > 0;
        }).map((catalog)=> {
            const {sort} = catalog.categories.find(
                (inCat) => inCat._id === cat._id);
            return {...catalog, sort};
        });
        const enable = catalogList.length > 0;
        catalogList.sort(function (a, b) {
            return a.sort - b.sort;
        });
        const image = enable ? catalogList[0].images[0] : null;
        return {...cat, catalogList, image};
    }).sort(function (a, b) {
        return a.sort - b.sort;
    });
}