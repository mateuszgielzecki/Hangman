const keysContainer = document.querySelector('.keys-container');
const questionContainer = document.querySelector('.question');
const questionAnswer = document.querySelector('.question__answer');
const questionBgc = document.querySelector('.question__bgc');
const mistakes = document.getElementById('mistakes');
const resetBtn = document.querySelector('.keys__btn');
const result = document.querySelector('.result');
const resultWin = document.querySelector('.result-win');
const resultLose = document.querySelector('.reult-lost')

let mistakeCounter = 0;

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

alphabet.forEach(el => {
    keysContainer.insertAdjacentHTML("beforeend", `<a href="#" class='letter'>${el}</a>`);
});

// const languagesArr = ['Python', 'Java', 'Ruby', 'JavaScript', 'Perl', 'Swift', 'Delphi', 'SQL', 'PHP'];

const languagesArr = ['PPLLAA', 'KKSSDD'];

const randomPuzzleArr = [...(languagesArr[Math.floor(Math.random() * 2)]).toLowerCase()];
const randomPuzzleDashedArr = [];

for (let i = 0; i < randomPuzzleArr.length; i++) {
    randomPuzzleDashedArr.push('_')
}

const updatePuzzle = function () {
    const word = randomPuzzleDashedArr.join(' ');
    questionAnswer.textContent = word;

    if (!randomPuzzleDashedArr.includes('_')) {
        resultWin.style.visibility = 'visible';
    }
}

const updateMistakes = function () {
    mistakeCounter++;
    mistakes.textContent = mistakeCounter;
    questionBgc.style.backgroundImage = `url(img/${mistakeCounter}.jpg)`;

    if (mistakeCounter > 6) {

    }
}

console.log(randomPuzzleArr);
console.log(randomPuzzleDashedArr);

const letters = document.querySelectorAll('.letter');

const checkLetter = function (e) {
    e.target.classList.add('disabled');
    const letter = (e.target).textContent;

    let flag = false;

    randomPuzzleArr.forEach((el, index) => {
        if (el === letter) {
            flag = true
            randomPuzzleDashedArr[index] = letter;
            updatePuzzle();
        }
    })

    if (flag === true) {
        return;
    } else {
        updateMistakes();
    }
}

letters.forEach(letter => {
    letter.addEventListener('click', checkLetter)
})

updatePuzzle();
