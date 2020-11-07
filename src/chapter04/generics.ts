
// Filterの型付け
type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

// Filterの実装
let filter: Filter = (array, f) => {
  let result = []
  for (const e of array) {
    if (f(e)) {
      result.push(e)
    }
  }
  return result
}

let names = [
  {firstName: 'beth'},
  {firstName: 'bob'},
  {firstName: 'alice'}
]

const firstNameWithB = filter(names, _ => _.firstName.startsWith('b'))

console.log(`firstNameWithB result = ${firstNameWithB.map(_=>_.firstName)}`)



type FilterT<T> = {
  (array: T[], f: (item: T) => boolean): T[]
}

// 型エイリアスにジェネリックを利用すると
// この実装時点でジェネリックの型を宣言する必要が出てくる
let filterNumber: FilterT<number> = (array, f) => {
  let result = []
  for (const item of array) {
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}


const filterNumberWith123 = filterNumber([1,2,3], _=>_%2===0)

console.log(`filterNumberWith123=${filterNumberWith123}`)


/**
 * mapをジェネリックを使用して自作した関数
 * @param array 
 * @param f 
 */
function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = []
  for (const item of array) {
    result.push(f(item))
  }
  return result
}

let stringMap = map(['alice', 'bob', 'alias'], _=>_.replace('b', 'c'))
console.log(`stringMap result=${stringMap}`)

// DOMイベントを表現する型エイリアス
type MyEvent<T = HTMLElement> = {
  target: T
  type: string
}

// 作成した型エイリアスを内包した型エイリアス
type TimedEvent<T> = {
  event: MyEvent<T>
  from: Date
  to: Date
}

// 関数にも利用が可能
function triggerEvent<T>(event: MyEvent<T>): void {
  // ...
}