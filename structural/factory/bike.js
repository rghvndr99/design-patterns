class Bike {
    constructor(name){
        this.name=name;
    }
     display() {
        console.log(`you are driving ${this.name} Bike`)
     }
}

module.defaults=  Bike;