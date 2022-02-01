function getCarColor(car) {
      try{
        if(car){
            return car.color;
        } else {
            throw "Color unknown";
        }
    } catch (error){
        return "Color unknown";
    }
}

//do not remove
module.exports = getCarColor;
