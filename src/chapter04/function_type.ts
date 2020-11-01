import { ResolvedTypeReferenceDirectiveWithFailedLookupLocations } from "typescript"

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