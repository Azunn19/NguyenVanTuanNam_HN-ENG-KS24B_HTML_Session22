let num1 = +prompt("Nhập dãy số bất kỳ:");
if (isNaN(num1)){
    console.log("Đây không phải là dãy số");
} else {
    let arr = [];
    while (num1 > 0){
        arr.unshift(num1 % 10);
        num1 = Math.floor(num1 / 10);
    }
    arr.reverse();
    let num2 = arr[0];
    for (let i = 1; i < arr.length; i++){
        num2 *= 10;
        num2 += arr[i];
    }
    console.log(num2);
}
