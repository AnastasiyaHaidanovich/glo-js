let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные");
let screenPrice = prompt("Сколько будет стоить данная работа?", 12000);
let rollback = 17;

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = prompt("Сколько это будет стоить?");

let adaptive = Boolean(prompt("Нужен ли адаптив на сайте?", "Если адаптив не нужен, оставьте строку пустой"));
let fullPrice = +screenPrice + (+servicePrice1) + (+servicePrice2);
let feePay = fullPrice * (rollback/100);
let servicePercentPrice = fullPrice - feePay;
console.log(Math.ceil(servicePercentPrice));

if (fullPrice >= 30000){
    console.log("Даем скидку в 10%");
} else if (fullPrice < 30000 && fullPrice >= 15000){
console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0){
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что то пошло не так");
}

// console.log("First console message");
// alert("Hi!");

// console.log(typeof title, typeof fullPrice, typeof adaptive);
// console.log(screens.length);
// console.log("Стоимость верстки экранов " + screenPrice + " рублей");
// console.log("Стоимость разработки сайта " + fullPrice + " рублей");
// console.log(screens.toLowerCase().split(", "));
// console.log("Оплата посреднику: " + (fullPrice * (rollback/100)));

