for (let year = 1820; year <= 2022; year++) {
  let options = document.createElement("OPTION");
  document.getElementById("year").appendChild(options).innerHTML = year;
}

for (let day = 1; day <= 31; day++) {
  let options = document.createElement("OPTION");
  document.getElementById("day").appendChild(options).innerHTML = day;
}

for (let month = 1; month <= 12; month++) {
  let options = document.createElement("OPTION");
  document.getElementById("month").appendChild(options).innerHTML = month;
}
