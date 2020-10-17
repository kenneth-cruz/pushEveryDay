var ParkingSystem = function(big, medium, small) {
    // number of slots for each parking space given as part of constructor
    this.counts = [null, big, medium, small]
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {

    if(this.counts[carType]){
        this.counts[carType]--
        return true
    }
    return false
};
