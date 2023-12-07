/*
Write a function that takes a time using ths minute based
format and returns the time of day in 24 hour format

If the number is negative, the time is before midnight, if the number is
psoitive, its after midnight.

Input: a number
Output: a string

Rules:
 - Convert the input number to a string that represennts the time of day
 - if the number is negative, the time is before midnight
 - if the number is positive, the time is after midnight
 - return time in a 24 hr format: hh:mm
 - work with any integer input

Algorithm:
- Take the number check for it to be negative
- use modulo to divide and get the hours
-  use modulo to get the minutes
- if the hours are greater than 24, use modulo to get the remaining hours needed

*/
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;

function timeOfDay(num) {
  let hours = getHours(num);
  let minutes = getMinutes(num);

  if (num < 0) {
    minutes = MINUTES_PER_HOUR - minutes;
    hours = HOURS_PER_DAY - hours;
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${hours}:${minutes}`;
}

function getHours(num) {
  let hours = Math.abs(Math.floor(num / MINUTES_PER_HOUR));

  if (hours > HOURS_PER_DAY) {
    hours %= HOURS_PER_DAY;
  }
  return hours;
}

function getMinutes(num) {
  let minutes = Math.abs(num % MINUTES_PER_HOUR);

  if (minutes === 0) {
    minutes = '00';
  } else if (minutes < 10) {
    minutes = '0' + minutes;
  }

  return minutes;
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

/*
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}
*/



const MINUTES_IN_DAY = 1440;
const MINS_PER_HOUR = 60;

function timeOfDay(deltaMins) {
  if (deltaMins < 0) {
    deltaMins = (deltaMins % MINUTES_IN_DAY) + MINUTES_IN_DAY;
  } else {
    deltaMins %= MINUTES_IN_DAY;
  }

  let hours = Math.floor(deltaMins / MINS_PER_HOUR);
  let minutes = deltaMins % MINS_PER_HOUR;

  return formatTime(hours, minutes);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function lastSundayMidnight(currentDate) {
  currentDate.setDate(currentDate.getDate() - currentDate.getDay());
  currentDate.setHours(0,0,0,0);

  return currentDate;
}

function dateVers(min) {
  let dayOfWeek = ["Sunday" , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let date = new Date();

  date = lastSundayMidnight(date);
  date.setMinutes(min);

  let day = dayOfWeek[date.getDay()];
  let hours = leadingZero(date.getHours());
  let minute = leadingZero(date.getMinutes());

  return `${day} ${hours}:${minute}`;
}

console.log(dateVers(0));
console.log(dateVers(-3));
console.log(dateVers(35));
console.log(dateVers(-1437));
console.log(dateVers(3000));
console.log(dateVers(800));
console.log(dateVers(-4231));