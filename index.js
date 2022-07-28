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
  const hour = stampArr[1];
  const date = stampArr[0];
  obj.timeOutEvents.push({ type, hour, date });
  return obj;
}

function createTimeOutEvent(obj, stamp) {
  const stampArr = stamp.split(" ");
  const type = "TimeOut";
  const hour = stampArr[1];
  const date = stampArr[0];
  obj.timeOutEvents.push({ type, hour, date });
  return obj;
}

function hoursWorkedOnDate(obj, whichDate) {
  const inTime = obj.timeInEvents
    .filter(function (element) {
      element.date === whichDate;
    })
    .map(function (element) {
      element.hour;
    });
  const outTime = obj.timeOutEvents
    .filter(function (element) {
      element.date === whichDate;
    })
    .map(function (element) {
      element.hour;
    });
  const hours = parseInt(outTime - inTime,10);
  const worked = hours.slice(-1,1)+hours.slice(1,3)/60
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