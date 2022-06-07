// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
    const newArray = [];
    for (let i =0; i<2; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
}

function returnLastTwoDrivers(arr) {
    const newArray = [];
    for (let i = arr.length -1; i>arr.length-3; i--) {
        newArray.unshift(arr[i]);
    }
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// const selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()];

function createFareMultiplier(fare) {
    return function(fare) {
        return fare * fare;
    }
}

function fareDoubler(fare) {
    return fare*2;
}

function fareTripler(fare) {
    return fare*3;
}

function selectDifferentDrivers (drivers, cb) {
    return cb(drivers);
}