/**
 * numberまたはnullを返却する関数
 *
 * @param {number} x
 * @returns
 */
function aFunc(x: number) {
  if (x < 10) {
    return x
  }
  return null
}

/**
 * undefinedを返却する関数
 *
 * @returns
 */
function bFunc() {
  return undefined
}

/**
 * voidを返却する関数
 *
 */
function cFunc() {
  const a = 2 + 2
  const b = a * a
}

/**
 * neverを返却する関数
 *
 */
function dFunc() {
  throw TypeError('I always error')
}
