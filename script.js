'use strict';

const appData = {
    rollback: 17,
    screenPrice: 0,
    adaptive: true,
    title: "",

    start: function(){
        appData.asking();
        appData.fullPrice();
        appData.titleCorrector();
        appData.servicePercentPrice();
        appData.logger();
    },

    asking: function () {
        appData.title = prompt("Как называется ваш проект?");
        appData.screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные");
       
        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        }
        while (!appData.isNumber(appData.screenPrice));
        
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    titleCorrector: function (){
        let strLow = appData.title.toLowerCase().trimLeft();
        let firstLetter = strLow.slice(0, 1).toUpperCase();
        return firstLetter + strLow.slice(1);
    },

    screens: "",

    checkedScreens: function(){
        let result = appData.screens.split(", ");
        return result;
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    allServicePrices: function () {
        let sum = 0;
        let sumResult = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0){
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
            } else if (i === 1){
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
            }
            do {
                sum = prompt("Сколько это будет стоить?");
            }
            while (!appData.isNumber(sum));
            sumResult += +sum;
        }
        return +sumResult;
    },

    fullPrice: function() {
        return (+appData.screenPrice + (+appData.allServicePrices()));
    },

    servicePercentPrice: function getServicePercentPrice() {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback/100));
    },

    service1: "",
    service2: "",

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
        for (let key in appData){
            console.log("key: " + key + " value: " + appData[key]);
        }
    }
};

appData.start();
