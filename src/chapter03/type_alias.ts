type Age = number

type PersonHavenAge = {
  name: string
  age: Age
}

// 合併、交差
type Cat01 = { name: string; purrs: boolean }
type Dog = { name: string; barks: boolean; wags: boolean }
// 合併
type CatOrDogOrBoth = Cat01 | Dog
// 交差
type CatAndDog = Cat01 & Dog

/**
 * @param {boolean} isTrue
 * @returns string | null
 */
function trueOrNull(isTrue: boolean) {
  if (isTrue) {
    return 'true'
  }
  return null
}
