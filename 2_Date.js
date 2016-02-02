var now  = new Date()
console.log(now)// Fri Jan 29 2016 13:48:21 GMT-0800 (Pacific Standard Time)// gives the time when you ran this code
var someDate1 = new Date(Date.parse("February 24, 2016"))
// OR the results will be the same...
var someDate2 = new Date("April 21, 2016")
console.log(someDate1)// Wed Feb 24 2016 00:00:00 GMT-0800 (Pacific Standard Time)
console.log(someDate2)// Thu Apr 21 2016 00:00:00 GMT-0700 (Pacific Daylight Time)

var newNow = Date.now()      // returns date in milliseconds like this... 1454105215359
var oneMoreNow = +new Date() // returns date in milliseconds like this... 1454105215359
console.log(newNow)     // 1454108664258
console.log(oneMoreNow) // 1454108664258
// milliseconds to date
var millisecondsToString = new Date(newNow)
console.log(millisecondsToString.toDateString())        // Fri Jan 29 2016
console.log(millisecondsToString.toISOString())         // 2016-01-29T22:20:48.967Z
console.log(millisecondsToString.toLocaleDateString())  // 1/29/2016
console.log(millisecondsToString.toLocaleString())      // 1/29/2016, 2:20:48 PM
console.log(millisecondsToString.toLocaleTimeString())  // 2:20:48 PM
console.log(millisecondsToString.toString())            // Fri Jan 29 2016 14:20:48 GMT-0800 (Pacific Standard Time)
console.log(millisecondsToString.toTimeString())        // 14:20:48 GMT-0800 (Pacific Standard Time)
console.log(millisecondsToString.toUTCString())         // Fri, 29 Jan 2016 22:20:48 GMT


getTime() //Returns the milliseconds representation of the date; same as valueOf().
setTime(milliseconds) //Sets the milliseconds representation of the date, thus changing the entire date.
getFullYear()// Returns the four-digit year (2007 instead of just 07).
getUTCFullYear()// Returns the four-digit year of the UTC date value.
setFullYear(year)// Sets the year of the date. The year must be given with four digits (2007 instead of just 07).
setUTCFullYear(year)// Sets the year of the UTC date. The year must be given with four digits (2007 instead of just 07).
getMonth()// Returns the month of the date, where 0 represents January and 11 represents December.
getUTCMonth()// Returns the month of the UTC date, where 0 represents January and 11 represents December.
setMonth(month)// Sets the month of the date, which is any number 0 or greater. Numbers greater than 11 add years.
setUTCMonth(month)// Sets the month of the UTC date, which is any number 0 or greater. Numbers greater than 11 add years.
getDate()// Returns the day of the month (1 through 31) for the date.
getUTCDate()// Returns the day of the month (1 through 31) for the UTC date.
setDate(date)// Sets the day of the month for the date. If the date is greater than the number of days in the month, the month value also gets increased.
setUTCDate(date)// Sets the day of the month for the UTC date. If the date is greater than the number of days in the month, the month value also gets increased.
getDay()// Returns the date’s day of the week as a number (where 0 represents Sunday and 6 represents Saturday).
getUTCDay()// Returns the UTC date’s day of the week as a number (where 0 represents Sunday and 6 represents Saturday).
getHours()// Returns the date’s hours as a number between 0 and 23.
getUTCHours()// Returns the UTC date’s hours as a number between 0 and 23.
setHours(hours)// Sets the date’s hours. Setting the hours to a number greater than 23 also increments the day of the month.
setUTCHours(hours)// Sets the UTC date’s hours. Setting the hours to a number greater than 23 also increments the day of the month.
getMinutes()// Returns the date’s minutes as a number between 0 and 59.
getUTCMinutes()// Returns the UTC date’s minutes as a number between 0 and 59.
setMinutes(minutes)// Sets the date’s minutes. Setting the minutes to a number greater than 59 also increments the hour.
setUTCMinutes(minutes)// Sets the UTC date’s minutes. Setting the minutes to a number greater than 59 also increments the hour.
getSeconds()// Returns the date’s seconds as a number between 0 and 59.
getUTCSeconds()// Returns the UTC date’s seconds as a number between 0 and 59.
setSeconds(seconds)// Sets the date’s seconds. Setting the seconds to a number greater than 59 also increments the minutes.
setUTCSeconds(seconds)// Sets the UTC date’s seconds. Setting the seconds to a number greater than 59 also increments the minutes.
getMilliseconds()// Returns the date’s milliseconds.
getUTCMilliseconds()// Returns the UTC date’s milliseconds.
setMilliseconds(milliseconds)// Sets the date’s milliseconds.
setUTCMilliseconds(milliseconds)// Sets the UTC date’s milliseconds.
getTimezoneOffset()// Returns the number of minutes that the local time zone is off set from UTC. For example, Eastern Standard Time returns 300. This value changes when an area goes into Daylight Saving Time.