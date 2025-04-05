class Truck {
    constructor(name){
        this.name=name;
    }
     display() {
        console.log(`you are driving ${this.name} truck`)
     }
}

module.defaults=  Truck;