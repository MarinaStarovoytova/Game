function numberOrString(numbers) {
    let zero_nine = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    let eleven_nineteen = ['', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let ten_ninety = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    let oneHundred_nineHundred = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    let str = '';
    let str_1 = '';
    let str_2 = '';
    let str_3 = '';
    let numberOnlyPositive;

   

    if (numbers < 0) {
        str = 'минус';
        numberOnlyPositive = Math.abs(numbers);
    } else {
        numberOnlyPositive = numbers;
    }

    str_1 = oneHundred_nineHundred[Math.floor(numberOnlyPositive % 1000 / 100)];

    let num_2 = numberOnlyPositive % 100;

    if (num_2 >= 11 && num_2 <= 19) {
        str_2 = eleven_nineteen[numberOnlyPositive % 10];
    } else {
        str_2 = ten_ninety[Math.floor(numberOnlyPositive % 100 / 10)];
        str_3 = zero_nine[numberOnlyPositive % 10];
    }

    str = str + ' ' + str_1 + ' ' + str_2 + ' ' + str_3;

    str = (str.length < 20) ? str : numbers;

    if (numbers == 0) {
        str = 0;
    } 
    return str;
}