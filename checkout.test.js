const { 
    apple,
    banana,
    kiwi,
    mango,
    items,
    basket,
    scanItem,
    addToBasket,
    totalBasket,
    removeItem
} = require("./checkout.js");

describe("check that self-checkout process works", () => {
    it("checks that an error message is returned if the barcode is not recognised", () => {
        expect(scanItem(234)).toBe("Sorry, that barcode isn't recognised. Try again.");
        expect(scanItem()).toBe("Sorry, that barcode isn't recognised. Try again.");
        expect(scanItem("123")).toBe("Sorry, that barcode isn't recognised. Try again.");
    });

    it("returns an item object when a valid barcode is entered", () => {
        expect(scanItem(123)).toEqual({
            name: "apple",
            barcode: 123,
            price: 5
        });
    });

    it("adds an item to the basket, returns the name og that item and checks that the basket contains the correct number of items", () => {
        expect(addToBasket(banana)).toBe("Added one banana to your basket");
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

    it("checks that an error message is returned if the item is not actually in the basket", () => {
        expect(removeItem(mango)).toBe("You don't have that item in your basket");
    });

    it("removes an item from the basket, returns a message confirming the item has been removed", () => {
        expect(removeItem(kiwi)).toBe("Removed one kiwi from your basket");
    });

    it("checks that the basket contains the correct number of items", () => {
        expect(basket.length).toBe(2);
    });

    it("checks that basket contents are correct", () => {
        expect(basket).toEqual([banana, apple]);
    });
});