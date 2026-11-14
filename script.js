const apiKey = "6d52f5f35f054535a23195516261707";

async function getWeather() {

    const city = document.getElementById("city").value.trim();

    if(city === ""){
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        if(data.error){
            alert(data.error.message);
            return;
        }

        document.getElementById("weatherCard").style.display = "block";

        document.getElementById("location").innerHTML =
            `${data.location.name}, ${data.location.country}`;

        document.getElementById("temperature").innerHTML =
            `${data.current.temp_c}°C`;

        document.getElementById("condition").innerHTML =
            data.current.condition.text;

        document.getElementById("icon").src =
            "https:" + data.current.condition.icon;

    }

    catch(error){

        alert("Unable to fetch weather.");

        console.log(error);

    }

}