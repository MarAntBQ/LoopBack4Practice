function getArray(items) {
    return new Array().concat(items);
}
// let myNumArr = getArray<number>([100,20,300]);
// let myStrArr = getArray<string>(['Hello', 'World']);
var myNumArr = getArray([100, 20, 300]);
var myStrArr = getArray(['Hello', 'World']);
console.log(myNumArr);
console.log(myStrArr);
