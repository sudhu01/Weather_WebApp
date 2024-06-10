const apikey = "cba1207c6a3c753ca22be1b70525a0b6";

async function get_details(city,key){
    try{
        link = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);

        if(!link.ok){
            document.getElementById("city name").textContent = "Please enter a valid city name";
        }
        data = await link.json();
        console.log(data);
        document.getElementById("city name").textContent = `${data.name}`;
        document.getElementById("temp").textContent = `${(data.main.temp-273).toFixed(2)}°C`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("type").textContent = `${data.weather[0].description}`;
        document.getElementById("emoji").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("city_details").classList.remove("invalid");
        document.getElementById("city_details").classList.add("valid");

    }
    catch(error){
        console.log(error);
        document.getElementById("city name").textContent = "Please enter a valid city name";
        document.getElementById("temp").textContent = null;
        document.getElementById("humidity").textContent = null;
        document.getElementById("type").textContent = null;
        document.getElementById("emoji").src = null;
        document.getElementById("city_details").classList.add("invalid");
        document.getElementById("city_details").classList.remove("valid");
    }

}



async function city_check(city){
    if(city){
        try{
            get_details(city,apikey);
        }
        catch(error){
            console.error(error);
        }   
    }
    else{
        document.getElementById("city name").textContent = "Please enter a valid city name";
        document.getElementById("temp").textContent = null;
        document.getElementById("humidity").textContent = null;
        document.getElementById("type").textContent = null;
        document.getElementById("emoji").src = null;
        document.getElementById("city_details").classList.add("invalid");
        document.getElementById("city_details").classList.remove("valid");

    }
}



function displaydetails(){
    city_name = document.getElementById("city").value.toLowerCase();
    city_check(city_name);
    
}

