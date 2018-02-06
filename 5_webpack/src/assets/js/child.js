import { Person } from './person';

export default class Child extends Person {
  constructor(name) {
    super(name, 'Perez');
  }
}