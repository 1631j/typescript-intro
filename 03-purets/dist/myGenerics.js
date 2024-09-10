"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(true);
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({brand: "Coca Cola", type: 1});
function getSearchProducts(products) {
    // do some DB operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some dn operation
    const myIndex = 3;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return { valOne, valTwo };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
