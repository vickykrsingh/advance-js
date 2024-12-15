// pollyfill of reduce function
Array.prototype.myReduce = function (cb, acc) {
  let myArr = this;
  let result = acc;
  for (let i = 0; i < myArr.length; i++) {
    result = !result ? myArr[i] : cb(result, myArr[i]);
  }
  return result;
};

const arr = [12, 32, 12, 32, 43];
const result = arr.myReduce((acc, cur) => {
  return (acc = acc + cur);
}, 10);

console.log(result);
