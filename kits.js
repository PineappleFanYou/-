// 工具类公用函数封装


// 封装一个可以获得随机区间的整数的函数
function randomInt(n,m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
};