let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let num = +prompt("Nhập số bất kỳ:");
let flag = 0;
for (let value of numbers){
    if (num === value){
        flag++;
    }
}
if (flag > 0){
    console.log("Số " + num + " xuất hiện " + flag + " lần trong mảng");
}else {
    console.log("Số " + num + " không tồn tại trong mảng");
}