// JavaScript source code
'use strict'
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

numbers.reverse().forEach(function (num, numIndex) {
    const row = document.createElement('div');
    row.classList.add('row');
    document.body.appendChild(row);
    const title = document.createElement('div');
    title.innerText = num;
    row.appendChild(title);

    chars.forEach(function (char, charIndex) {
        const cell = document.createElement('div');
        const isWhite = (numIndex + charIndex) % 2 === 0;

        cell.classList.add(isWhite ? 'white': 'black');
        row.appendChild(cell);

    })
})
const row = document.createElement('div');
row.classList.add('row', 'charRow');
chars.forEach(function (char, charIndex) {
    const charCell = document.createElement('div');
    charCell.classList.add('charCell');
    charCell.innerText = char;
    
    row.appendChild(charCell);
})
document.body.appendChild(row);

