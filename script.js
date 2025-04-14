export function getPercents(percent, number) {
    if (percent < 0)
        return "Ошибка. Процен от числа не может быть отрицательным числом.";

    if (percent > 100)
        return "Ошибка. Процент от числа не может быть больше ста."; 

    if (number < 0)
        return "Ошибка. Число не может быть отрицательным.";
    return number / 100 * percent;
}

