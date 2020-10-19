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