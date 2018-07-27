// Code your solution in this file!
const returnFirstTwoDrivers=function(drvs){
  return drvs.slice(0,2);
};

const returnLastTwoDrivers=function(drvs){
  return drvs.slice(-2);
};

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(mult){
  return function(fare){
    return fare*mult;
  };
}