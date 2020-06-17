// 解构赋值
// 数组的解构赋值
let a = 0;
let b = 1;
let c = 2;

let [aa,bb,cc] = [1,2,3]
console.log(aa)
console.log(bb)
console.log(cc)

// 解构的默认值
let [teacher1,teacher2,teacher3="隔壁小王"] = ["老王", "老陈"]
console.log(teacher1)
console.log(teacher2)
console.log(teacher3)


{
    // 一个变量时
    let [foo = true] = [];
    console.log(foo); // true
}

{
    // 两个变量时
    let [a, b] = ['生命壹号'] // a赋值为：生命壹号，b没有赋值
    console.log(a + ',' + b); // 生命壹号,undefined
}

{
    // 两个变量时
    let [a, b = 'smyhvae'] = ['生命壹号'] // a赋值为：生命壹号，b采用默认值：smyhvae
    console.log(a + ',' + b); // 生命壹号,smyhvae
}

// let [tea1,tea2,tea3="隔壁小王"] = ["老王", "老陈", undefined]
let [tea1,tea2,tea3="隔壁小王"] = ["老王", "老陈", null]
console.log(tea1)
console.log(tea2)
console.log(tea3)


{
    let [a, b= 'smyhvae'] = ['生命壹号', undefined] // b虽然被赋值为undefined，但是b会采用默认值
    console.log(a + ',' + b); // 生命壹号,smyhvae
}

{
    // 两个变量时
    let [a, b = 'smyhvae'] = ['生命壹号', null] //b被赋值为null
    console.log(a + ',' + b); // 生命壹号,null
}


// 对象的解构赋值
var user = {
    name: "蔡徐坤",
    type: "NBA形象大使",
    like: "篮球"
}
// var name = user.name;
// var type = user.type;
// var like = user.like;

var {name, type, like} = user
console.log(name)
console.log(type)
console.log(like)


let {foo, bar} = {bar: "我是bar的值", foo: "我是foo的值"};
console.log(foo + ',' + bar) // 我是foo的值,我是bar的值

// let foo = 'haha';
// { foo } = { foo: 'smyhave' };
//  console.log(foo); //报错

// 圆括号
let foo2 = 'haha';
({ foo2 } = { foo2: 'smyhave' });
 console.log(foo2); // smyhave

// 字符串解构
var str = "helloworld";
var [a1,b1,c1,d1,e1,f1] = str
console.log(a1)
console.log(b1)

const [h1,h2,h3,h4] = 'smyhvae';
console.log(h1)
console.log(h2)
console.log(h3)
console.log(h4)
console.log(typeof h1); // string

// for ... of循环
let arr1 = [1, 2, 3, 4, 5];
for (let value of arr1) {
    console.log(value)
}

var stars = ["范冰冰", "范丞丞", "TFBOYS", "鹿晗", "吴亦凡"]

// for
for(var i = 0; i < stars.length; i++){
    console.log(i)
    console.log(stars[i])
}

// for...in
for (let i in stars) {
    console.log(i)
    console.log(stars[i])
}

// for...of
for (let i of stars) {
    console.log(i)
}
// map
let aMap = new Map()
aMap.set("username", "admin")
aMap.set("password", "123456")
console.log(aMap)

// 通过对数组的解构，可以快速获取MAP对象的key和value值
for (let [key, value] of aMap) {
    console.log(key)
    console.log(value)
}


// 模板字符串
var name2 = 'smyhvae';
var age2 = "26";
console.log("name: " + name2, "age：" + age2);  // 传统写法
console.log(`name: ${name2}, age: ${age2}`) ; // ES6 写法

var price = 10;
var clothesNum = 20;
console.log(`总价是：${price * clothesNum}美元`)

function abc() {
    return "今天天气真好"
}
console.log(`今天下午的感想是：${abc()}`)
