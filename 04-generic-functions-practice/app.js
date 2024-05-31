var Helloworld = /** @class */ (function () {
    function Helloworld(message, name) {
        console.log(message + ' ' + name);
    }
    return Helloworld;
}());
var helloworld = new Helloworld('Welcome', 'Marco Antonio');
console.log(helloworld);
