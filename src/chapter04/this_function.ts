function fancyDate(this: Date) {
  return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`
}

// 呼び出し時にDateのバインドを強制させている
console.log(fancyDate.call(new Date()))
