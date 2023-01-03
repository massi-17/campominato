let grid = document.querySelector('.grid')

function gridRender() {
    for (let i = 0; i < 100; i++) {

        grid.innerHTML += `<div id="${i}" class="square"></div>`

    }
}
gridRender()


let bombArray = []

function randomBombId(index) {
    while (bombArray.length < 10) {
        let bomb = Math.floor(Math.random() * 100) + 1;
        if (bombArray.indexOf(bomb) === -1) bombArray.push(bomb);
    }
    return bombArray[index]
}


let squares = document.querySelectorAll('.square')

function setBomb() {
    for (let i = 0; i < 10; i++) {

        squares.forEach(square => {
            if (square.id == randomBombId(i)) {

                square.innerHTML = `<i class="fa-solid fa-bomb bomb">`
            }
        })

    }
}

setBomb()
let result = document.querySelector('.result')
let points = document.querySelector('.counter')
points.textContent = '000'

squares.forEach(square => {
    square.addEventListener('click', (e) => {

        if (e.target.innerHTML.indexOf('<i class="fa-solid fa-bomb bomb">') != -1) {
            console.log('boom')
            stop()
            changeSmile()
            e.target.style.border = '3px inset gainsboro'
            e.target.firstChild.style.display = 'block'
            e.target.firstChild.style.color = 'black'
            result.innerHTML = `You LOST!<p>Click on the smile to play again!</p>`
            grid.style.pointerEvents = 'none'

        } else if (e.target.style.border == '3px inset gainsboro') {
            console.log('gia fatto')

        } else {
            console.log('libero')
            if (countDownTimer == null) {
                countDown(secondsSelected)
            }


            addPoint()
            e.target.style.border = '3px inset gainsboro'
        }

    })
})

function addPoint() {
    return points.textContent++
}

let smile = document.querySelector('.smile')
let smileHappy = document.getElementById('happy')
let smileSad = document.getElementById('sad')
console.log(smileSad)

function changeSmile() {
    smileHappy.style.display = 'none'
    smileSad.style.display = 'block'
    smileSad.style.border = '3px inset gainsboro'
    smileSad.style.color = '#CB0005'
    document.body.style.backgroundColor = '#CB0005'
}



smile.addEventListener('click', () => {
    location.reload()
})


squares.forEach(square => {
    square.addEventListener('click', (e) => {
        e.target.classList.add('.bo')
    })
})


let timerSelect = document.getElementById('timerSelect')
let secondsSelected = 30
timerSelect.addEventListener('change', e => {
    console.log(e.target.value)
    timer.innerHTML = e.target.value
    secondsSelected = e.target.value
})

let timer = document.querySelector('.timer')
let countDownTimer = null
function countDown(secondsSelected) {
    let sec = secondsSelected;
    countDownTimer = setInterval(function () {
        timer.innerHTML = sec;
        sec--;

        if (sec == -1) {
            document.body.style.backgroundColor = '#CB0005'
            result.innerHTML = `TIMEOUT!<p>Click on the smile to play again!</p>`
            grid.style.pointerEvents = 'none'
            changeSmile()
            stop()
        }

    }, 1000);
}

function stop() {
    clearInterval(countDownTimer);
}

