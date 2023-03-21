
function searchByCity(searchTerm){
    var searchTerm = 'Houston';
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=c98190d346452cf140fbc945266f6340&units=imperial`
    fetch(url).then(response => {
        console.log(response)
        if(!response.ok){
            alert("Please check your city!")
            return null
        }
        return response.json()
    }).then(data => {
            const forecastList = data.list;
            for (let i = 0; i < forecastList.length; i += 8) {
              const forecast = forecastList[i];
              const date = new Date(forecast.dt * 1000);
              const temperature = forecast.main.temp;
              const description = forecast.weather[0].description;
              console.log(`${date.toDateString()}: ${temperature}°C ${description}`);
            }
            return
        }

    ).catch(error => console.log(error))
}

function handleFormSubmit(event){
    event.preventDefault()
    console.log(event.target)
    var input = document.getElementById('cname')
    console.log(input.value)
    if(!input.value){
        alert("Please enter a city!")
        return
    }
    searchByCity(input.value)    
}
//  var url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=c98190d346452cf140fbc945266f6340&units=imperial`
//  var searchTerm = 'Houston';
 
function displayWeather (searchTerm){
fetch(url)
var url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=c98190d346452cf140fbc945266f6340&units=imperial`
var searchTerm = 'Houston'

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
}
// searchByCity("Hstn")

var form = document.getElementsByTagName('form')[0]
form.addEventListener('submit', handleFormSubmit)