const apple = {
    name: "apple",
    barcode: 123,
    price: 5,
};

const banana = {
    name: "banana",
    barcode: 456,
    price: 6
   };

const kiwi = {
    name: "kiwi",
    barcode: 765,
    price: 25,
   };
   
const mango = {
    name: "mango",
    barcode: 987,
    price: 20,
   };

const items = [apple, banana, kiwi];
const basket = [];

const scanItem = (barcode) => {
    itemObj = items.find(item => item.barcode === barcode);
    return itemObj ? itemObj : "Sorry, that barcode isn't recognised. Try again."
};

const addToBasket = (item) => {
    basket.push(item);
    return `Added one ${item.name} to your basket`;
};

const totalBasket = () => {
    return basket.reduce((total, item) => {
        total += item.price;
        return total;
    }, 0);
}

const removeItem = (item) => {
    const index = basket.indexOf(item);
    if (index === -1) return `You don't have that item in your basket`;
    basket.splice(index, 1);
    return `Removed one ${item.name} from your basket`;
}


module.exports = { 
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
 };