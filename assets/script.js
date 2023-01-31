
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
        if(data == null){
            alert("Thanks!")
            return
        }

        console.log(data)
    }).catch(error => console.log(error))
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

// searchByCity("Hstn")

var form = document.getElementsByTagName('form')[0]
form.addEventListener('submit', handleFormSubmit)