/**
 * Рекурсия
 * повторяем для понимания быстрой сортировки Хаора
 * Пример: найдем факториал числа
 * факториал: перемножение всех чисел до указанного
 */

function factorial(num) {
    
    if(num === 1) {
        return 1
    }
    return num * factorial(num - 1) // если поставим "5", получится: 5 * 4 * 3 * 2 * 1
}

console.log(factorial(5)) // 120



/**
 * Пример: вычесление чисел фибоначчи
 * числа фибоначчи - последовательность чисел, где каждое новое число = сумме 2-х предидущих
 * последовательность: 0,1,1,2,3,5,8,13,21,34
 */

function fibonacci(n) {
    if(n === 1 || n === 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci( n - 2 ) 
} 

// fibonacci(6) - return fibonacci(5) (5) + fibonacci(4) (3) = 8
    // fibonacci(5) - return fibonacci(4) (3) + fibonacci(3) (2) = 5
        // fibonacci(4) - return fibonacci(3) (2) + fibonacci(2) (1) = 3
            // ibonacci(3) - return fibonacci(2) (1) + fibonacci(1) (1) = 2
                // fibonacci(2) = 1
                    // fibonacci(1) = 1

console.log(fibonacci(6)) // 8 - число фибоначчи, которое располагается на 6 месте в последовательности фибоначчи