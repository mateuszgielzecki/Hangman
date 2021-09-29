const keysContainer = document.querySelector('.keys-container');
const questionContainer = document.querySelector('.question');
const questionAnswer = document.querySelector('.question__answer');
const questionBgc = document.querySelector('.question__bgc');
const mistakes = document.getElementById('mistakes');
const resetBtn = document.querySelector('.keys__btn');
const result = document.querySelector('.result');
const resultWin = document.querySelector('.result-win');
const resultLose = document.querySelector('.result-lost')

let mistakeCounter = 0;
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
const languagesArr = ['Python', 'Java', 'Ruby', 'JavaScript', 'Perl', 'Swift', 'Delphi', 'SQL', 'PHP'];
const randomPuzzleArr = [...(languagesArr[Math.floor(Math.random() * 2)]).toLowerCase()];
const randomPuzzleDashedArr = [];

// Wstawianie liter alfabetu na stronę
alphabet.forEach(el => {
    keysContainer.insertAdjacentHTML("beforeend", `<a href="#" class='letter'>${el}</a>`);
});
const letters = document.querySelectorAll('.letter');

// Wypełnianie nowej, pustej tablicy "_" zamiast liter z oryginalnego, wylosowanego słowa
for (let i = 0; i < randomPuzzleArr.length; i++) {
    randomPuzzleDashedArr.push('_')
}

// Weryfikacja wygranej lub przegranej
const checkResult = function () {
    if (mistakeCounter > 5) {
        resultLose.style.visibility = 'visible';
        letters.forEach(el => el.classList.add('disabled'));

        // Wstawianie prawidłowego słowa, jeśli przegrana
        const word = randomPuzzleArr.join(' ');
        questionAnswer.textContent = word;

    } else if (!randomPuzzleDashedArr.includes('_')) {
        resultWin.style.visibility = 'visible';
        letters.forEach(el => el.classList.add('disabled'))
    }
}

// Aktualizacja zgadywanego słowa
const updatePuzzle = function () {
    const word = randomPuzzleDashedArr.join(' ');
    questionAnswer.textContent = word;

    checkResult()
}

// Aktualizacja licznika błędów
const updateMistakes = function () {
    mistakeCounter++;
    mistakes.textContent = mistakeCounter;
    questionBgc.style.backgroundImage = `url(img/${mistakeCounter}.jpg)`;

    checkResult()
}

// Weryfikacja czy wybrano prawidłową literę i czy znajduje się w wylosowanym słowie
const checkLetter = function (e) {
    e.target.classList.add('disabled');
    const letter = (e.target).textContent;

    let flag = false;

    // Weryfikacja czy wybrana litera znajduje się w tablicy z wylosowanym słowem
    randomPuzzleArr.forEach((el, index) => {
        if (el === letter) {
            flag = true
            randomPuzzleDashedArr[index] = letter;
            updatePuzzle();
        }
    })

    //Weryfikacja czy litera była poprawna jeśli tak zakończ działanie, jeśli nie nalicz błąd 
    if (flag === true) return;
    else updateMistakes();

}

updatePuzzle();

letters.forEach(letter => {
    letter.addEventListener('click', checkLetter)
})

