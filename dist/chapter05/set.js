"use strict";
class CustomSet {
    constructor() {
        this.customSet = new Set;
        this.has = (value) => this.customSet.has(value);
        // addAlow = (value: number) => 
        //   this.customSet.add(value)
    }
    /**
     * thisを戻り値にすることで自身のインスタンスを返すことができる.
     * なお、このthisは、継承してもサブクラスのインスタンスをみに行くので
     * オーバロードする必要がない！
     *
     * @param {number} value
     * @returns {this}
     * @memberof CustomSet
     */
    add(value) {
        this.customSet.add(value);
        return this;
    }
}
class MutableCustomSet extends CustomSet {
    constructor() {
        super(...arguments);
        this.mutableCustomSet = new Set;
        /**
         * MutableCustomSetの中身を削除する.
         *
         * @memberof MutableCustomSet
         */
        this.delete = (value) => this.mutableCustomSet.size == 0 || this.mutableCustomSet.delete(value);
    }
}
let customSet = new CustomSet;
customSet.add(1).add(2).add(3);
const boolCustomSet1 = customSet.has(2);
const boolCustomSet2 = customSet.has(4);
console.log(`boolCustomSet1=${boolCustomSet1}`);
console.log(`boolCustomSet2=${boolCustomSet2}`);
