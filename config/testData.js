"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testData = void 0;
exports.testData = {
    username: 'standard_user',
    password: 'secret_sauce',
    products: ['Sauce Labs Backpack', 'Sauce Labs Bike Light'],
    checkoutInfo: {
        firstName: 'John',
        lastName: 'Doe',
        zipCode: '12345'
    }
};
var jd = JSON.stringify(exports.testData);
console.log(jd);
