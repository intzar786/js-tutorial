let arr = Array(20);
//console.log(arr.length); // 20

let myArr = [1,3,5,2,7]
//console.log(myArr);

myArr.push(4)
//console.log(myArr); 

myArr.pop()
//console.log(myArr)

myArr.unshift(5)
//console.log(myArr);

myArr.shift()
//console.log(myArr);
const concetArray1 = ['a','b']
const concetArray2 = [false,['x','y','z']]
const finalArr = myArr.concat(concetArray1, concetArray2) 

console.log(finalArr);
