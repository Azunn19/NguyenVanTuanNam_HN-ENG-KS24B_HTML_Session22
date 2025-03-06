let arr = [];
let flag = 0;
for (let i = 0; i < 5; i++){
    let n = +prompt("Nhập số thứ " + (i + 1));
    arr.push(n);
}
for (let i = 0; i < arr.length; i++){
    if (isNaN(arr[i])){
        flag++;
    }
}
if (flag === 0) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            even += arr[i];
        } else {
            odd += arr[i];
        }
    }
    console.log("Tổng số chẵn: " + even);
    console.log("Tổng số lẻ: " + odd);
}else {
    console.log("Tất cả các phần tử của mảng phải là số");
}