// 工具类公用函数封装


// 封装一个可以获得随机区间的整数的函数
function randomInt(n,m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
};


// 数组的遍历的forEach方法
// 作用： 用于遍历数组
// 参数： 是一个函数，这个函数有两个形参，第一个形参代表了数组里面的每个元素，第二个形参代表了每个索引
// 返回值 ：返回值是undefined
// 例如：
var arr = [1,2,3,4,5];
var sum = 0;
var res = arr.forEach(function(e,i){
  sum += e;
});



// 数组的筛选的方法
// 作用： 从数组中筛选出满足条件的元素，用一个新的数字装起来
// 参数： 是一个函数，函数有两个形参，第一个代表每个元素，第二个代表索引
// 返回值：是一个数组，里面有所有满足条件的元素
// 例如：
// 筛选出数组中满足条件的元素 ,条件就是 元素 > 2000
var arr = [3000,5000,100,80,99,2500];
var arr2 = arr.filter(function(e,i){
	return e > 2000;
})


   // 求最大值 并封装函数

function max(n,m,a) {
        var max = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i]
            }
        }
        return max;
    };
    arr = [1, 9, 3, 7, 5]
    console.log(max(arr)) */
