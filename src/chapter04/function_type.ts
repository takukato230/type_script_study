// 呼び出しシグニチャの省略記法
type LogT = (message: string, userID?: string) => void

// 完全な呼び出しシグニチャ
type LogTT = {
  (message: string, userID?: string): void
}

type Reserve = {
  (from: Date, to: Date, destination: string): string
  (from: Date, destination: string): string
}

// reserve
// Reserveが実装される際にはそれらがどのように呼び出されたかチェックする必要がある
// let reserve: Reserve = (
//   from: Date,
//   toOrDestination: Date | string,
//   destination?: string
// ) => {
//   if (toOrDestination instanceof Date && destination !== undefined) {
//     // 宿泊旅行を予約する
//   } else if (typeof toOrDestination === 'string') {
//     // 日帰り旅行を予約する
//   }
// }

type WarnUser = {
  (warning: string): void
  wasCalled: boolean
}

// function warnUser(waring: string) {
//   if (warnUser.wasCalled) {
//     return
//   }
//   warnUser.wasCalled = true
//   alert(warning)

// }

// const assignedWarnUser: WarnUser = warnUser
