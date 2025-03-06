let choice;
let arr = [];
console.log("MENU");
console.log("1.Nhập vào mảng");
console.log("2.Hiển thị mảng");
console.log("3.Thêm phần tử");
console.log("4.Sửa phần tử");
console.log("5.Xóa phần tử");
console.log("6.Thoát");
do {
    choice = +prompt("Nhập lựa chọn của bạn");
    switch (choice){
        case 1:{
            let n = +prompt("Nhập số phần tử của mảng");
            for (let i = 0; i < n; i++){
                let x = +prompt("Nhập phần tử thứ " + (i + 1));
                arr.push(x);
            }
            break;
        }
        case 2:{
            console.log(arr);
            break;
        }
        case 3:{
            let index = +prompt("Nhập vị trí cần thêm");
            let value = +prompt("Nhập giá trị cần thêm");
            arr.splice(index - 1, 0, value);
            break;
        }
        case 4: {
            let index = +prompt("Nhập vị trí cần sửa");
            let value = +prompt("Nhập giá trị mới");
            arr[index - 1] = value;
            break;
        }
        case 5: {
            let index = +prompt("Nhập vị trí cần xóa");
            arr.splice(index - 1, 1);
            break; 
        }
        case 6: {
            break;
        }
        default: {
            console.log("Lựa chọn không hợp lệ");
        }
    }
}while (choice !== 6);