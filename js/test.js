const checkletter = () => {
    document.addEventListener('keydown', (e), myFunction());
}

const myFunction = (e) => {
    let keyPressed = e.key;
    if(mistakes >= 2) {
        console.log(mistakes);
        alert('you lost');
        document.removeEventListener('keyup', myFunction, false)
        return;
    } else {
        if (validator(keyPressed) && keyPressed.length <= 1 && keyPressed != '') {
            for (let i = 0; i < word.length; i++) {
                if (keyPressed === word[i]) {
                    console.log(word[i])
                    palabraMostrar[i] = keyPressed.toUpperCase();
                    letterDiv.textContent = palabraMostrar.join('');
                }
            }
        }
        // Mostrar la letra equivocada
        if (!word.includes(keyPressed) && keyPressed.length <= 1 && keyPressed != ' ' && isNaN(keyPressed)) {
            // console.log(keyPresed)
            // AGREGAR CUANDO INGRESA UNA LETRA REPETIDA QUE NO LA TOME COMO NUEVA LETRA
            if (lettersWrong.includes(keyPressed)) {
                alert('Key has already been checked. try another letter');
                return;
            }

            lettersWrong.push(keyPressed)
            wrongLetter.textContent = lettersWrong.join('');

            // Quitar intentos
            mistakes++;

            // dibujar ahorcado
            drawLines(mistakes);
        }
    }
}