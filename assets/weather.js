const city = "New York";
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c98190d346452cf140fbc945266f6340&units=imperial`;

// api call to search for the weather
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const forecastList = data.list;
    for (let i = 0; i < forecastList.length; i += 8) {
      const forecast = forecastList[i];
      const date = new Date(forecast.dt * 1000);
      const temperature = forecast.main.temp;
      const description = forecast.weather[0].description;
      console.log(`${date.toDateString()}: ${temperature}°C ${description}`);
    }
  })
  
  .catch(error => {
    console.error(error);
  });
  
  // api call to display the weather
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const forecastList = data.list;
      const weatherCards = document.querySelector(".weather-cards");
      for (let i = 0; i < 5; i++) {
        const forecast = forecastList[i];
        const date = new Date(forecast.dt * 1000);
        const temperature = forecast.main.temp;
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
  