
// Что будет выведено в консоль

var currentCity = "Екатеринбург";

function sayWelcome() {
    console.log("Welcome to" + currentCity);
}

setTimeout(function(){
    var currentCity = "Москва"; // определяем заново, функциональная область видимости
    sayWelcome()
}, 1000)
