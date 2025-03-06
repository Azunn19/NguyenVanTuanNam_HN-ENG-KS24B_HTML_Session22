let num = prompt("Nhập dãy số bất kỳ:");
if (isNaN(num)){
    console.log("Đây không phải là dãy số");
}else {
    let arr = num.split('');
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    console.log(max + " là số lớn nhất trong dãy số");
}
