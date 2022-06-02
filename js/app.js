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
    btnNewGame2.addEventListener('click', () => {
        cleanHTML();
        randomWord();
    });
})

const cleanHTML = () => {
    palabraMostrar = [];
    letterDiv.textContent = '';
    lettersWrong = [];
    wrongLetter.textContent = '';
    board.clearRect(0, 0, 200, 300);
    mistakes = 0;
    test = false
};

const randomWord = () => {
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word)
    gameMenu.classList.add('hidden');
    startGame.classList.remove('hidden');
    showUnderline(word);
    checkLetter(word);
    test = true;
};

const showUnderline = (word) => {
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

let test = true;
let letrasIngresadasRepetidas = [];

const checkLetter = () => {
    document.addEventListener('keydown', (e) => {
        const keyPressed = e.key;
        // console.log(e)
        if (test) {
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
            if (!word.includes(keyPressed) && keyPressed.length <= 1 && keyPressed != ' ' && isNaN(keyPressed)) {
                // console.log(keyPresed)

                lettersWrong.push(keyPressed)
                wrongLetter.textContent = lettersWrong.join('');

                // Quitar intentos
                mistakes++;

                // testLetrasIngresadas.push(keyPressed);



                // dibujar ahorcado
                drawLines(mistakes);
            }
            // Como salir de la funcion si se aprienta btnNewGame2

        } else {
            return;
        }

    });
}

const completado = (mistakes) => {

};

const validator = (input) => {
    //Solo aceptar mayusculas y minusculas. No acepta ningún otro carácter. El espacios y demas caracteres lo validamos con el key.length y los numeros con isNaN
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
        gameMenu.classList.remove('hidden');
        gameWord.classList.add('hidden');
        // randomWord();
    });
};


// PORQUES SE EJECUTA 2 VECES LA FUNCION CUANDO TERMINA (NO LA HICE TERMINAR??)

// Las letras equivocadas deben aparecer en la pantalla, pero no pueden aparecer de forma repetida; FOR LOOP con variable?? LISTO

// que termine y que muestre un mensaje de ganador