// Variables
const btnNewGame = document.querySelector('.btnNewGame');
const btnNewGame2 = document.querySelector('.btnNewgame2');
const btnNewWord = document.querySelector('.btnNewWord');
const btnSave = document.querySelector('.btnSave');
const btnCancel = document.querySelector('.btnCancel');
const inputNewWord = document.querySelector('.inputNewWord');
const startGame = document.querySelector('.start-game')

const gameWord = document.querySelector('.add-words');
const letterDiv = document.querySelector('.letterContainer')
const wrongLetter = document.querySelector('.wrongLetter');
const canvasHangman = document.querySelector('#canvasHangman');
const board = canvasHangman.getContext("2d");
const main = document.querySelector('main');


// Section
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


cargarEventListeners();

function cargarEventListeners(e) {
    btnNewGame.addEventListener('click', randomWord);
    btnNewWord.addEventListener('click', newWord);
    btnNewGame2.addEventListener('click', () => {
        cleanHTML();
        randomWord();
    });
};



const cleanHTML = () => {
    palabraMostrar = [];
    letterDiv.textContent = '';
    // console.log('cleaning textcontent');
};

// function newGame() {
//     console.log("juego nuevo")
// };

function randomWord() {
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word)
    gameMenu.classList.add('hidden');
    startGame.classList.remove('hidden');
    showUnderline(word);
    checkLetter(word);
};


function showUnderline(word) {
    // const underline = word.replace(/./g, "_ ");
    // console.log(underline)
    for (let letra of word) {
        palabraMostrar.push('_');
    }
    console.log(palabraMostrar)
    letterDiv.textContent = palabraMostrar.join('');
    // Crear linea del juego
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
};

function checkLetter(letter) {
    document.addEventListener('keydown', (e) => {
        const keyPressed = e.key;
        // const keyPressedValidate = e.keyCode
        // validate(keyPressedValidate);
        console.log(e)
        if (validator(keyPressed) && keyPressed.length <= 1 && keyPressed != '') {
            for (let i = 0; i < word.length; i++) {
                if (keyPressed === word[i]) {
                    console.log(word[i])
                    palabraMostrar[i] = keyPressed.toUpperCase();
                    letterDiv.textContent = palabraMostrar.join('');
                }
            }
        }
        // AGREGAR CUANDO INGRESA UNA LETRA REPETIDA QUE NO LA TOME COMO NUEVA LETRA

        // Mostrar la letra equivocada
        if (!word.includes(keyPressed) && keyPressed.length <= 1 && keyPressed != ' ') {
            // console.log(keyPresed)
            lettersWrong.push(keyPressed)
            wrongLetter.textContent = lettersWrong.join(''); // Ver si puedo lograr que no se vaya hacia arriba el contenido cuando se agrega la letra erronea

            // Quitar intentos
            mistakes++
            // dibujar ahorcado
            drawLines(mistakes);
        }
    });
};

function validator(input) {
    //Solo aceptar mayusculas y minusculas. No acepta ningún otro carácter. El espacios y demas caracteres lo validamos con el key.length
    let regex = /[a-zA-Z]/;
    if (regex.test(input)) {
        return true;
    } else {
        return false;
    }
}

function newWord() {
    gameMenu.classList.add('hidden');
    gameWord.classList.remove('hidden');
}

 // Falta: bloquear juego cuando se llegan a tantos intentos