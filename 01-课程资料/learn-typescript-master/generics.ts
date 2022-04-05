/*
 * @Author: liming
 * @Date: 2020-03-19 08:29:54
 * @LastEditTime: 2022-04-05 18:47:56
 * @FilePath: \ReactComponent\01-课程资料\learn-typescript-master\generics.ts
 */
function echo<T>(arg: T): T {
 //函数名字后加<T>
  return arg
}
// 泛型就是定义的时候不决定类型，而是在【使用】的时候才决定类型
//泛型就像一个占位符或者一个变量，在使用的时候把定义好的类型像参数一样传入 
const result = echo(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])

//乞丐版
function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    //T[]表示含有T类型的array,它就有length属性
  return arg
}
const arrs = echoWithArr([1, 2, 3])

//升级版
interface IWithLength {
  length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    //只要你有length属性，符合这个约束，什么样的属性都可以
  console.log(arg.length)
  return arg
}

const str = echoWithLength('str')
const obj = echoWithLength({ length: 10, width: 10})
const arr2 = echoWithLength([1, 2, 3])

// 无论什么类型，被推出和推入的类型都完全一样
//类名称后面也可以添加尖括号<>
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}


const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)
//接口名称后面也可以添加尖括号<>
interface KeyPair<T, U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = { key: 123, value: "str" }
let kp2: KeyPair<string, number> = { key: 'test', value: 123 }

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]
//使用接口来描述函数类型，这样写法返回不用箭头，用冒号即可
interface IPlus<T> {
  (a: T, b: T) : T
}
function plus(a: number, b: number): number {
  return a + b;
}
function connect(a: string, b: string): string {
  return a + b
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect
