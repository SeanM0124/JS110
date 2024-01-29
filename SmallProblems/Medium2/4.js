/*
Some people believe that Fridays that fall on the 13th day of the
month are unlucky days.
Write a function that takes a year as an argument and returns the
number of Friday the 13ths in that year.
You may assume that the year is greater than 1752,
which is when the United Kingdom adopted the modern Gregorian Calendar.
You may also assume that the same calendar will remain in use for
the foreseeable
future.

PE:

Input: A number representing a year
Output: An integer representing how many friday the 13ths were in the given year

Rules:

DS: Date methods, perhaps an array

A:
Iterate over all the months of the given year.
For each month, get the day that falls on the 13th.
Count the 13ths that fall on a Friday.
Return the count.
*/

function fridayThe13ths(year) {
  let the13ths = [];

  for (let month = 0; month < 12; month++) {
    the13ths.push(new Date(year, month, 13));
  }

  let num = the13ths.reduce((count, day) => {
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0);
  console.log(num);
}


fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2