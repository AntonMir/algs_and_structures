/**
 * Пузырьковая сортировка
 *  - один из самых известных алгоритмов сортировки
 *  - один из самых неэффективных алгоритмов
 *  - 2 цикла. каждый раз сравниваем 2 числа рядом. тем самым самое большое число постепенно всплывает наверх
 *  O(n*n) без 0.5
 *  - сложность = сложности сортировки выбора, при меньшей эффективности
 */


const arr = [6, 43, 3, 1, 72, 8, 41, 3, 4, 4, 3, 9, -2, 14, -15, 6, 2, 2, 4, 6]
let count = 0


function bubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]) {
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            count++
        }
    }
    return array
}

console.log('bubbleSort', bubbleSort(arr))
console.log('count', count)

let count2 = 0

function recursiveBubbleSort(array, index = 0) {
    if(index <= array.length - 1) {
        for (let i = 0; i < array.length; i++) {
            if(array[i] > array[index + 1]) array[i], array[index + 1] = array[index + 1], array[i]
        }
        return recursiveBubbleSort(array, index + 1)
    } else {
        return array
    }
}



console.log('recursiveBubbleSort', recursiveBubbleSort(arr))
console.log('count2', count2)


