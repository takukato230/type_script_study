class CustomSet {
  private customSet: Set<number> = new Set
  has = (value: number) => 
    this.customSet.has(value)
  /**
   * thisを戻り値にすることで自身のインスタンスを返すことができる.
   * なお、このthisは、継承してもサブクラスのインスタンスをみに行くので
   * オーバロードする必要がない！
   *
   * @param {number} value
   * @returns {this}
   * @memberof CustomSet
   */
  add(value: number): this {
    this.customSet.add(value)
    return this
  }
  // addAlow = (value: number) => 
  //   this.customSet.add(value)
}

class MutableCustomSet extends CustomSet {
  private mutableCustomSet: Set<number> = new Set
  /**
   * MutableCustomSetの中身を削除する.
   *
   * @memberof MutableCustomSet
   */
  delete = (value: number) => 
    this.mutableCustomSet.size == 0 || this.mutableCustomSet.delete(value)
  
}

let customSet = new CustomSet
customSet.add(1).add(2).add(3)
const boolCustomSet1 =  customSet.has(2)
const boolCustomSet2 =  customSet.has(4)

console.log(`boolCustomSet1=${boolCustomSet1}`)
console.log(`boolCustomSet2=${boolCustomSet2}`)

