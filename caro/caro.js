class Caro {
    arrayCaro;

    constructor(array) {
        this.arrayCaro = array;
    }

    display() {
        let data = "<table>";
        for (let i = 0; i < this.arrayCaro.length; i++) {
            data += "<tr>";
            for (let j = 0; j < this.arrayCaro[i].length; j++) {
                data += "<td>" +
                    "<button id='" + i + "," + j + "' type='button' onclick='tickerPlayer(" + i + "," + j + ")'" +
                    "style='width: 40px; height: 40px; position: absolute; top:" + (42 * i) + "px;  left:" + (42 * j) + "px'" +
                    " value='" + this.arrayCaro[i][j] + "'>" + this.arrayCaro[i][j] + "</button>" +
                    "</td>"
            }
            data += "</tr>";
        }
        data += "</table>";
        document.getElementById("game").innerHTML = data;
    }

    setArray(player, indexI, indexJ) {
        for (let i = 0; i < this.arrayCaro.length; i++) {
            for (let j = 0; j < this.arrayCaro[i].length; j++) {
                if (i === indexI && j === indexJ) {
                    this.arrayCaro[i][j] = player.icon;
                    break;
                }
            }
        }
    }

    checkArray(a, b) {
        let valuePlayer = document.getElementById(a + "," + b).value;

        //đường ngang
        let count = 1;
        let i = 1;
        while (i + b < this.arrayCaro.length && valuePlayer == this.arrayCaro[a][b + i]) {
            count++;
            i++;
        }
        i = 1;
        while (b - i >= 0 && valuePlayer == this.arrayCaro[a][b - i]) {
            count++;
            i++;
        }
        if (count === 5) {
            return true;
        }

        // đường đọc
        count = 1;
        i = 1;
        while (i + a < this.arrayCaro.length && valuePlayer == this.arrayCaro[a + i][b]) {
            count++;
            i++;
        }
        i = 1;
        while (a - i >= 0 && valuePlayer == this.arrayCaro[a - i][b]) {
            count++;
            i++;
        }
        if (count == 5) {
            return true;
        }

        // đường chéo chính
        count = 1;
        i = 1;
        while (a + i < this.arrayCaro.length && b + i < this.arrayCaro.length && valuePlayer === this.arrayCaro[a + i][b + i]) {
            count++;
            i++;
        }
        i = 1;
        while (a - i >= 0 && b - i >= 0 && valuePlayer === this.arrayCaro[a - i][b - i]) {
            count++;
            i++;
        }
        if (count === 5) {
            return true;
        }

        // đường chéo phụ
        count = 1;
        i = 1;
        while (a - i >= 0 && b + i < this.arrayCaro.length && valuePlayer === this.arrayCaro[a - i][b + i]) {
            count++;
            i++;
        }
        while (a + i < this.arrayCaro.length && b - i >= 0 && valuePlayer === this.arrayCaro[a + i][b - i]) {
            count++;
            i++;
        }
        if (count === 5) {
            return true;
        }

    }
}