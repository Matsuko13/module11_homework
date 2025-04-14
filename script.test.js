import { getPercents } from "./script.js";

describe('Тестирование на ошибки.', ()=> {
    it("10% ot 100 = 10", () => {
        expect(getPercents(10, 100)).toBe(10)
    }),
    it("60% ot 55 = 33", () => {
        expect(getPercents(60, 55)).toBe(33)
    }),
    it("15% ot 80 = 12", () => {
        expect(getPercents(15, 80)).toBe(12)
    }),
    it("0% ot 100 = 0", () => {
        expect(getPercents(0, 100)).toBe(0)
    }),
    it("-20% ot 100 = error", () => {
        expect(getPercents(-20, 100)).toBe("Ошибка. Процен от числа не может быть отрицательным числом.")
    }),
    it("200% ot 100 = error", () => {
        expect(getPercents(200, 100)).toBe("Ошибка. Процент от числа не может быть больше ста.")
    }),
    it("10% ot -100 = error", () => {
        expect(getPercents(10, -100)).toBe("Ошибка. Число не может быть отрицательным.")
    })
});
