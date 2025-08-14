const sumar = require('./sumar');

test('debe sumar 2 + 3 y obtener 5', () => {
    expect(sumar(2, 3)).toBe(5);
});