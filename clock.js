console.log("clock page");
/*basically the .gethours or any .get method extracts that particular value from new date /date method and returns .
///let currenttime= Date();--returns the same thing as new date 
//let currenttime=new Date(); --gives me date time and month everything
//console.log(currenttime);*/
function updateclock(){
   let currenttime=new Date();
   let currentHour=currenttime.getHours();
   let currentMinutes=currenttime.getMinutes();
   let currentSeconds=currenttime.getSeconds();
   currentMinutes=(currentMinutes<10?"0":"")+currentMinutes;
   currentHour=(currentHour<10?"0":"")+currentHour;
//FOR knowing the time of the day 
let timeoftheDay=(currentHour<12)?"AM":"PM";
 currentHour=(currentHour<12)?currentHour-13:currentHour;
 currentHour=(currentHour==00)?12:currentHour;
let currenttimeStr=currentHour+":"+currentMinutes+":"+currentSeconds+timeoftheDay;
console.log(currenttimeStr);
//so the content inside the ()holds true then am is printed else pm
document.getElementById("clock").innerHTML=currenttimeStr;

}