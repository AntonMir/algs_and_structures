/**
 * Сортировка выбором
 * Есть массив неупорядоченных элементов
 * 1) находим минимальный
 * 2) меняем местами с 1 эл-том
 * 3) находим минимальный
 * 4) меняем со 2-м элементом
 * 
 * O(0.5(n**2) или же O(n**2) или же O(n*n)
 */

const arr = [6, 43, 3, 1, 72, 8, 41, 3, 4, 4, 3, 9, -2, 14, -15, 6, 2, 2, 4, 6]
let count = 0

function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let indexMin = i
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[indexMin]) {
                indexMin = j
            }
            count++
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log('sotArr', selectionSort(arr))
console.log('count', count)