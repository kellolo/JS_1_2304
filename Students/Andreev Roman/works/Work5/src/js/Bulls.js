var numGen = function() {
    let num = [];
    while (num.length < 4) {
        let temp = Math.floor(Math.random() * 10);
        if (num.indexOf(temp) < 0) {
            num.push(temp);
        }
    }
    return num;
}

var main = function() {
//    alert("Я задумал 4-х значное число из неповторяющихся чисел, попробуй отгадай!");
    let count = 10;
    
    
    while (count >= 0) {
        if (win == 1) {
            return console.log("Поздравляю, вы угадали число ", secret);
            break;
        }
        console.log("Осталось ходов: " + count);
//        player = prompt("Введите 4-х значное число: ");
        let playerNum = [];
        for (let i = 0; i < 4; i++) {
            let playerParse = parseInt(player.substr(i, 1));
            playerNum.push(playerParse);
        }
        count--;
        check(playerNum);
    }
    console.log("Повезет в следующий раз. Было загадано число: " + secret);
}
        
var check = function(par) {
    var bulls = 0;
    let cows = 0;
    for (let i = 0; i < 4; i++) {
        if (par[i] == secret[i]) {
            bulls++;
        }
        else if (secret.indexOf(par[i]) >= 0) {
            cows++;
        }
    }

    if (bulls == 4) {
        win = 1;
            
    }
    console.log("Ваше число: ", par);
    console.log("bulls: " + bulls);
    console.log("cows: " + cows);
 }

var win = 0;
var secret = numGen();
main();