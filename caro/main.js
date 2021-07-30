let arrCaro = [];
let caro;
let order;
let player1;
let player2;
let point1 = 0;
let point2 = 0;
function start() {
    order = confirm("Player 1 First!");
    arrCaro = [];
    for (let i = 0; i < 10; i++) {
        let minArr = [];
        for (let j = 0; j < 10; j++) {
            minArr.push("")
        }
        arrCaro.push(minArr);
    }
    caro = new Caro(arrCaro)
    player1 = new Player("<i class=\"fa fa-times\" style=\"color: blue; font-size: 28px\" ></i>", order);
    player2 = new Player("<i class=\"fa fa-genderless\" style=\"color: red; font-size: 38px\" ></i>", !order);
    document.getElementById("game").style.display = "block";
    caro.display()
}

function tickerPlayer(i, j) {
    if (player1.status) {
        caro.setArray(player1, i, j);
        player1.status = false;
        player2.status = true;
    } else {
        caro.setArray(player2, i, j);
        player2.status = false;
        player1.status = true;
    }
    caro.display();
    if (caro.checkArray(i, j)) {
        if (!player1.status) {
            point1++;
            document.getElementById("player1").innerHTML = point1;
        } else {
            point2++;
            document.getElementById("player2").innerHTML = point2;
        }
        alert("You won!");
        document.getElementById("game").style.display = "none";
    }
}