var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'year');
// date.add(5, 'day');
// console.log(date.format('MMM Do, YYYY'));
// console.log("--------------");

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

createdAt = 1234;
var date = moment(createdAt);
var timeFormat = 'h:mm a';
console.log("Current time...: ", date.format(timeFormat));
date.add(5, 'hour');
console.log("Time in 5 hours: ", date.format(timeFormat));