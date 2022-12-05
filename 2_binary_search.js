/**
 * Бинарный поиск 
 * - О(log2n) 
 * - поиск по принципу отбрасывания части, которая не подходит под услование
        - только с отсартированным списком 
        - работает ооочень быстро
        - предварительная сортировка не имеет смысла, т.к. она выполняется дольше линейного поиска
        PS: log2n = корень 2 степени от n
            - если значений в массиве 16, то максимальное кол-во итераций будет 4
 */
const arr = [1, 3, 4, 5, 7, 12, 13, 14, 16, 19, 22, 23, 25, 30, 31, 34]
let count = 0

function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let middle;
    let found = false
    let position = -1

    while(found === false && start <= end) {
        count++
        middle = Math.floor((start + end)/2) // устанавливаем середину, если середина выпала на дробное числа, округляем его в меньшую сторону
        if(array[middle] === item) {
            found = true
            position = middle
            return position
        }
        if(item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }

    return position
}

// console.log('position', binarySearch(arr, 16))
// console.log('count', count)


function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2) // позиция
    count++
    if(item === array[middle]) {
        return middle
    }
    if(item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1)
    } else {
        return recursiveBinarySearch(array, item, middle + 1, array.length)
    }
}


console.log('position', recursiveBinarySearch(arr, 31, 0, arr.length))
console.log('count', count)