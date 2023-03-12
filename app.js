// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
    if (!numbers || numbers.length <= 2) {
        return;
    }

    numbers.sort((a, b) => a - b);
    if (numbers[0] != numbers[1]) {
        return numbers[0];
    }

    return numbers[numbers.length - 1];
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])) // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])) // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])) // 印出 8