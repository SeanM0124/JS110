const MINUTES_IN_DAY = 1440;

function afterMidnight(string) {
  let minutes = getMinutes(string);
  return minutes;
}

function beforeMidnight(string) {
  let minutes = getMinutes(string);

  if (minutes === 0) return 0;
  return MINUTES_IN_DAY - minutes;
}

function getMinutes(string) {
  let hours = Number(string.slice(0,2));
  console.log(hours);
  let minutes = Number(string.slice(3));
  console.log(minutes);
  return ((hours * 12) + minutes);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);