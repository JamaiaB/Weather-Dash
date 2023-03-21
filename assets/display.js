const apiKey = "YOUR_API_KEY";
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const weatherCards = document.querySelector(".weather-cards");

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  const city = searchInput.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      weatherCards.innerHTML = "";
      const forecastList = data.list;
      for (let i = 0; i < 5; i++) {
        const forecast = forecastList[i];
        const date = new Date(forecast.dt * 1000);
        const temperature = Math.round(forecast.main.temp - 273.15);
        const description = forecast.weather[0].description;
        const icon = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        const card = `
          <div class="weather-card">
            <h3>${date.toDateString()}</h3>
            <img src="${icon}" alt="${description}">
            <p>${description}</p>
            <p>${temperature}°C</p>
          </div>
        `;
        weatherCards.innerHTML += card;
      }
    })
    .catch(error => {
      console.error(error);
    });
});
