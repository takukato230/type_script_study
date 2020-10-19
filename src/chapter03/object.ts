// オブジェクトリテラル記法で表現している
let p : {
  firstName: string
  lastName: string
} = {
  firstName: 'john',
  lastName: 'barrowMan'
}

/**
 * 人の名前を表現するクラス
 *
 * @class Person
 */
class Person {
  constructor (
    // publicは「this.firstName = firstName」の省略記法
    public firstName: string,
    public lastName: string
  ){}
}

p = new Person('matt', 'smith')

console.log(p)

// その他のオブジェクトの形

let questionA : {
  b: number
  // 以下の記述をするとcにはundefinedが入ってもよくなる
  c?: string
  [key:number]: boolean
}

questionA = {b: 1}
console.log(questionA)
questionA = {b: 1, 10: true}
console.log(questionA)

let user : {
  readonly firstName: string
} = {
  firstName: 'add'
}

console.log(user.firstName)