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
// var arr = [1,2,3,4,5];
// var sum = 0;
// var res = arr.forEach(function(e,i){
//   sum += e;
// };