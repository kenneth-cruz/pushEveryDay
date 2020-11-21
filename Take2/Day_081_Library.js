function openingTimes(str) {
    var indexed = str.split(' ');
    var day = indexed[0].toLowerCase();
    var time = indexed[1];
    var digits = time.split(':');
    var weekdays = "monday, tuesday, wednesday, thursday, friday, saturday, sunday";
    var indexof = weekdays.indexOf(day);
    var checkit = indexed[0];
    
    console.log(str);
    
    if(indexof == -1 || digits[0] > 23 || digits[1] > 59 || digits[0].length < 2 || digits[1].length < 2) {
      return "Invalid time!";
    } if(indexof != -1 && time >= "08:00" && time < "20:00" && indexof < 46) {
      return "Library closes at 20:00";
    }  if(indexof == 46 && time >= "10:00" && time < "18:00") {
      return "Library closes at 18:00";
    } if(indexof > 46 && time >= "12:00" && time < "16:30") {
      return "Library closes at 16:30";
    } if(day == "monday" && time >= "20:00") { 
      return "Library opens: Tuesday 08:00";
    } if(day == "monday" && time < "08:00") {
      return "Library opens: today 08:00";
    } if(day == "tuesday" && time >= "20:00") {
      return "Library opens: Wednesday 08:00";
    } if(day == "tuesday" && time < "08:00") {
      return "Library opens: today 08:00";
    } if(day == "wednesday" && time >= "20:00") {
      return "Library opens: Thursday 08:00";
    } if(day == "wednesday" && time < "08:00") {
      return "Library opens: today 08:00";
    } if(day == "thursday" && time >= "20:00") {
      return "Library opens: Friday 08:00";
    } if(day == "thursday" && time < "08:00") {
      return "Library opens: today 08:00";
    } if(day == "friday" && time >= "20:00") {
      return "Library opens: Saturday 10:00";
    } if(day == "friday" && time < "08:00") {
      return "Library opens: today 08:00";
    } if(day == "saturday" && time >= "18:00") {
      return "Library opens: Sunday 12:00";
    } if(day == "saturday" && time < "10:00") {
      return "Library opens: today 10:00";
    } if(day == "sunday" && time >= "16:30") {
      return "Library opens: Monday 08:00";
    } if(day == "sunday" && time < "12:00") {
      return "Library opens: today 12:00";
    }
   
  
  }