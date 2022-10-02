//Вычисление возраста

//1


let name =prompt('Введите свое имя')
let year =+prompt('Введите свой год рождения')
let thisyear =+prompt('Введите нынешний год')



function min (thisyear, year){
    return thisyear - year; 
}



let result = min(thisyear, year);
alert(name + ' ваш возраст ' + result) 


// Рандомные числа

//2

let count = +prompt('Введите кол-во примеров')

function random (min,max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}
 
function randomSymbol() {
    return Math.floor(Math.random() * (4 - 1 + 1) + 1)
}

for (let i = 0; i < count; i++) {
    let num1 = random (1,100)
    let num2 = random (1,100)
    let symbol = randomSymbol()
    let result = 0

    if(symbol == 1) {
        symbol = '+'
        result = num1 + num2

    } else if (symbol == 2) {
        symbol = '-'
        result = num1 - num2
    } else if (symbol == 3) {
        symbol = '*'
        result = num1 * num2
    } else if (symbol == 4) {
        symbol = '/'
        result = num1 / num2
    } 
    let question = +prompt(num1 + symbol + num2)

    console.log(result == question ? 'Ваш ответ верный - ' + question : 'Ваш ответ не верный -' + 'Верный ответ будет -' + result );

}
    