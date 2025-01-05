const apiKey = '33eecefd1b10230de145a55a134609b8'; // OpenWeatherMap API anahtarını buraya ekle

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById('cityName').textContent = `Weather in ${data.name}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
        } else {
            alert('City not found!');
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
}
