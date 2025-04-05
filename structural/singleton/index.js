const Singleton1 = require('./singleton');
const Singleton2 = require('./singleton');
const Singleton3 = require('./singleton');


Singleton1.increment();

console.log(Singleton1.getData() , Singleton2.getData(), Singleton3.getData());