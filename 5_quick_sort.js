/**
 * Быстрая сортировка
 * Сортировка Хоара
 * O(log<по основанию 2>n*n)
 *  - является рекурсивным методом
 *  - один из самых быстрых методов
 */

const arr = [6, 43, 3, 1, 72, 8, 41, 3, 4, 4, 3, 9, -2, 14, -15, 6, 2, 2, 4, 6]
let count = 0;

function quickSort(array) {
    if(array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count++
        // console.log(count)
        if(i === pivotIndex) {
            continue
        }
        if(array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }        
    }

    return [...quickSort(less), pivot, ...quickSort(greater)]
}


console.log(quickSort(arr))
console.log('count', count)


