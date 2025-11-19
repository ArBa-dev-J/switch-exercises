let weekday = +prompt("Write a weekday in numbers");

function daysUntilWeekend(weekday) {
  switch (weekday) {
    case 1:
      alert("5 days left!");
      return weekday;
    case 2:
      alert("4 days left!");
      return weekday;
    case 3:
      alert("3 days left!");
      return weekday;
    case 4:
      alert("2 days left!");
      return weekday;
    case 5:
      alert(" 1 day left!");
      return weekday;
    case 6:
      alert("Its weekend");
      return weekday;
    case 7:
      alert("Its sunday!");
      return weekday;
    default:
      alert("ERROR");
      return;
  }
}

daysUntilWeekend(weekday);
