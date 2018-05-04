function Bear(type) {
  this.type = type
}

Bear.prototype.growl = function() {
  console.log(this.type + " grrr")
}
// Be careful while defining your prototype functions with arrow functions
// this binding for arrow function is done by the place it's defined
// and not runtime
// so that this in the purr function refers to global context (window in browser or process in node)
Bear.prototype.purr = () => console.log(this.type + " says purrrr")

function Grizzly() {
  Bear.call(this, "grizlly")
}

// the below line make Grizzly's prototype object refer to object created
// using Bear's prototype. It's not a deep clone. We still refer to the prototype chain of Bear
// if we change anything in Bear's prototype later, it will affect all objects created using Grizzly
Grizzly.prototype = Object.create(Bear.prototype)
Grizzly.prototype.kill = function kill() {
  console.log("I Kill bad!")
}

// think of the `new` operator as a function
// which takes hold of the constructor function prototype
// and calls the function with this binding to an object which it sends to the functions
// one example implementation
// function new(fn, ...args) {
//     let tempObj = Object.create(fn.prototype)
//     fn.apply({}, args)
//     return tempObj
// }
let grizzly = new Grizzly()

grizzly.growl()
grizzly.purr() // this one will have undefined for this.type

// changing Bear's prototype also affects grizzly object created using Grizzly
// so Object.create(Bear.prototype) does not create a brand new prototype chain
// just refers Grizzly.prototype higher up to Bear.prototype chain
// i.e. hooks up Grizzly.prototype.__proto__ to Bear.prototype
// E.g. if Grizzly.proptype = {type, x, y, __proto__: {}}
console.log(Object.keys(Grizzly.prototype))
console.log(Object.keys(Grizzly.prototype.__proto__))
Bear.prototype.growl = () => console.log("gr")
// grizzly growl changes too
grizzly.growl()
