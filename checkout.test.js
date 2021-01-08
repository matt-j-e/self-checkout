const { TestScheduler } = require("jest");
const { 
    apple,
    banana,
    kiwi,
    items,
    basket,
    scanItem,
    addToBasket,
    totalBasket,
    removeItem
} = require("./checkout.js");

describe("check that self-checkout process works", () => {
    it("returns an item object when a barcode is entered", () => {
        expect(scanItem(123)).toEqual({
            barcode: 123,
            price: 5
        });
    });

    it("adds an item to the basket and checks that the basket contains the correct number of items", () => {
        addToBasket(banana);
        expect(basket.length).toBe(1);
    });

    it("checks that the basket contents are correct", () => {
        expect(basket[0]).toEqual(banana);
    });

    it("adds the total cost of the items in the basket", () => {
        addToBasket(kiwi);
        addToBasket(apple);
        expect(totalBasket()).toBe(5+6+25);
    });

    it("removes an item from the basket and checks the number of items is correct", () => {
        removeItem(kiwi);
        expect(basket.length).toBe(2);
    });

    it("checks that basket contents are correct", () => {
        expect(basket).toEqual([banana, apple]);
    });
});