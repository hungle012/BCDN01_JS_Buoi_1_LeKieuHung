console.log("BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN");

/**
 * Khối 1:Input
 * tiền lương 1 ngày
 * dSalary
 * Khối 2:
 * B1: Tạo và gán giá trị cho tiền lương
 * dSalary
 * B2: Tạo biến chứa số ngày làm, lương 
 * date,salary
 * B3: Tính tiền lương
 * salary = dSalary * date
 * Khối 3: Output
 * salary : tiền lương nhân viên
 */

// tạo và gán giá trị
var dSalary = 100000;
var date = 26;
var salary = 0;

console.log("  tiền lương 1 ngày: " + dSalary);
console.log("  số ngày làm: " + date);

// tính tiền lương
salary = dSalary * date;
console.log("  tiền lương là: " + salary);
