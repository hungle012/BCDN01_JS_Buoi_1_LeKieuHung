console.log("BÀI 5: TÍNH TỔNG 2 KÝ SỐ");

/**
 * Khối 1: Input
 * Số có 2 chữ số
 * num
 * Khối 2:
 * B1: Tạo và gán giá trị số hàng đơn vị, số hàng chục
 * num, unit, ten
 * B2: tạo và gán giá trị cho tổng
 * sum
 * B3: lấy số hàng đơn vị
 * unit = num % 10
 * B4: lấy số hàng chục
 * ten = Math.floor(num/10)
 * B5: Tính tổng
 * sum = unit + ten
 * Khối 3:
 * Tổng của 2 ký số trong số nguyên dương 
 * sum
 */

// tạo và gán giá trị
var num = 93;
var unit = 0;
var ten = 0;
var sum = 0;

console.log("  số có 2 chữ số: " + num);

// lấy các số
ten = Math.floor(num/10);
unit = num % 10;

console.log("  số hàng chục: " + ten);
console.log("  số hàng đơn vị: " + unit);

// tính tổng
sum = ten + unit;
console.log("  tổng 2 ký số: " + sum);