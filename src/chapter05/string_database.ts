type DBState = {
  [key: string]: string
}

class StringDatabase {
  state: DBState = {}
  get(key: string): string | null {
    return key in this.state ? this.state[key] : null
  }

  set(key: string, value: string): void {
    this.state[key] = value
  }

  static from(state: DBState) {
    const db = new StringDatabase()
    for (const k in state) {
      db.set(k, state[k])
    }
    return db
  }
}
