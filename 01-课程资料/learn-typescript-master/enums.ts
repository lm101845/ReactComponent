const enum Direction {
//加了const就变成常量枚举了，可以增加性能
//但是只有常量值才能用常量枚举
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
const value = 'UP'
if (value === Direction.Up) {
  console.log('go up!')
}