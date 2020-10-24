let as: readonly number[] = [1,2,3]
// concatメソッドは直接変更を加えるのでなく、
// 新たに指定の要素を加えたコピーの配列を作成する処理となる
let bs: readonly number[] = as.concat(4)

console.log(bs)

// immutableな配列やタプルの定義方法

type A = readonly string[]
type B = ReadonlyArray<string>
type C = Readonly<string[]>

type D = readonly[number, string]
type E = Readonly<[number, string]>