
export const createSiteCategoriesModel= ({categories, catalogs}, maxList = 5)=> {

    const mainCategories = categories.filter((cat) => !cat.systemOnly).map((cat) => {
        let listCount = 0;
        const catalogList = catalogs.filter((catalog) => {
            if(listCount < maxList &&
                catalog.categories.filter((inCat) => inCat._id === cat._id).length > 0) {
                listCount++;
                return true;
            } else return false;
        });
        const enable = catalogList.length > 0;
        const image = enable ? catalogList[0].images[0] : null;
        return {...cat, catalogList, image};
    }).sort(function (a, b) {
        return a.sort - b.sort;
    });

    return mainCategories;
}