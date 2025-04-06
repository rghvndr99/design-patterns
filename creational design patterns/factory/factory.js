const Car = require('./car');
const Truck = require('./truck');
const Bike = require('./bike');

class VehicleFactory {
   static createVehicle(type, name) {
     if (type== 'car') {
        return new Car.default(name);
     }
     else if (type== 'bike') {
        return new Bike.default(name);
     }
     else if (type== 'truck') {
        return new Truck.default(name);
     }
   }
}

module.exports = VehicleFactory;