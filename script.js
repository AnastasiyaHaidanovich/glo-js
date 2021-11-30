'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let rollback = 17;
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let adaptive = confirm("Нужен ли адаптив на сайте?");

const allServicePrices = function getAllServicePrices() {
    return servicePrice1 + servicePrice2;
};

const checkedScreens = function(){
    let result = screens.split(", ");
    return result;
};

function getFullPrice() {
    return (screenPrice + allServicePrices());
}

const fullPrice = getFullPrice();
let feePay = fullPrice * (rollback/100);

const servicePercentPrice = function getServicePercentPrice() {
    return fullPrice - feePay;
};

function getTitle(str){
    let strLow = str.toLowerCase().trimLeft();
    let firstLetter = strLow.slice(0, 1).toUpperCase();
    return firstLetter + strLow.slice(1);
}

function getRollbackMessage(price){
    if (price >= 30000){
        return "Даем скидку в 10%";
    } else if (price < 30000 && price >= 15000){
        return "Даем скидку в 5%";
    } else if (price < 15000 && price > 0){
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так";
    }
}

function showTypeOf(x){
    return typeof x;
}

console.log(getTitle(title));


console.log(checkedScreens());
console.log(showTypeOf(title) ,showTypeOf(fullPrice), showTypeOf(adaptive));
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(Math.ceil(servicePercentPrice()));


// console.log("First console message");
// alert("Hi!");

// console.log(screens.length);
// console.log("Стоимость верстки экранов " + screenPrice + " рублей");
// console.log("Стоимость разработки сайта " + fullPrice + " рублей");
// console.log(screens.toLowerCase().split(", "));
// console.log("Оплата посреднику: " + (fullPrice * (rollback/100)));

