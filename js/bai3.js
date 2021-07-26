console.log("BÀI 3: QUY ĐỔI TIỀN");

/**
 * Khối 1:Input
 * tỉ giá USD so với VND
 * exRate
 * Số tiền USD 
 * USD
 * Khối 2:
 * B1: Tạo và gán giá trị cho tỉ giá
 * exRate 
 * B2: Tạo biến chứa giá trị VND
 * VND
 * B3: Quy đổi số tiền USD -> VND
 * Khối 3: Output
 * VND = exRate * USD
 */

// tạo và gán giá trị
var exRate = 23500;
var USD = 3;
var VND = 0;
console.log("  số tiền: " + USD + " USD");

// quy đổi
VND = exRate * USD;
console.log("  quy đổi: " + USD + " USD = " + VND + "VND");