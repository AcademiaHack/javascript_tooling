export class Person {
  constructor(name, lastName){
    this.name = name;
    this.lastName = lastName;
    this.speed = 0;
  }

  get fullName() {
    return `${this.name} ${this.lastName}`
  }

  set FullName(full) {
    [this.name, this.lastName] = full.split(' ');
  }

  walking() {
    setTimeout(() => {
      console.log('WALKING', this);
      this.speed += 1;
    }, 3000);
  }

  running() {
    setTimeout(() => {
      console.log('RUNNING', this);
      this.speed += 10;
    }, 1000);
  }

  static hola() {
    console.log('Hola!');
  }
}