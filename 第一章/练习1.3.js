/*
题目描述：
定义一个过程，它以三个数为参数，返回其中较大的两个数的和
*/

function max(num1,num2,num3) {
	var sum = 0;
	if(num1<num2&&num1<num3) {
		sum = num2 + num3;
	}else if(num2<num1&&num2<num3) {
		sum = num1 + num3;
	}else {
		sum = num2 + num1;
	}
	return sum;
}


//测试
console.log(max(1,2,3));
console.log(max(1,3,2));
console.log(max(2,3,1));
console.log(max(2,1,3));
console.log(max(3,1,2));
console.log(max(3,2,1));
