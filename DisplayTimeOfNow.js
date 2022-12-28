var today = new Date();
var dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
day = today.getDay();
console.log("Today is " + dayList[day]);

y = today.getFullYear();
mo = today.getMonth() + 1;
d = today.getDate();
h = today.getHours();
m = today.getMinutes();
s = today.getSeconds();
prepand = h>12? " pm : ":" am : ";
h = (h >= 12)? h - 12: h

//console.log("Now is " + y + ' : ' + mo + ' : '+ d + ' : ' + h + prepand + m + ' : '+ s);
console.log(`Now is ${y} year, ${mo} month, ${d}th, ${h}${prepand}${m}:${s}`);