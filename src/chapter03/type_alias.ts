type Age = number

type PersonHavenAge = {
  name: string
  age: Age
}

// 合併、交差

type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
// 合併
type CatOrDogOrBoth = Cat | Dog
// 交差
type CatAndDog = Cat & Dog


/**
 *
 *
 * @param {boolean} isTrue
 * @returns string | null
 */
function trueOrNull (isTrue: boolean) {
  if (isTrue) {
    return 'true'
  }
  return null
}