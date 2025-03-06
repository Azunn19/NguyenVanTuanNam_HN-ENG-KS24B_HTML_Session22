let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
for (let i = 0; i < numbers.length; i++){
    for (let j = i + 1; j < numbers.length; j++){
        if (numbers[i] > numbers[j]){
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log(numbers);