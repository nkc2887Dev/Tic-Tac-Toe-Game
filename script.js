console.log('Game');

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isGameover = false;
// Function to Change Turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
// Function to Check for a Win
const checkWin = () => {
    let InnerBox = document.querySelectorAll('.inner-box');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    if (win) {
        win.forEach(e => {
            if ((InnerBox[e[0]].innerText === InnerBox[e[1]].innerText) && (InnerBox[e[2]].innerText === InnerBox[e[1]].innerText) && (InnerBox[e[0]].innerText !== '')) {
                document.querySelector('.info').innerText = InnerBox[e[0]].innerText + " " + "WON"
                isGameover = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
                music.play();
                // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                // document.querySelector(".line").style.width = "20vw";
            }
        })
    }
    else{
        document.querySelector('.info').innerText = "Match Draw" ;
    }
}

// Game Logic
let boxes = document.querySelectorAll('.box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.inner-box');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameover) {
                document.querySelector('.info').innerText = "Turn For " + turn;
            }
        }
    })
})

// Reset
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.inner-box');
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    isGameover = false;
    music.pause();
    document.querySelector('.info').innerText = "Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

})