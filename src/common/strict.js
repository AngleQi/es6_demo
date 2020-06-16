// 'use strict'; // 严格模式
var ab = 10;

function abc() {
    // console.log(this)  //undefined
}
// abc()

function Student() {
    this.name = '小红';
    this.age = 18;
    this.school = '北大青鸟';
}

var s1 = new Student()
var s2 = Student()
console.log(s1) // {name: "小红",age: 18,school: "北大青鸟"}
console.log(s2) // undefined

// var abc = {
//     username: '666',
//     username: '777'
// }
