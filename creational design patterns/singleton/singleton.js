let instance=null;

class Singleton {
    constructor(){
        this.data=0;
        if(!instance) {
            instance= this;
        }
        return instance;
    }
     increment() {
        this.data=+1;
     }
     getData(){
        return this.data;
     }
}

module.exports = new Singleton();
