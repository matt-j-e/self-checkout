const { 
    apple,
    banana,
    kiwi,
    mango,
    basket,
    scanItem,
    addToBasket,
    totalBasket,
    showBasket,
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

    it("returns an empty basket message showBasket is called on an empty basket", () => {
        expect(showBasket()).toBe("Your basket is empty");
    });

    it("adds an item to the basket and returns a message confirming that item has been removed together with update of total basket price.", () => {
        expect(addToBasket(banana)).toBe("Added one banana. Basket total: £6");
    });

    it("returns a list of items in the basket.", () => {
        expect(showBasket()).toBe("Items in your basket: banana ");
    });

    it("checks that the basket contains the correct number of items", () => {
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

    it("returns a list of items in the basket.", () => {
        expect(showBasket()).toBe("Items in your basket: banana kiwi apple ");
    });

    it("checks that an error message is returned if the item is not actually in the basket", () => {
        expect(removeItem(mango)).toBe("There's no mango in your basket");
    });

    it("removes an item from the basket and returns a message confirming the item has been removed together with update of total basket price.", () => {
        expect(removeItem(kiwi)).toBe("Removed one kiwi. Basket total £11");
    });

    it("returns a list of items in the basket.", () => {
        expect(showBasket()).toBe("Items in your basket: banana apple ");
    });

    it("checks that the basket contains the correct number of items", () => {
        expect(basket.length).toBe(2);
    });

    it("checks that basket contents are correct", () => {
        expect(basket).toEqual([banana, apple]);
    });
});