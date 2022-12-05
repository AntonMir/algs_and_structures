
let arr = [ 1, 5, 10 ,224, 100]

const time1 = performance.now()
console.log('sort()', arr.sort((a, b) => a - b)) // вывод в консоль
console.log(performance.now() - time1)


const time2 = performance.now()
console.log('сортировка Хоара', quickSort(arr)) // вывод в консоль
console.log(performance.now() - time2)


function quickSort(array) {
    if(array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
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