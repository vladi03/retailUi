const assert = require("assert");
const siteData = require("./siteDataMock.json");
const {createSiteCategoriesModel} = require("../src/models/siteMainPageCalc");

describe("main page create", ()=> {
    const result = createSiteCategoriesModel(siteData,3);
    it("mock data ok", ()=>{
        assert.strictEqual(siteData.catalogs.length, 15);
        assert.strictEqual(result.length, 5);
    });

    it("first category has catalog list", ()=>{
        assert.ok(result[0].catalogList.length > 0, " has catalog items");
        assert.strictEqual(result[0].catalogList.length, 5, "has catalog items");
        assert.strictEqual(result[0].sort, 2, "sort item 1");
        assert.strictEqual(result[0].category, "Bedroom Suites", "sort item 1 name");
    });

    it("first category image", ()=>{
        const expected = {
            "colorRgb": [ 155, 146, 132 ],
            "colorRgbOther": [ 113, 96, 74 ],
            "fileName": "BR00002L.jpg",
            "id": "5faddce02259d1260cf5a4cf",
            "willFitWidth": false
        };
        assert.deepStrictEqual(result[0].image, expected, "category 1 image");
    });

    it("third category has catalog list", ()=>{
        assert.ok(result[2].catalogList.length > 0, " has catalog items");
        assert.strictEqual(result[2].catalogList.length, 3, "has catalog items");
        assert.strictEqual(result[2].sort, 4, "sort item 1");
        assert.strictEqual(result[2].category, "Dining Sets & Servers", "sort item 3 name");
    });
});