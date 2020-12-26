describe('1-module-1-task', () => {
    it('5! = 5 * 4 * 3 * 2 * 1 = 120', () => {
        expect(factorial(5)).toEqual(120);
    });

    it('0! = 1', () => {
        expect(factorial(0)).toEqual(1);
    });

    it('1! = 1', () => {
        expect(factorial(1)).toEqual(1);
    });
});
