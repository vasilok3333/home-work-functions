//Task 1
//Напишіть функцію, що повертає куб числа.

let getCubeNumber = (number) => Math.pow(number, 3)

let cubeNumber = getCubeNumber(4);

console.log(cubeNumber);


//Task 2 
//Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

function getNumberOfMath(first, second, third) {
    return (first + second) / third;
    s
}

let number = getNumberOfMath(3, 4, 7);

console.log(number);

//Task 3 
//Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).
let nameDay = getCurrentNameDay(4);

function getCurrentNameDay(num) {
    switch (num) {
        case 1:
            day = 'Понеділок';
            break;
        case 2:
            day = 'Вівторок';
            break;
        case 3:
            day = 'Середа';
            break;
        case 4:
            day = 'Четвер';
            break;
        case 5:
            day = 'Пятниця';
            break;
        case 6:
            day = 'Суботу';
            break;
        case 7:
            day = 'Неділя';
            break;
        default:
            day = 'Введіть число від 1 до 7';

    }
    return day;
}

console.log(nameDay);


//Task4 
//Реалізуйте функцію знаходження факторіала

function getFactorial(num) {
    let factorial = num;
    while (num != 1) {
        factorial = factorial * (num - 1);
        num--;
    }

    return factorial;

}

console.log(getFactorial(5));

// або рекурсія

function getFactorial2(num) {
    if (num != 1) {
        return num * getFactorial2(num - 1)
    } else {
        return 1;
    }
}

console.log(getFactorial2(5));


//Task 5 
//5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.
const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 3600;


function getSeconds(hours, min, sec) {
    return hours * SECONDS_IN_HOUR + min * SECONDS_IN_MINUTE + sec;
}
let sumSeconds = getSeconds(3, 45, 46);

console.log(sumSeconds);


//Task 6 
// Написати функцію, яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг: хх: сс».якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня".


function getTime(sec) {
    let hours = Math.floor(sec / SECONDS_IN_HOUR);
    let minutes = Math.floor(sec % SECONDS_IN_HOUR / SECONDS_IN_MINUTE);
    let seconds = (sec % SECONDS_IN_HOUR) % SECONDS_IN_MINUTE;

    if (hours > 23) {
        return 'Більше одного дня'
    } else {
        return `«${hours}:${minutes}:${seconds}»`
    }
}

let time = getTime(41200);
console.log(time);
time = getTime(412000);
console.log(time);