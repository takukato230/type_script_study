// 呼び出しシグニチャの型を定義する
// この型定義ではデフォルト値を表現することはできない
type LogType = (message: string, userID?: string) => void

const logType: LogType = (
  // すでに呼び出しシグニチャで定義されているため、
  // パラメータに再度型付けする必要はない
  message,
  userID = 'Not signed in'
) => {
  const time = new Date().toISOString()
  console.log(time, message, userID)
}

function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i)
  }
}

times((n) => console.log(n), 4)
