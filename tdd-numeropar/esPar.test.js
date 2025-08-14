const esPar = require('./esPar');

test('Debe retornar true si el numero es par', ()=>{
    expect(esPar(4)).toBe(true);
})

test('Debe retornar false si el numero es impar', ()=>{
    expect(esPar(3)).toBe(false);
})

test('retirna true para 2', ()=>{
    expect(esPar(2)).toBe(true)

})

test('p1', ()=>{
    expect(esPar(7)).toBe(false)

})

