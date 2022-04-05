/*
 * @Author: liming
 * @Date: 2020-03-19 08:29:54
 * @LastEditTime: 2022-04-05 16:42:13
 * @FilePath: \ReactComponent\01-课程资料\learn-typescript-master\functions.ts
 */
// 函数声明
// function add(x: number, y: number, z: number = 10): number {
//   if (typeof z === 'number') {
//     return x + y + z
//   } else {
//     return x + y
//   }
// }

// let result = add(2, 3, 5)
 
//可选参数必须只能放在所有参数最后面
//写了默认值就相当于这个参数是可选的

//函数表达式写法
const add = function(x: number, y: number, z: number = 10): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

const add2: (x: number, y: number, z?: number) => number = add
//add2是函数类型
//这里的箭头不是箭头函数，而是TS中声明函数的返回值方法
// TS中所有冒号后面的都是在声明类型，和代码没有关系
