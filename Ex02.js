let numbers = [1, 3, 5, 7, 9];
let num = +prompt("Nhập số bất kỳ:");
let flag = 0;
for (let value of numbers){
    if (num === value){
        flag = 1;
        break;
    }
}
if (flag === 1){
    console.log("Bingo");
}else {
    console.log("Chúc bạn may mắn lần sau");
}