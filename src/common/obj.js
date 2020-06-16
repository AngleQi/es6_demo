// 方法一
var obj1 = {username: 'smyhvae', age: 26};
// 不传第二个参数
var obj2 = Object.create(obj1);
console.log(obj1);
console.log(obj2);

// 传入第二个参数，可设置新的对象参数

var aa = {username: 'smyhvae', age: 26};
var bb = {address: 'shenzhen'};
bb = Object.create(aa, {
    sex: { // 给bb添加新的属性‘sex’。注意：这一行的冒号不要漏掉
        value: '男', // 通过value关键字设置sex的属性值
        writable: false,
        configurable: true,
        enumerable: true
    }
})
console.log(bb);

// 继承
var student = {
    school: "sxt",
    learn: function () {
        console.log("学生会学习")
    }
}

var mintor = Object.create(student, {
    type: {
        value: "班长",
        writable: true,
        configurable: true,
        enumerable: true
    },
    age: {
        value: "19",
        writable: true,
        configurable: true,
        enumerable: true
    }
})
console.log(mintor)

// 单独设置属性
Object.defineProperty(mintor, 'type', {
    value: '副班长', // 通过value关键字设置sex的属性值
    writable: true,
    configurable: true,
    enumerable: true
});
console.log(mintor)

// 方法二

var user = {
    firstname: "欧阳",
    lastname: "娜娜",
    age: "18"
    // fullname: firstname + lastname
}

Object.defineProperties(user, {
    fullname: {
        // 获取属性值时候调用的函数
       get() {
           return this.firstname + "-" + this.lastname
       },
        // 设置属性值的时候调用的函数
        set(v) {
           console.log(v)
            var arr = v.split("-")
            console.log(arr)
            if (arr.length == 2) {
                this.firstname = arr[0]
                this.lastname = arr[1]
            } else {
                console.log("输入的名字不规范")
            }
        }
    },
    brief: {
        get() {
            return "我的名字是" + this.firstname + this.lastname + "，我的年龄是" + this.age
        },
        set() {

        }
    }
})
console.log(user)

var teacher = {
    firstname: "蔡",
    lastname: "徐坤",
    age: "30",
    get fullname() {
        return this.firstname + "-" + this.lastname
    },
    set fullname(v) {
        var arr = v.split("-")
        console.log(arr)
        if (arr.length == 2) {
            this.firstname = arr[0]
            this.lastname = arr[1]
        } else {
            console.log("输入的名字不规范")
        }
    },
    get brief() {
        return "我的名字是" + this.firstname + this.lastname + "，我的年龄是" + this.age
    }
}
console.log(teacher)
