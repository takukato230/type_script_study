interface Animal {
  readonly name: string

  eat(food: string): void

  sleep(hours: number): void
}

interface Feline {
  meow(): void
}

class Cat implements Animal, Feline {
  name: string

  constructor(name: string) {
    this.name = name
  }

  meow = () => console.info('meow!!')

  eat = (food: string) => console.info('Ate some', food, '. Mmm!')

  sleep = (hours: number) => console.info('sleep for', hours, 'hours')
}

function animalFunc(): void {
  const cat = new Cat('cat jiro')
  cat.meow()
}

animalFunc()
