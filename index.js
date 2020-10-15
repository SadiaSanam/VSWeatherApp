function formatDate(date) {
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let month = [
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
    "December"
  ];
  let year = date.getFullYear();
  let day = date.getDay();
  let month = date.getMonth();
  let date = date.getDate();


  let formattedDate = `${day}, ${date} ${month} ${year}`;

  return formattedDate
  };

  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(date);

  function formatTime(now){
    let hour = now.getHours();
    if (hour < 10){
      hour = `0${hour}`
    }
    let minute = now.getMinutes();
    if (minute < 10) {
      minute = `0${minute}`
    }
    return `${hour}:${minute}`
  } 
  let timeElement = document.querySelector("#time");
  time.innerHTML = formatTime(now);

  function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let cityInput = document.querySelector("#city-input");
    cityElement.innerHTML = cityInput.value;
  }
  
  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 66;
  }
  
  function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 19;
  }
   
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", convertToFahrenheit);
  
  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", convertToCelsius);
  