console.log("BÀI 4: TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT");

/**
 * Khối 1:Input
 * 2 cạnh HCN
 * length, width
 * Khối 2:
 * B1: Tạo và gán giá trị cho chiều dài và chiều rộng
 * length, width
 * B2: Tạo và gán giá trị cho chu vi và diện tích
 * perimeter, area
 * B3: tính chu vi
 * perimeter = (length + width)*2
 * B4: tính diện tích
 * area = length * width
 * Khối 3:
 * perimeter : chu vi HCN
 * area : diện tích HCN
 */

// tạo và gán giá trị
var length = 6;
var width = 4;
var perimeter = 0;
var area = 0;

console.log("  chiều dài : " + length);
console.log("  chiều rộng : " + width);

// tính chu vi, diện tích
perimeter = (length + width)*2;
area = length * width;

console.log("  chu vi HCN : " + perimeter);
console.log("  diện tích HCN : " + area);