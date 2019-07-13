// 工具类公用函数封装  用于把很多重复使用的代码，进行封装，到时候直接使用


/**  
* @descripttion 函数的描述  封装一个可以获得随机区间的整数的函数 
* @param {string} n m  参数说明   一个值到另一个值的数
* @return {} 返回值 一个随机的区间整数 
*/
function randomInt(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
};


// 数组的遍历的forEach方法
// 作用： 用于遍历数组
// 参数： 是一个函数，这个函数有两个形参，第一个形参代表了数组里面的每个元素，第二个形参代表了每个索引
// 返回值 ：返回值是undefined
// 例如：
var arr = [1, 2, 3, 4, 5];
var sum = 0;
var res = arr.forEach(function (e, i) {
    sum += e;
});



// 数组的筛选的方法
// 作用： 从数组中筛选出满足条件的元素，用一个新的数字装起来
// 参数： 是一个函数，函数有两个形参，第一个代表每个元素，第二个代表索引
// 返回值：是一个数组，里面有所有满足条件的元素
// 例如：
// 筛选出数组中满足条件的元素 ,条件就是 元素 > 2000
var arr = [3000, 5000, 100, 80, 99, 2500];
var arr2 = arr.filter(function (e, i) {
    return e > 2000;
})



// 求最大值 并封装函数
/**
 * @description  求 n-m  的最大值，假设数组里面第一项是最大值，循环n-m比较出最大值
 * @param  n m 随机数
 * @return 返回一个最大值
 */
function max(n, m, a) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
};
arr = [1, 9, 3, 7, 5]
console.log(max(arr))



// 封装时间
/** 
 * @description  封装实时 时间
 * @param 没有参数
 * @return {time}  返回值是一个 格式为： xxxx-xx-xx xx:xx:xx 年月日时分秒
 */
function times() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}
// 直接调用
// let time = times()


//封装  求1-100 能被 2 整除的 所有数

function fn() {
    let arr = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}

//封装 n到m之间所有能被k整除的数字添加到新数组arr中
/**
 * @description  n到m之间所有能被k整除的数字添加到新数组arr中
 * @param n m k n-m的区间随机数   k 是被 % 的数
 * 
 */
function fn (n,m,k) {
    let arr = [];
    for(let i = n; i <= m; i++) {
        if(n % k === 0) {
            arr.push(i);
        }
    }
    return arr;
}
//直接调用
// let arr = fn(1,100,2)


/**
 * 封装的是一个可以生成唯一id的方法
 */
kits.primaryKey = function () {
    // 我们通过时间戳 + 大范围的随机数来生成id
    let now = Date.now(); //得到是从1970年到现在为止的总的毫秒数
    // 为了防止在1毫秒之内生成的id有多个，再次加上一个大范围的随机数
    let r = kits.randomInt(100000, 999999);
    // console.log(r);
    // 把两个得到的结果，拼接起来
    return now + '' + r;
}