import './assets/scss/app.scss';
import Child from './assets/js/child'

{
  let child = new Child('Pedro');
  child.FullName = 'Jhon Doe';

  console.log(child.name);
  console.log(child.lastName);

  let a = [1,2,3,4,5,6]

  for(let el of a) {
    console.log(el);
  }

  console.log(a.map( el => el + 1 ));
}
