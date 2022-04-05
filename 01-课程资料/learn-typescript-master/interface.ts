interface Person {
    readonly id: number;
    //readonly是用在属性上面的,而const是用在变量上面的
  name: string;
  age?: number;
}
let viking: Person = {
  id: 1234,
  name: 'viking',
}
