let minValue = 0;
let maxValue = 0;
let alerts = document.querySelector('#alerts');
let orderNumberField = document.querySelector('#orderNumberField');
let answerField = document.querySelector('#answerField');
let btnStart = document.querySelector('#btnStart');
let btnPrimary = document.querySelector('#btnPrimary');
let btnPrimary_1 = document.querySelector('#btnPrimary_1');
let exampleModalToggle = document.querySelector('#exampleModalToggle');
let exampleModalToggle2 = document.querySelector('#exampleModalToggle2');
let container = document.querySelector('.container');
let answerNumber;
let orderNumber;
let gameRun;

btnPrimary.addEventListener('click', () => {
    minValue = parseInt(document.querySelector('#minValue').value) || 0;
    maxValue = parseInt(document.querySelector('#maxValue').value) || 100;

    minValue = (minValue > 999) ? 999 : minValue;
    minValue = (minValue < -999) ? -999 : minValue;
    maxValue = (maxValue > 999) ? 999 : maxValue;
    maxValue = (maxValue < -999) ? -999 : maxValue;

    alerts.textContent = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
})

btnPrimary_1.addEventListener('click', () => {
    container.style.display = 'block';
    answerNumber = Math.floor((minValue + maxValue) / 2);
    questionRandom();
    orderNumber = 1;
    orderNumberField.textContent = orderNumber;
    gameRun = true;
})

exampleModalToggle.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        btnPrimary.click();
    }
})

exampleModalToggle2.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        btnPrimary_1.click();
    }
})

// Заново
let btnRetry = document.querySelector('#btnRetry');
btnRetry.addEventListener('click', function () {
    answerNumber = Math.floor((minValue + maxValue) / 2);
    questionRandom();
    orderNumber = 1;
    orderNumberField.textContent = orderNumber;
    gameRun = true;
})

function questionRandom() { 
    const questionRandom = Math.round(Math.random() * 2); // вопросы в трех вариантах
    if (questionRandom == 0) {
        answerField.textContent = `Вы загадали число ${numberOrString(answerNumber)}?`;
    } else if (questionRandom == 1) {
        answerField.textContent = `Да! Это легко! Вы загадали число ${numberOrString(answerNumber)}?`;
    } else {
        answerField.textContent = `Наверное, это число ${numberOrString(answerNumber)}?`;
    }
}

// Код кнопки "Больше"
document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!` :
                `Я сдаюсь...`;
            answerField.textContent = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2); // округление среднего числа
            orderNumber++;
            orderNumberField.textContent = orderNumber;

            questionRandom();
        }
   }
})

// Код кнопки "Меньше"
document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
            `Вы загадали неправильное число!` :
            `Я сдаюсь...`;
            answerField.textContent = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.round((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.textContent = orderNumber;

            questionRandom();

        }
    }
})

// Верно
document.querySelector('#btnEqual').addEventListener('click', function () {
    const questionRandom = Math.round(Math.random() * 2); // сообщение об успехе в трех вариантах
    if (gameRun) {
        if (questionRandom == 0) {
            answerField.textContent = `Я всегда угадываю!`;
        } else if (questionRandom == 1) {
            answerField.textContent = `Я молодец! Я угадал!`;
        } else {
            answerField.textContent = `Это было просто!`;
        }
    }
    gameRun = false;
})



