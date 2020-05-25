// Promise对象
const promise = new Promise(function(resolve, reject) {
    // ... some code

    if (true){ /* 异步操作成功 */
        resolve(value);
    } else {
        reject(error);
    }
});
