
// Что будет выведено в консоль

function showFullName(firstName, lastName, ...rest) {
    console.log(
        `${firstName} ${lastName}${rest.length ? ` - ${rest}` : ""}`
    );
}

showFullName("Екатерина", "II", "императрица", "Всероссийская");

//Екатерина II - императрица,Всероссийская