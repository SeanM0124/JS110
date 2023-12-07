/*
Write a function that takes a floating point number representing
an angle between 0 and 360 degrees and returns a string representing
that angle in degrees, minutes and seconds.

Rules:
Use ˚ to represent degrees
Use ' to represent minutes
Use " to represent seconds
There is 60 minutes in a degree, and 60 seconds in a minute

Input: A number
Output: A string representing the angle in degrees minutes and seconds

Algoritm:

*/

const degree = '˚';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degrees = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degrees) * MINUTES_PER_DEGREE);
  let seconds = Math.floor((degreesFloat - degrees -
  (minutes / MINUTES_PER_DEGREE)) *
  SECONDS_PER_DEGREE);

  if (minutes < 10 && minutes >= 0) minutes = '0' + minutes;
  if (seconds < 10 && seconds >= 0) seconds = '0' + seconds;

  console.log(degrees + degree + minutes + "'" + seconds + '"');
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"