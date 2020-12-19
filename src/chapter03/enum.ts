enum Language {
  English,
  Spanish,
  Russian,
}

// enumからの値取得方法
const myFirstLanguage = Language.Russian
const mySecondLanguage = Language.English

console.log(myFirstLanguage)
console.log(mySecondLanguage)

/**
 * 文字リテラルのみを利用してenumにアクセスするように強制する記述方法
 *
 * @enum {number}
 */
const enum ConstLanguage {
  English,
  Spanish,
  Russian,
}

const constA = Language.English

console.log(`constA = ${constA}`)
