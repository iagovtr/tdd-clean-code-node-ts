class Person {
  private name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  printData() {
    console.log(this.name, this.age)
  }
}

const p = new Person("Iago", 23)
p.printData()
