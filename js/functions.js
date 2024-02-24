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
  let weathertype = document.getElementById("weathertype");
  let mineimage = document.getElementById("mineimage");

  MineTemp.textContent = `${Math.floor(getData.current.temp_c)}°`;
  weathertype.textContent = getData.current.condition.text;
  mineimage.src = getData.current.condition.icon;
  mineimage.alt = getData.current.condition.text;
}

export function sevenDayForecast(getData) {
  let firstweekdayicon = document.getElementsByClassName("firstweekdayicon");
  let firstweekdaydegmin =
    document.getElementsByClassName("firstweekdaydegmin");
  let firstweekdaydegmax =
    document.getElementsByClassName("firstweekdaydegmax");
  let footer = document.getElementsByClassName("footer")[0];
  let moredetails = document.getElementsByClassName("moredetails")[0];
  let lessdetails = document.getElementsByClassName("lessdetails")[0];
  let flexdeg = document.querySelectorAll('#flexdeg');

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
    moredetails.addEventListener("click", () => {
      moredetails.style.display = "none";
      lessdetails.style.display = "block";
      footer.style.height = "77vh";
      flexdeg[u].innerHTML = `
      <p class="firstweekdaydegmin">Min temp: ${Math.floor(
        getData.forecast.forecastday[u].day.mintemp_c
      )}°</p>
      <p class="firstweekdaydegmax">Max temp: ${Math.floor(
        getData.forecast.forecastday[u].day.maxtemp_c
      )}°</p>
      <ul class="detinfo"><p><span>weather:</span> ${getData.forecast.forecastday[u].day.condition.text}</p>
      <p><span>RealFeel:</span> ${Math.floor(
        getData.forecast.forecastday[u].hour[13].feelslike_c
      )}°</p>
      <p><span>Rain chance:</span> ${getData.forecast.forecastday[u].day.daily_chance_of_rain}%</p>
      <p><span>Snow chance:</span> ${getData.forecast.forecastday[u].day.daily_chance_of_snow}%</p>
      <p><span>Max Wind:</span> ${getData.forecast.forecastday[u].day.maxwind_kph} kph</p>
      <p><span>Avg Humidity:</span> ${getData.forecast.forecastday[u].day.avghumidity}%</p>
      <p><span>Sunrise:</span> ${getData.forecast.forecastday[u].astro.sunrise}</p>
      <p><span>Sunset:</span> ${getData.forecast.forecastday[u].astro.sunset}</p>
      <p><span>Moon phase:</span> ${getData.forecast.forecastday[u].astro.moon_phase}</p></ul>`;
    });
    lessdetails.addEventListener("click", () => {
      moredetails.style.display = "block";
      lessdetails.style.display = "none";
      footer.style.height = "45vh";
      let remcreatedetInfo = document.getElementsByClassName("detinfo");
      firstweekdaydegmin[u].textContent = `${Math.floor(
        getData.forecast.forecastday[u].day.mintemp_c
      )}°`;
      firstweekdaydegmax[u].textContent = `${Math.floor(
        getData.forecast.forecastday[u].day.maxtemp_c
      )}°`;
      for( let p = 0; p < remcreatedetInfo.length; p++) {
        remcreatedetInfo[p].remove();
      }
    });
  }
}

export function hourlyFrocest(getData) {
  let firstweekdayiconhour = document.getElementsByClassName(
    "firstweekdayiconhour"
  );
  let firstweekdaydeghour = document.getElementsByClassName(
    "firstweekdaydeghour"
  );
  let moredetails = document.getElementsByClassName("moredetails")[0];
  let lessdetails = document.getElementsByClassName("lessdetails")[0];
  let flexdeg = document.querySelectorAll('.hourli #flexdeg');
  let footer = document.getElementsByClassName("footer")[0];
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

    moredetails.addEventListener("click", () => {
      moredetails.style.display = "none";
      lessdetails.style.display = "block";
      footer.style.height = "77vh";
      flexdeg[i].innerHTML = `
      <p class="firstweekdaydeghour">temp: ${Math.floor(
        getData.forecast.forecastday[0].hour[i].temp_c
      )}°</p>
      <ul class="detinfo"><p><span>weather:</span> ${getData.forecast.forecastday[0].hour[i].condition.text}</p>
      <p><span>RealFeel:</span> ${Math.floor(
        getData.forecast.forecastday[0].hour[i].feelslike_c
      )}°</p>
      <p><span>Rain chance:</span> ${getData.forecast.forecastday[0].hour[i].chance_of_rain}%</p>
      <p><span>Snow chance:</span> ${getData.forecast.forecastday[0].hour[i].chance_of_snow}%</p>
      <p><span>Wind:</span> ${getData.forecast.forecastday[0].hour[i].wind_kph} kph</p>
      <p><span>Wind dir:</span> ${getData.forecast.forecastday[0].hour[i].wind_dir}</p>
      <p><span>Humidity:</span> ${getData.forecast.forecastday[0].hour[i].humidity}%</p></ul>`;
    });
    lessdetails.addEventListener("click", () => {
      moredetails.style.display = "block";
      lessdetails.style.display = "none";
      footer.style.height = "45vh";
      let remcreatedetInfo = document.getElementsByClassName("detinfo");
      firstweekdaydeghour[i].textContent = `${Math.floor(
        getData.forecast.forecastday[0].hour[i].temp_c
      )}°`;
      for( let p = 0; p < remcreatedetInfo.length; p++) {
        remcreatedetInfo[p].remove();
      }
    });
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
    selectloc.style.height = "70vh";
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


export function horScroll() {
  const scrollContainer = document.querySelectorAll("#sevendays");
  
  for(let i = 0; i < 2; i++) {
    scrollContainer[i].addEventListener("wheel", (evt) => {
        evt.preventDefault();
        if (evt.deltaY >= -15 && evt.deltaY <= 15) {
        scrollContainer[i].scrollLeft += (evt.deltaY * 40);}
        
        else {
            scrollContainer[i].scrollLeft += (evt.deltaY * 5);
        }
    });
  }
}