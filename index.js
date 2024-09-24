function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42 - pickupLocation);
}

 function distanceFromHqInFeet(pickupLocation) {
  return Math.abs((42 - pickupLocation)* 264)
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;   
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400) {
        return 0
    } else if(distance <= 2000) {
        return ((distance - 400)* 2)/100;
    } else if(distance <= 2500) {
       return 25
    } else {
        return 'cannot travel that far'
    }
}
 
 

