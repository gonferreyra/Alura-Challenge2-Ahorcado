// Variables
const btnNewGame = document.querySelector('.btnNewGame');
const btnNewWord = document.querySelector('.btnNewWord');
const btnSave = document.querySelector('.btnSave');
const btnCancel = document.querySelector('.btnCancel');
const inputNewWord = document.querySelector('.inputNewWord');

const gameWord = document.querySelector('.game-words');
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

function cargarEventListeners() {
    btnNewGame.addEventListener('click', randomWord);
    // btnNewGame.addEventListener('DOMContentLoaded', () =>{});
  };

function randomWord() {
    word = words[Math.floor(Math.random() * words.length)];
    // word = word.split('');
    console.log(word)
    gameMenu.classList.add('hidden');
    gameWord.classList.remove('hidden');
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
        const keyPresed = e.key;
        // HACER VALIDADOR DE CARACTERES
        
        // console.log(keyPresed)
        for (let i = 0; i < word.length; i++) {
            if(keyPresed === word[i]) {
                console.log(word[i])
                palabraMostrar[i] = keyPresed.toUpperCase();
                letterDiv.textContent = palabraMostrar.join(''); 
            }
        }
        // Mostrar la letra equivocada
        if(!word.includes(keyPresed)) {
            // console.log(keyPresed)
            lettersWrong.push(keyPresed)
            wrongLetter.textContent = lettersWrong;

            // Quitar intentos
            mistakes++
            // dibujar ahorcado
            drawLines(mistakes);
        }
    }) 
};


// aca cuando se equivoca la letra, ir dibujando el ahorcado (funcion)


// canvas, hacer una funcion con un switch que tome a los intentos como condicion y vaya dibujando



 // Falta: bloquear juego cuando se llegan a tantos intentos
 // validador para que no deje ingresat caracteres no permitidos
