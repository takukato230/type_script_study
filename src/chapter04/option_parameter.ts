function log(message: string, userID?: string) {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userID || 'Not signed in')
}

log('page loading')
log('User signed in', '1811uvoaluluhegfesaubewebebjaigfai')

function logDefault(message: string, userID = 'Not signed in') {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userID)
}

logDefault('page loading')
logDefault('User signed in', '1811uvoaluluhegfesaubewebebjaigfai')

type Context = {
  appID?: string
  userID?: string
}

function logContext(message: string, context: Context = {}) {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, context.userID)
}

function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}

console.log(sum([1, 2, 3]))


function sumVariadic(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}

console.log(sumVariadic(1,2,3))