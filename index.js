// Your code here
function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(arrays) {
  const newArray = [];
  arrays.forEach((arr) => {
    newArray.push(createEmployeeRecord(arr));
  });
  return newArray;
}

function createTimeInEvent(obj, stamp) {
  // const newArr = createEmployeeRecord(obj);
  const type = "TimeIn";
  const stampArr = stamp.split(" ");
  const hour = parseInt(stampArr[1],10);
  const date = stampArr[0];
  obj.timeInEvents.push({ type, hour, date });
  return obj;
}

function createTimeOutEvent(obj, stamp) {
  const stampArr = stamp.split(" ");
  const type = "TimeOut";
  const hour = parseInt(stampArr[1],10);
  const date = stampArr[0];
  obj.timeOutEvents.push({ type, hour, date });
  return obj;
}

function hoursWorkedOnDate(obj, whichDate) {
  let inTime = 0;
  obj.timeInEvents.forEach((timeInEvent)=>{
    if(timeInEvent.date===whichDate){
      return inTime = timeInEvent.hour
    }
  })
    // .filter(function (element) {
    //   element.date === whichDate;
    // })
    // .map(function (element) {
    //   element.hour;
    // });
  let outTime = 0;
  obj.timeOutEvents.forEach((timeOutEvent)=>{
    if(timeOutEvent.date===whichDate){
      return outTime = timeOutEvent.hour
    }
  })
    // .filter(function (element) {
    //   element.date === whichDate;
    // })
    // .map(function (element) {
    //   element.hour;
    // });
  const hours = (outTime - inTime)/100;
  return hours;
}

function wagesEarnedOnDate(obj,date){
    return hoursWorkedOnDate(obj,date)*parseInt(obj.payPerHour);
}

function allWagesFor(obj){
    // const allDates = [];
    // const allTheWage = [];
    // allDates.push(obj.timeInEvents.map((element)=>{element.date}))
    // for (const dates of allDates) {

    //   allTheWage.push(wagesEarnedOnDate(obj,dates))
    //   return allTheWage.reduce((a,b)=>a+b,0)
    return obj.timeInEvents.reduce((a,b)=>{
      return a+ wagesEarnedOnDate(obj,b.date)
    },0)
    }


function findEmployeeByFirstName(srcArr,employeeFirstName){
    return srcArr.find(function(employee){
        return employee.firstName === employeeFirstName
    })
}

function calculatePayroll(arr){
    let totalMoney = 0;
    for (const employee of arr) {
        totalMoney += allWagesFor(employee);
    }
    return totalMoney;
}


// const eddieRecord = ["Eddie", "Na", "chef", "30"];
// const eddieTimeInStamp = "2022-07-28 0900";
// const eddieTimeOutStamp = "2022-07-28 1100";

// //console.log(createEmployeeRecord(createTimeInEvent(eddieRecord,eddieTimeStamp)))
// const ed = createEmployeeRecord(eddieRecord);
// const result = createTimeInEvent(ed, eddieTimeInStamp);
// // console.log(
//   createTimeInEvent(createEmployeeRecord(eddieRecord), eddieTimeInStamp)
// // );
// // createTimeOutEvent(createEmployeeRecord(eddieRecord), eddieTimeOutStamp);
// // console.log(hoursWorkedOnDate(eddieRecord));
// hoursWorkedOnDate(ed,"2022-07-28")