const apple = {
    barcode: 123,
    price: 5,
};

const banana = {
    barcode: 456,
    price: 6
   };

const kiwi = {
    barcode: 765,
    price: 25,
   };   

const items = [apple, banana, kiwi];
const basket = [];

const scanItem = (barcode) => {
    return items.find(item => item.barcode === barcode);
};

const addToBasket = (item) => {
    basket.push(item);
    return basket;
};

const totalBasket = () => {
    return basket.reduce((total, item) => {
        total += item.price;
        return total;
    }, 0);
}

const removeItem = (item) => {
    const index = basket.indexOf(item);
    basket.splice(index, 1);
    return basket;
}


module.exports = { 
    apple,
    banana,
    kiwi,
    items,
    basket,
    scanItem,
    addToBasket,
    totalBasket,
    removeItem
 };