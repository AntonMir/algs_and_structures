/**
 * Линейный поиск
 * - О(n) - поиск на совпадение по каждому элемнту
    - самый нагруженный т.к. нам, в худшем случае, надой пройтись по всему массиву, чтобы найти нужный элемент
 */
const arr = [1, 3, 4, 5, 7, 2, 12, 14, 6, 29, 22]
let count = 0

function binarySearch(array, item) {
    for(let i = 0; i < array.length; i++) {
        count++
        if(array[i] === item) {
            return i  
        } 
    }
    return null
}

console.log('positiom', binarySearch(arr, 10))
console.log('count', count)
