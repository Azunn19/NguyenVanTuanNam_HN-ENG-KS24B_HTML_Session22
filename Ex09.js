let arr = [];
let flag = 0;
for (let i = 0; i < 10; i++){
    let n = +prompt("Nhập số thứ " + (i + 1));
    arr.push(n);
}
for (let i = 0; i < arr.length; i++){
    if (isNaN(arr[i])){
        flag++;
    }
}
if (flag === 0) {
    console.log("Mảng ban đầu: " + arr);
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] === arr[i]){
                arr.splice(j, 1);
                i--;
            }
        }
    }
    for(let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[i]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    console.log(arr);
}else {
    console.log("Tất cả các phần tử của mảng phải là số");
}