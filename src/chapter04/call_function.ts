/**
 * 引数の数値を足し合わせる
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a: number, b: number): number {
  return a + b
}

/**
 * 名前付き関数
 *
 * @param {string} name
 * @returns
 */
function greet(name: string) {
  return 'hello ' + name
}

// 関数型
const greet2 = function (name: string) {
  return 'hello ' + name
}

// アロー関数
const greet3 = (name: string) => {
  return 'hello ' + name
}

// アロー関数の省略記法
const greet4 = (name: string) => 'hello ' + name

// 関数コンストラクタ
const greet5 = new Function('name', 'return "hello " + name')

// 以下は全て関数の呼び出しである.

const result1 = add(10, 20)
const result2 = add.apply(null, [10, 20])
const result3 = add.call(null, 10, 20)
const result4 = add.bind(null, 10, 20)()
