import {
  changeBoxContent,
  currentForecast,
  formatDate,
  getWeekDays,
  hourlyFrocest,
  openLocations,
  sevenDayForecast,
} from "./functions.js";

function changeGetCity(city) {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=196cbe371f1c40f9ba3113741241402&q=${city}&days=7&aqi=yes&alerts=no`
  )
    .then((respons) => respons.json())
    .then((data) => {
      changeBoxContent();
      getWeekDays();
      currentForecast(data);
      sevenDayForecast(data);
      hourlyFrocest(data);
      openLocations();
      formatDate();
    });
}

changeGetCity("tbilisi");

let getCityFromLi = document.getElementsByClassName("city");
for (let i = 0; i < getCityFromLi.length; i++) {
  let getCity = getCityFromLi[i].textContent
    .toLowerCase()
    .replace("akhaltsikhe", "41.638889, 42.986111")
    .replace("lanchkhuti", "42.0875, 42.036111")
    .replace("ozurgeti", "41.926944, 42.000556")
    .replace("mtskheta", "41.85, 44.716667")
    .replace("sachkhere", "42.338889, 43.403889")
    .replace("kobuleti", "41.811111, 41.775278")
    .replace("ushguli", "42.917797, 43.015672")
    .replace("tskhinvali", "42.225, 43.97")
    .replace("chokhatauri", "42.018889, 42.239444")
    .replace("chiatura", "42.290278, 43.281944");

  getCityFromLi[i].addEventListener("click", () => {
    changeGetCity(getCity);
    let currentCity = document.getElementById("currentCity");
    currentCity.textContent = getCityFromLi[i].textContent;
    let selectloc = document.getElementById("selectloc");
    selectloc.style.bottom = "-100%";
    selectloc.style.height = "0";
  });
}
let subbuticon = document.querySelectorAll("#git subbuticon");
let searchInput = document.querySelectorAll("input");
for (let p = 0; p < searchInput.length; p++) {
  subbuticon[p].addEventListener("click", () => {
    if (1 === 1) {
      let currentCity = document.getElementById("currentCity");
      currentCity.textContent =
        searchInput[p].value.charAt(0).toUpperCase() +
        searchInput[p].value.slice(1);
      changeGetCity(searchInput[p].value);
    }
  });
  searchInput[p].addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      let currentCity = document.getElementById("currentCity");
      currentCity.textContent =
        searchInput[p].value.charAt(0).toUpperCase() +
        searchInput[p].value.slice(1);
      changeGetCity(searchInput[p].value);
    }
  });
}
