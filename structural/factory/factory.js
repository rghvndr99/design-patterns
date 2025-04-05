const Car = require('./car');
const Truck = require('./truck');
const Bike = require('./bike');

console.log(Car);

class VehicleFactory {
   static createVehicle(type, name) {
     if (type== 'car') {
        return new Car(name);
     }
     else if (type== 'bike') {
        return new Bike(name);
     }
     else if (type== 'truck') {
        return new Truck(name);
     }
   }
}

module.exports = VehicleFactory;