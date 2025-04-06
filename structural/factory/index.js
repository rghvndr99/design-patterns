const VehicleFactory = require('./factory');

const createCarVehicle= VehicleFactory.createVehicle('car','honda');
 createCarVehicle.show();

 const createTruckVehicle= VehicleFactory.createVehicle('truck','tata');
 createTruckVehicle.display();

 const createBikeVehicle= VehicleFactory.createVehicle('bike','tvs');
 createBikeVehicle.print();