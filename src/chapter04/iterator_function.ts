const iteratableNumbers = {
  *[Symbol.iterator]() {
    for (let index = 0; index < 10; index++) {
      yield index + 1
    }
  },
}
