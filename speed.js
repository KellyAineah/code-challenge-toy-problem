// code challenge 2
// create a function named speedDetector
function speedDetector(speed){
    //creates a variable speedlimit with a value of 70
    const speedLimit = 70;
    //create a variable demeritPoints and include Math.floor so at round down an our number to the nearest integer
    const demeritPoints= Math.floor((speed - speedLimit)*0.2);
    //create a condition which checks if the speed is is less than or equal to speedLimit and outputs 'ok'
    if(speed <= speedLimit){
        return "Ok";
    }
    //create a condition which checks if demeritPoints are greater than 12 hence returns "License suspended"
    else if(demeritPoints>12){
        return "License suspended";
    }
    else {
        return `Points: ${demeritPoints}`
    }

}
//invokes the function speedDetector
speedDetector();