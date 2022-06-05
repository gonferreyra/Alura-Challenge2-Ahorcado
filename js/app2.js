// Variables
const btnNewGame = document.querySelector('.btnNewGame');
const btnNewGame2 = document.querySelector('.btnNewgame2');
const btnNewWord = document.querySelector('.btnNewWord');
const btnSave = document.querySelector('.btnSave');
const btnCancel = document.querySelector('.btnCancel');
const btnQuit = document.querySelector('.btnQuit');
const inputNewWord = document.querySelector('.inputNewWord');
const startGame = document.querySelector('.start-game')
const gameWord = document.querySelector('.add-words');
const letterDiv = document.querySelector('.letterContainer')
const wrongLetter = document.querySelector('.wrongLetter');
const canvasHangman = document.querySelector('#canvasHangman');
const board = canvasHangman.getContext("2d");
const main = document.querySelector('main');
const gameMenu = document.querySelector('.game-menu');

// Palabras
let words = ['javascript', 'devops', 'ferrari', 'house', 'weekend', 'sunday', 'table', 'computer', 'tree', 'football'];
let word = [];
let palabraMostrar = [];
let lettersWrong = [];


//Contador
let count = 0;

//Errores
let mistakes = 0;

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    btnNewGame.addEventListener('click', randomWord);
    btnNewWord.addEventListener('click', newWord);
    // btnNewGame2.addEventListener('click', () => {
    //     cleanHTML();
    // })
    // btnQuit.addEventListener('click', () => {
    //     gameMenu.classList.remove('hidden');
    //     startGame.classList.add('hidden');
    //     palabraMostrar = [];
    //     letterDiv.textContent = '';
    //     lettersWrong = [];
    //     wrongLetter.textContent = '';
    //     board.clearRect(0, 0, 200, 300);
    //     mistakes = 0;
    // })
});

const cleanHTML = () => {
    palabraMostrar = [];
    letterDiv.textContent = '';
    lettersWrong = [];
    wrongLetter.textContent = '';
    board.clearRect(0, 0, 200, 300);
    mistakes = 0;
    randomWord()
};

const randomWord = () => {
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word)
    gameMenu.classList.add('hidden');
    startGame.classList.remove('hidden');
    showUnderline(word);
    // checkLetter(word);
};

const showUnderline = (word) => {
    for (let letra of word) {
        palabraMostrar.push('_');
    }
    console.log(palabraMostrar)
    letterDiv.textContent = palabraMostrar.join('');
    checkLetter(word);
};

const checkLetter = () => {

    //Controlador de eventos
    const controller = new AbortController();

    btnNewGame2.addEventListener('click', () => {
        cleanHTML();
        controller.abort();
    });

    btnQuit.addEventListener('click', () => {
        gameMenu.classList.remove('hidden');
        startGame.classList.add('hidden');
        palabraMostrar = [];
        letterDiv.textContent = '';
        lettersWrong = [];
        wrongLetter.textContent = '';
        board.clearRect(0, 0, 200, 300);
        mistakes = 0;
        controller.abort();
    })
    document.addEventListener('keydown', (e) => {
        if (mistakes >= 9) {
            controller.abort();
            return gameOver();
        } else {
            let keyPressed = e.key;
            // console.log(e);
            if (validator(keyPressed) && keyPressed.length == 1 && keyPressed != '') {
                for (let i = 0; i < word.length; i++) {
                    if (keyPressed === word[i]) {
                        console.log(word[i])
                        palabraMostrar[i] = keyPressed.toUpperCase();
                        letterDiv.textContent = palabraMostrar.join('');
                    }
                }
            }
            // Verificar si gano
            if (!letterDiv.textContent.includes('_')) {
                alert('Gano');
                controller.abort();
            }

            // Mostrar la letra equivocada
            if (!word.includes(keyPressed) && keyPressed.length <= 1 && keyPressed != ' ' && isNaN(keyPressed)) {
                // AGREGAR CUANDO INGRESA UNA LETRA REPETIDA QUE NO LA TOME COMO NUEVA LETRA
                if (lettersWrong.includes(keyPressed)) {
                    alert('Key has already been checked. try another letter');
                    return;
                };

                lettersWrong.push(keyPressed)
                wrongLetter.textContent = lettersWrong.join('').toUpperCase();

                // Quitar intentos
                mistakes++;

                // dibujar ahorcado
                // drawLines(mistakes);
                switch (mistakes) {
                    case 1:
                        board.strokeStyle = '#0A3871';
                        board.lineWidth = 10;
                        board.beginPath();
                        board.moveTo(175, 225);
                        board.lineTo(5, 225);
                        board.moveTo(40, 225);
                        board.lineTo(25, 5);
                        board.lineTo(100, 5);
                        board.lineTo(100, 25);
                        board.stroke();
                    case 2:
                        board.lineWidth = 5;
                        board.beginPath();
                        board.arc(100, 50, 25, 0, Math.PI * 2, true);
                        board.closePath();
                        board.stroke();
                        break;

                    case 3:
                        board.beginPath();
                        board.moveTo(100, 75);
                        board.lineTo(100, 140);
                        board.stroke();
                        break;

                    case 4:
                        board.beginPath();
                        board.moveTo(100, 85);
                        board.lineTo(60, 100);
                        board.stroke();
                        break;

                    case 5:
                        board.beginPath();
                        board.moveTo(100, 85);
                        board.lineTo(140, 100);
                        board.stroke();
                        break;

                    case 6:
                        board.beginPath();
                        board.moveTo(100, 140);
                        board.lineTo(80, 190);
                        board.stroke();
                        break;

                    case 7:
                        board.beginPath();
                        board.moveTo(82, 190);
                        board.lineTo(70, 185);
                        board.stroke();
                        break;

                    case 8:
                        board.beginPath();
                        board.moveTo(100, 140);
                        board.lineTo(125, 190);
                        board.stroke();
                        break;

                    case 9:
                        board.beginPath();
                        board.moveTo(122, 190);
                        board.lineTo(135, 185);
                        board.stroke();
                        break;
                    default:
                        break;
                }
            }
        }
    }, { signal: controller.signal }
    );
};

const gameOver = () => {
    alert('Juego finalizado');
}

const validator = (input) => {
    //Solo aceptar mayusculas y minusculas. Los espacios y demas caracteres lo validamos con el key.length y los numeros con isNaN
    let regex = /[a-zA-Z]/;
    if (regex.test(input)) {
        return true;
    } else {
        return false;
    }
}

const newWord = () => {
    gameMenu.classList.add('hidden');
    gameWord.classList.remove('hidden');
    btnSave.addEventListener('click', () => {
        words.push(inputNewWord.value);
        gameWord.classList.add('hidden');
        randomWord();
    });
    btnCancel.addEventListener('click', () => {
        gameMenu.classList.remove('hidden');
        gameWord.classList.add('hidden');
    })
};

// Al apretar el boton desistir, que detenga el funcionamiento