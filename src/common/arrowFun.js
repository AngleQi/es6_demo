// 函数的扩展
// 定义和调用函数：传统写法
function fn1(a,b) {
    return a + b
}
console.log(fn1(1,2)) // 3


// 定义和调用函数：（ES6中的写法）

var fn2 = (a,b) => a + b;
console.log(fn2(1,2)) // 3

var fn3 = (a,b) => {
    console.log('haha');
    return a + b
}
console.log(fn3(1,2)) // 3



var add = function (a,b) {
    return a + b
}
var add1 = (a,b) => a+b;
