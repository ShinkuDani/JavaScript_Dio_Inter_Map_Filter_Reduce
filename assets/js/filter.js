/*  function todosPares(arr){
    return arr.filter(function(itens){
        return itens % 2 == 0
    });
}; 

// com Função com flecha
function todosParesF(arr){
    return arr.filter((itens) => itens % 2 == 0);
}

const nums = [1,2,3,4,5,6,7,8,9];

// console.log(todosPares(nums));

console.log(todosParesF(nums)); */

function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

function callbackImpar(item) {
    return item % 2 !== 0;
}

const meuArray = [1,23,55,67,30,2,4];

console.log(filtraPares(meuArray));