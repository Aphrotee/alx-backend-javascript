class Building{
    constructor(){
        this.floors = 2;
        this.hasGarden = true;
    }
 
    clone(){
        var hasSpecies = this.constructor[Symbol.species];
        var cloneObject = hasSpecies? new this.constructor[Symbol.species]() : new this.constructor();
 
        cloneObject.floors = this.floors;
        cloneObject.hasGarden = this.hasGarden;
 
        if(cloneObject instanceof Office){
            cloneObject.wingsPerFloor = this.wingsPerFloor;
        }
 
        return cloneObject;
    }
}
 
class House extends Building{
    constructor(){
        super();
        this.rooms = 3;
    }
 
    static get [Symbol.species]() { return Building; }
}
class Office extends Building{
    constructor(){
        super();
        this.wingsPerFloor;
 
        this.wingsPerFloor = 2;
    }
}
 
var h = new House();
h.floors = 3;
console.log(h.clone());
 
var o = new Office();
console.log(o.clone())