const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@",
    "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[",
    "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let count = 0;

document.getElementById('generate-passwords')
    .addEventListener('click', (e) => {
        let randomCharacters = 0;
        count++;

        if (count > 1) {
            document.querySelector('.first-password').textContent = '';
            document.querySelector('.second-password').textContent = '';
        }
        for (let i = 0; i < 15; i++) {
            randomCharacters = (Math.floor(Math.random() * characters.length));
            document.querySelector('.first-password').textContent += characters[randomCharacters];
        }

        for (let i = 0; i < 15; i++) {
            randomCharacters = (Math.floor(Math.random() * characters.length));
            document.querySelector('.second-password').textContent += characters[randomCharacters];
        }
    });