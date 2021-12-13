'use strict';

let title = document.getElementsByTagName('h1')[0];
let btnCalc = document.getElementsByClassName("handler_btn")[0];
let btnReset = document.getElementsByClassName("handler_btn")[1];
let btnPlus = document.querySelector(".screen-btn");
let number = document.querySelectorAll(".other-items.number");
let percent = document.querySelectorAll(".other-items.percent");
let rollbackInput = document.querySelector(".rollback > div > input[type=range]");
let rangeValue = document.querySelector(".rollback > div > span.range-value");
let totalInputHtml = document.getElementsByClassName("total-input")[0];
let totalInputScreens = document.getElementsByClassName("total-input")[1];
let totalInputServices = document.getElementsByClassName("total-input")[2];
let totalInputValue = document.getElementsByClassName("total-input")[3];
let totalInputRollback = document.getElementsByClassName("total-input")[4];
let screens = document.querySelectorAll(".screen");

const appData = {
    screens: [],
    rollback: 0,
    screenPrice: 0,
    adaptive: true,
    title: "",
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    count: [],
    servicesPercent: {},
    servicesNumber: {},
    isError: false,

    init: function(){
        appData.addTitle();        
        btnCalc.addEventListener('click', appData.checkValues);
        btnPlus.addEventListener('click', appData.addScreenBlock);
        appData.addRollback();
    },

    checkValues: function(){
        appData.isError = false;
        screens = document.querySelectorAll(".screen");
        screens.forEach(screen => {
            const select = screen.querySelector("select");
            const input = screen.querySelector("input[type=text]");

            if(select.value === "" || input.value === ""){
                appData.isError = true;
            }
        });

        if(!appData.isError){
            appData.start();
        } else {
            alert("Нужно заполнить поля!");
        }
    },

    addTitle: function(){
        document.title = title.textContent;
    },

    start: function(){
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.addRollback();
        console.log(appData);
        appData.showResult();
    },

    showResult: function(){
        totalInputHtml.value = appData.screenPrice;
        totalInputServices.value = appData.servicePricesPercent + appData.servicePricesNumber;
        totalInputValue.value = appData.fullPrice;
        appData.addRollbackValue();
    },

    addScreens: function(){
        screens = document.querySelectorAll(".screen");
        screens.forEach(function(screen, index){
            const select = screen.querySelector("select");
            const input = screen.querySelector("input");
            const selectName = select.options[select.selectedIndex].textContent;

            appData.count.push(input.value);

            appData.screens.push({
                id: index, 
                name: selectName, 
                price: +select.value * +input.value
            });
        });
    },

    addScreenBlock: function(){
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length-1].after(cloneScreen);
    },

    addServices: function(){
        number.forEach(function (item){
            const check = item.querySelector("input[type=checkbox]");
            const label = item.querySelector("label");
            const input = item.querySelector("input[type=text]");

            console.log(check);
            console.log(label);
            console.log(input);

            if (check.checked){
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });

        percent.forEach(function (item){
            const check = item.querySelector("input[type=checkbox]");
            const label = item.querySelector("label");
            const input = item.querySelector("input[type=text]");

            console.log(check);
            console.log(label);
            console.log(input);

            if (check.checked){
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });
    },

    addPrices: function (){
        appData.screenPrice = appData.screens.reduce(function (accumulator, currentValue) {
            return +accumulator + (+currentValue.price);
        }, 0);

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key]/100);
        }
        appData.fullPrice =  +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;

        let screenCount = 0;
        appData.count.forEach((screen) => {
            screenCount += +screen;
        });
        totalInputScreens.value = screenCount;
    },

    addRollback: function(){
        rollbackInput.addEventListener('input', function(){
            rangeValue.innerText = rollbackInput.value + "%";
            appData.rollback = rollbackInput.value;
        
            appData.addRollbackValue();
        });       
    },    

    addRollbackValue: function() {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback/100));

        totalInputRollback.value = appData.servicePercentPrice; 
    },

    titleCorrector: function (){
        appData.title = appData.title.trim().slice(0, 1).toUpperCase() + appData.title.toLowerCase().trim().slice(1);
    },

    // saleMessage: function (price){
    //     if (price >= 30000){
    //         return "Даем скидку в 10%";
    //     } else if (price < 30000 && price >= 15000){
    //         return "Даем скидку в 5%";
    //     } else if (price < 15000 && price > 0){
    //         return "Скидка не предусмотрена";
    //     } else {
    //         return "Что то пошло не так";
    //     }
    // },
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

appData.init();

 // isNumber: function (num) {
    //     return !isNaN(parseFloat(num)) && isFinite(num);
    // },