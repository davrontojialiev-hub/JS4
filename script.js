let name = prompt("Ведите ваше имя?");
let nowYear = +prompt("Ведите текущий год?");
let year = +prompt("Ведите ваш год рождения?");
function user(name, year, nowYear) {
    return name + ", Ваш возраст " + (nowYear - year);
}

console.log(user(name, year, nowYear));


let numExample = +prompt("Ведите кол-во примеров");

function randomExample() {

for (let i = 0; i < numExample; i++) {
    let num1 = Math.round(Math.random() * 100);
    let num2 = Math.round(Math.random() * 100);
    let operators = ["+", "-", "*", "/"];
    let operator = operators[Math.floor(Math.random() * operators.length)];
    let ans;
    if (operator === "+") {
        ans = num1 + num2;
    } else if (operator === "-") {
        ans = num1 - num2;
    } else if (operator === "*") {
        ans = num1 * num2;
    }
    else if (operator === "/") {
        ans = num1 / num2;
    }


    let userAnswer = +prompt(num1 + " " + operator + " " + num2);
    if (userAnswer == ans) {
        alert("Ваш ответ верный - " + ans);
    } else {
        alert("Ваш ответ не верный - " + userAnswer + ". Правильный ответ: " + ans);
    }
}
}
randomExample();