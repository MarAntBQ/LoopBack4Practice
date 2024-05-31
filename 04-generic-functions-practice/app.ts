function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

// let myNumArr = getArray<number>([100,20,300]);
// let myStrArr = getArray<string>(['Hello', 'World']);
let myNumArr = getArray([100,20,300]);
let myStrArr = getArray(['Hello', 'World']);

console.log(myNumArr)
console.log(myStrArr)
// myNumArr.push('Hello'); <- We can't push differenyt type
// myStrArr.push(10); <- We can't push differenyt type