let title = "Название проекта";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 50;
let rollback = 17;
let fullPrice = 500;
let adaptive = true;
console.log("First console message");
// alert("Hi!");

console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log(screens.toLowerCase().split(", "));
console.log("Оплата посреднику: " + (fullPrice * (rollback/100)));