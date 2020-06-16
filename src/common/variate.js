// 变量
// var 全局变量
var a = "abc"
{
    var a = 123
}
console.log(a) // 123

// let 定义局部变量
var a = "abc"
{
    console.log(a) // 报错
    let a = 123
    console.log(a) // 123
}
console.log(a) // abc

// 用var声明变量
for (var i = 0; i <10; i++) {
    console.log('循环体中' + i); // 每循环一次，就会在{}所在的块级作用域中，重新定义一个新的i
}
console.log('循环体外' + i);

// 用let声明变量
for (let i = 0; i <10; i++) {
    console.log('循环体中' + i); // 每循环一次，就会在{}所在的块级作用域中，重新定义一个新的i
}
console.log('循环体外' + i);
