'use strict';

const appData = {
    screens: [],
    rollback: 17,
    screenPrice: 0,
    adaptive: true,
    title: "",
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    start: function(){
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.titleCorrector();
        appData.getServicePercentPrice();

        appData.logger();
    },

    asking: function () {
        do {
           appData.title = prompt("Как называется ваш проект?");
        }
        while (appData.isNumber(appData.title) || appData.title.trim() === "");
        
        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;

            do {
                name = prompt("Какие типы экранов нужно разработать?");
            }
            while (appData.isNumber(name) || name.trim() === "");

            do {
                price = prompt("Сколько будет стоить данная работа?");
            }
            while (!appData.isNumber(price));

            appData.screens.push({id: i, name: name, price: price});
        }

        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;

            do {
                name = prompt("Какой дополнительный тип услуги нужен?");
            }
            while (appData.isNumber(name) || name.trim() === "");

            do {
                price = prompt("Сколько это будет стоить?");
            }
            while (!appData.isNumber(price));

            appData.services[name] = +price;
        }
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    addPrices: function (){

        appData.screenPrice = appData.screens.reduce(function (accumulator, currentValue) {
            return +accumulator + (+currentValue.price);
        }, 0);

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    titleCorrector: function (){
        appData.title = appData.title.trim().slice(0, 1).toUpperCase() + appData.title.toLowerCase().trim().slice(1);
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getFullPrice: function() {
        appData.fullPrice =  (+appData.screenPrice + (+appData.allServicePrices));
    },

    getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback/100));
    },

    saleMessage: function (price){
        if (price >= 30000){
            return "Даем скидку в 10%";
        } else if (price < 30000 && price >= 15000){
            return "Даем скидку в 5%";
        } else if (price < 15000 && price > 0){
            return "Скидка не предусмотрена";
        } else {
            return "Что то пошло не так";
        }
    },
    logger: function() {
        // for (let key in appData){
        //     console.log("key: " + key + " value: " + appData[key]);
        // }
        console.log(appData.allServicePrices);
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        console.log(appData.screenPrice);
        console.log(appData.services);
    }
};

appData.start();