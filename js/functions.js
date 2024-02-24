export function getWeekDays() {
  let now = new Date();
  let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let firstweekday = document.getElementsByClassName("firstweekday");
  for (let i = 0; i < 7; i++) {
    let dayIndex = (now.getDay() + i) % 7;
    let currentDay = daysOfWeek[dayIndex];
    firstweekday[i].textContent = currentDay;
  }
}

export function currentForecast(getData) {
  let MineTemp = document.getElementById("degree");
  let mineimage = document.getElementById("mineimage");
  let curmax = document.getElementById("curmax");
  let curmin = document.getElementById("curmin");
  let hum = document.getElementById("mineimage");
  let clou = document.getElementById("clou");
  let win = document.getElementById("win");
  let h1current = document.getElementById("h1current");

  MineTemp.textContent = `${Math.floor(getData.current.temp_c)}°`;
  mineimage.src = getData.current.condition.icon;
  mineimage.alt = getData.current.condition.text;
  h1current.textContent = getData.current.condition.text;
  curmax.textContent = getData.forecast.forecastday[0].day.maxtemp_c;
  curmin.textContent = getData.forecast.forecastday[0].day.mintemp_c;
  hum.textContent = getData.current.humidity;
  clou.textContent = getData.current.cloud;
  win.textContent = getData.current.wind_kph;
}

export function sevenDayForecast(getData) {
  let firstweekdayicon = document.getElementsByClassName("firstweekdayicon");
  let firstweekdaydegmin =
    document.getElementsByClassName("firstweekdaydegmin");
  let firstweekdaydegmax =
    document.getElementsByClassName("firstweekdaydegmax");


  for (let u = 0; u < firstweekdaydegmin.length; u++) {
    firstweekdayicon[u].src =
      getData.forecast.forecastday[u].day.condition.icon;
    firstweekdaydegmin[u].textContent = `${Math.floor(
      getData.forecast.forecastday[u].day.mintemp_c
    )}°`;
    firstweekdaydegmax[u].textContent = `${Math.floor(
      getData.forecast.forecastday[u].day.maxtemp_c
    )}°`;
    firstweekdayicon[u].alt =
      getData.forecast.forecastday[u].day.condition.text;
  }
}

export function hourlyFrocest(getData) {
  let firstweekdayiconhour = document.getElementsByClassName(
    "firstweekdayiconhour"
  );
  let firstweekdaydeghour = document.getElementsByClassName(
    "firstweekdaydeghour"
  );

  let hourfor = document.getElementsByClassName("hourfor");
  let now = new Date();
  let hours = ("0" + (now.getHours() % 24 || 24)).slice(-2);
  let getHourFromLi = document.getElementsByClassName("hourli");
  for (let i = 0; i < firstweekdayiconhour.length; i++) {
    let getHoursFroJson =
      getData.forecast.forecastday[0].hour[i].time.split(" ")[1];
    hourfor[i].textContent = getHoursFroJson;

    if (hours > hourfor[i].textContent) {
      getHourFromLi[i].style.display = "none";
    }

    firstweekdayiconhour[i].src =
      getData.forecast.forecastday[0].hour[i].condition.icon;
    firstweekdayiconhour[i].alt =
      getData.forecast.forecastday[0].hour[i].condition.text;
    firstweekdaydeghour[i].textContent = `${Math.floor(
      getData.forecast.forecastday[0].hour[i].temp_c
    )}°`;

  }
}

export function changeBoxContent() {
  let box1 = document.getElementById("box1");
  let box12 = document.getElementById("box12");
  let sevendayclick = document.getElementById("sevendayclick");
  let hourlyclick = document.getElementById("hourlyclick");
  let headnav = document.getElementById("headnav");

  hourlyclick.addEventListener("click", () => {
    box1.style.display = "none";
    box12.style.display = "block";
    headnav.classList.add("changeBorderBottom");
  });

  sevendayclick.addEventListener("click", () => {
    box1.style.display = "block";
    box12.style.display = "none";
    headnav.classList.remove("changeBorderBottom");
  });
}

export function openLocations() {
  let selectloc = document.getElementById("selectloc");
  let closemodal = document.getElementById("closemodal");
  let changeloc = document.getElementsByClassName("changeloc")[0];
  changeloc.addEventListener("click", () => {
    selectloc.style.bottom = "0";
    selectloc.style.left = "50%";
    selectloc.style.height = "70vh";
    selectloc.style.width = "30%";
  });
  closemodal.addEventListener("click", () => {
    selectloc.style.bottom = "-100%";
    selectloc.style.height = "0";
  });
}

export function formatDate() {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var currentDate = new Date();
  var dayOfWeek = currentDate.getDay();
  var dayOfMonth = currentDate.getDate();
  var month = currentDate.getMonth();
  var formattedDate =
    dayNames[dayOfWeek] + ", " + dayOfMonth + " " + monthNames[month];
  document.getElementById("formattedDate").textContent = formattedDate;
}


