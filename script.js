'use strict';

let rollback = 17;
let title;
let screens;
let screenPrice;
let adaptive;
let fullPrice;
let allServicePrices;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt("Как называется ваш проект?");
    screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные");
   
    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    }
    while (!isNumber(screenPrice));
    
    adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
    let sum = 0;
    let sumResult = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0){
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1){
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }
        do {
            sum = prompt("Сколько это будет стоить?");
        }
        while (!isNumber(sum));
        sumResult += +sum;
    }
    return +sumResult;
};

const checkedScreens = function(){
    let result = screens.split(", ");
    return result;
};

function getFullPrice() {
    return (+screenPrice + (+allServicePrices));
}

const servicePercentPrice = function getServicePercentPrice() {
    return fullPrice - (fullPrice * (rollback/100));
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();

console.log(getTitle(title));
console.log(checkedScreens());
console.log(showTypeOf(title) ,showTypeOf(fullPrice), showTypeOf(adaptive));
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(Math.ceil(servicePercentPrice()));
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log("allServicePrices", allServicePrices);
// console.log("First console message");
// alert("Hi!");
// console.log(screens.length);
// console.log(screens.toLowerCase().split(", "));
// console.log("Оплата посреднику: " + (fullPrice * (rollback/100)));

