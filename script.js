const keysContainer = document.querySelector('.keys-container');
const questionContainer = document.querySelector('.question');


const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

const languagesArr = ['Python', 'Java', 'Ruby', 'JavaScript', 'Perl', 'Swift', 'Delphi', 'SQL', 'PHP'];

let mistakeCounter = 0;

alphabet.forEach(el => {
    keysContainer.insertAdjacentHTML("beforeend", `<span class ='letter'> ${el}</span>`);
});

let randomNumber = Math.floor(Math.random() * 9);

questionContainer.insertAdjacentHTML("beforeend", `<p class="question__answer">${languagesArr[randomNumber]}</p>`)