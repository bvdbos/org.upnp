'use strict';


const data = [[parseInt('0101', 2), parseInt('1001', 2)], [parseInt('0010', 2), parseInt('1101', 2)]];

for (let i = 0; i < 16; i++) {
	console.log((data[0][0] ^ i ^ data[0][1]).toString(2), (data[1][0] ^ i ^ data[1][1]).toString(2));
}


//
// let allData = 0;
// // 10001000101100001101
// let allDataIn = parseInt('1011 1000 1000 0000 1101 0000'.replace(/\s/g, ''), 2);
//
// let mask = (1 << 11);
// for (let i = 0; i < 12; ++i) {
// 	allData >>= 1;
// 	console.log(allDataIn.toString(2));
// 	console.log(mask.toString(2));
// 	console.log(allDataIn & mask);
// 	if ((allDataIn & mask) === 0) {
// 		allData |= (1 << 11);
// 	}
// 	mask >>= 1;
// }
//
// console.log('data', allData.toString(2));
//
// let code = allData & 0xFFC;
// code >>= 2;
//
// console.log('    ', (0xFFC).toString(2));
// console.log('code', code.toString(2), code);
//
// let method1 = allData & 0x2;
// method1 >>= 1;
//
// let method2 = allData & 0x1;
//
// let method;
// if (method1 === 0 && method2 === 1) {
// 	method = 0;  // off
// } else if (method1 === 1 && method2 === 0) {
// 	method = 1;  // on
// } else {
// 	throw new Error('invalid method');
// }
//
// console.log('method', method === 0 ? 'off' : 'on');