let fields = [];
let drawGame = 0;
let gameOver = false;
let currentShape = 'cross';
let WinSound = new Audio('audio/congrates.mp3')
let NewRound = new Audio('audio/keypad.mp3')


function startScreen() {
    document.getElementById('startscreen').innerHTML = /*html*/``;
    document.getElementById('startscreen').innerHTML = /*html*/`
    <div class="startposition">
        <div>
            <img class="startpic" src="img/startpic.jpg">
        </div>
        <a class="startbtn" onclick="playGame()">
            <button class="startbtnstyle">PRESS START</button>
        </a>
    </div>
    `;
}

function playGame() {
    NewRound.play();
    document.getElementById('startscreen').innerHTML = /*html*/`
        <div class="innergame" id="innergame">
            <!-- GAME OVER BEREICH -->
            <div id="drawarea" class="drawarea dnone">UNENTSCHIEDEN</div>
            <img id="gameisover" class="gameisover dnone" src="img/gameover.png">
            <button id="restartbtn" class="restartbtn dnone" onclick="restart()">RESTART</button>
            <!-- SPIELER PANEL -->
            <div class="playerpanel">
                <div class="playerinactive" id="player1"><img src="img/circle.png">P1</div>
                <div id="player2"><img src="img/cross.png">P2</div>
            </div>
            <!-- ALLE WIN LINIEN -->
            <div class="horiwinlineposition">
                <div id="line1" class="horiwinline" style="top: 355px;left: 50px;"></div>
                <div id="line2" class="horiwinline" style="top: 495px;left: 50px;"></div>
                <div id="line3" class="horiwinline" style="top: 633px;left: 50px;"></div>
                <div id="line4" class="horiwinline vertwinline" style="left: -92px;"></div>
                <div id="line5" class="horiwinline vertwinline" style="left: 48px;"></div>
                <div id="line6" class="horiwinline vertwinline" style="left: 188px;"></div>
                <div id="line7" class="horiwinline querline"></div>
                <div id="line8" class="horiwinline querline2"></div>
            </div>
            <!-- ALLE PLAYER BUTTONS -->
            <div class="playroomposition">
            <table>
                <tr>
                    <td onclick="fillShape(0)">
                        <img id="circle0" class="shape dnone" src="img/circle.png">
                        <img id="cross0" class="shape dnone" src="img/cross.png">
                    </td>
                    <td onclick="fillShape(1)">
                        <img id="circle1" class="shape dnone" src="img/circle.png">
                        <img id="cross1" class="shape dnone" src="img/cross.png">
                    </td>
                    <td onclick="fillShape(2)">
                        <img id="circle2" class="shape dnone" src="img/circle.png">
                        <img id="cross2" class="shape dnone" src="img/cross.png">
                    </td>
                </tr>
                <tr>
                    <td onclick="fillShape(3)">
                        <img id="circle3" class="shape dnone" src="img/circle.png">
                        <img id="cross3" class="shape dnone" src="img/cross.png">
                    </td>
                    <td onclick="fillShape(4)">
                        <img id="circle4" class="shape dnone" src="img/circle.png">
                        <img id="cross4" class="shape dnone" src="img/cross.png">
                    </td>
                    <td onclick="fillShape(5)">
                        <img id="circle5" class="shape dnone" src="img/circle.png">
                        <img id="cross5" class="shape dnone" src="img/cross.png">
                    </td>
                </tr>
                <tr>
                    <td onclick="fillShape(6)">
                        <img id="circle6" class="shape dnone" src="img/circle.png">
                        <img id="cross6" class="shape dnone" src="img/cross.png">
                    </td>
                    <td onclick="fillShape(7)">
                        <img id="circle7" class="shape dnone" src="img/circle.png">
                        <img id="cross7" class="shape dnone" src="img/cross.png">
                    </td>
                    <td onclick="fillShape(8)">
                        <img id="circle8" class="shape dnone" src="img/circle.png">
                        <img id="cross8" class="shape dnone" src="img/cross.png">
                    </td>
                </tr>
            </table>
            </div>
        </div>
    `;
}

function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player1').classList.remove('playerinactive');
            document.getElementById('player2').classList.add('playerinactive');
            drawGame++;
        } else {
            currentShape = 'cross';
            document.getElementById('player1').classList.add('playerinactive');
            document.getElementById('player2').classList.remove('playerinactive');
            drawGame++;
        }
        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin();
    }
}

function restart() {
    location.reload();
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle' + i).classList.remove('dnone');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross' + i).classList.remove('dnone');
        }
    }
}

function checkForWin() {
    let winner;
    // horizontal richtige möglichkeiten
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line1').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line2').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line3').style.transform = 'scaleX(1)';
    }
    // vertikal quer richtige möglichkeiten
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line6').style.transform = 'rotate(90deg) scaleX(1)';
    }
    // quer richtige möglichkeiten
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line7').style.transform = 'rotate(45deg) scaleX(1)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line8').style.transform = 'rotate(495deg) scaleX(1)';
    }

    if (!!winner) {
        console.log('GEWONNEN'), winner;
        gameOver = true;
        setTimeout(function () {
            document.getElementById('gameisover').classList.remove('dnone');
            document.getElementById('restartbtn').classList.remove('dnone');
        }, 1100);
        WinSound.play();
    }

    if (drawGame == 9 && !winner) {
        console.log('DRAW')
        gameOver = true;
        setTimeout(function () {
            document.getElementById('restartbtn').classList.remove('dnone')
        }, 2000)
        setTimeout(function () {
            document.getElementById('drawarea').classList.remove('dnone')
        }, 200)
        WinSound.play();
    }
}