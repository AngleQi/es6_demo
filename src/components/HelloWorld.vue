<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>1、let命令</h4>
    <p>let命令用来声明变量，类似于var，但是所声明的变量，只在let命令所在的代码块内有效</p>
    <p>不存在变量提升</p>
    <p>暂时性死区：总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。</p>
    <p>不允许重复声明</p>
     <h4>2、块级作用域</h4>
    <p>为什么需要块级作用域？</p>
    <p>第一种场景：内层变量可能会覆盖外层变量</p>
    <p>第二种场景：用来计数的循环变量泄露为全局变量</p>
  </div>
</template>

<script>
import('../common/arrowFun.js')
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created () {
    // 块级作用域：第一种场景，内层变量可能会覆盖外层变量。
    var tmp = new Date();

    function f() {
      console.log(tmp);
      if (false) {
        var tmp = 'hello world';
      }
    }

    f(); // undefined

    // 第二种场景，用来计数的循环变量泄露为全局变量。
    var s = 'hello';

    for (var i = 0; i < s.length; i++) {
      console.log(s[i]);
    }

    console.log(i); // 5
  },
  mounted() {
   this.initData()
  },
  methods: {
    initData () {
      {
        let a = 10;
        var b = 1;
      }
      // console.log(a)  // ReferenceError: a is not defined.
      // console.log(b) // 1

      var aa = []
      for (var i = 0; i < 10; i ++) {
        aa[i] = function () {
          console.log(i)
        }
      }
      aa[6]() // 10

      var bb = []
      for (let i = 0; i < 10; i ++) {
        bb[i] = function () {
          console.log(i)
        }
      }
      bb[6]() // 6
      // 另外，for 循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独子作用域
      for (let i = 0; i < 3; i++) {
        let i = 'abc';
        console.log(i); // 输出了 3 次abc,这表明函数内部变量i与循环变量i不在同一个作用域，有各自单独的作用域
      }

      // 不存在变量提升
      // var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。
      // l为了纠正这种错误，let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错
      // var 的情况
      console.log(foo); // undefined
      var foo = 2;
      // let 的情况
      console.log(bar); // ReferenceError: bar is not defined
      let bar = 2;


      // 暂时性死区
      // 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
      var tmp = 123;
      if (true) {
        tmp = 'abc'; // ReferenceError
        let tmp;
      }

      // 总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上称为“暂时性死区”，简称TDZ
      if (true) {
        // TDZ开始
        tmp = 'abc'; //ReferenceError
        console.log(tmp) // ReferenceError

        let tmp; // TDZ结束
        console.log(tmp) // undefined

        tmp = 123;
        console.log(tmp) //123
      }
      // 在上面代码中，在let命令声明变量tmp之前，都属于变量tmp的“死区”
      console.log(typeof x); // ReferenceError
      let x;
      // 作为比较，如果一个变量根本没有被声明，使用typeof反而不会报错。
      console.log(typeof undeclared_variable) // "undefined"
      // 变量一定要在声明之后使用，否则就报错。


    },
    // let不允许在相同作用域内，重复声明同一个变量。

    // 报错
    // func() {
    //   let a = 10;
    //   var a = 1;
    // },

    // 报错
    // func() {
    //    let a = 10;
    //   let a = 1;
    // }

    // 不能在函数内部重新声明参数
    // 报错
    // func(arg) {
    //   let arg;
    // }

    // 不报错
    func(arg) {
      {
        let arg;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
