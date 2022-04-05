// type aliases  类型别名
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
  return x + y
}
const sum2: PlusType  = sum

type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

// type assertion  类型断言
//我们需要在还没确定类型的时候就访问类型中的某个方法
//而联合类型一般只能访问它们共有的属性和方法

function getLength(input: string | number) : number {
  // const str = input as String
  // if (str.length) {
  //   return str.length
  // } else {
  //   const number = input as Number
  //   return number.toString().length
  // }
  if((<string>input).length) {
    return (<string>input).length
  } else {
    return input.toString().length
  }
}