//////// green //////////
// function sumar(a, b) {
//     return a+b;
// }

// const sumar = (a, b) => {
//     return a+b;
// }

/// refactor /////
const sumar = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number')
        throw new Error('Los parametros deben ser numeros')
    return a+b;
}


module.exports = sumar;