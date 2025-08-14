/// green ////

// function esPar(n){
//     // resultado = false;

//     // if (n%2==0){
//     //     resultado = true
//     // }

//     // return resultado
//     return n % 2 ==0;
// }

// const esPar = (n) => {
//     return n%2==0;
// }

//// refactor ////
const esPar = (n) => {
    if (typeof n !== 'number'){
        throw new Error('El parametro debe ser un numero')
    }
    return n%2==0;
}

module.exports = esPar;