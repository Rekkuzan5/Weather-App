/*
    Open Weather API
    Cameron Stapp
    10/21/2019
    CIS-131
*/

// creates adapter/request instance and opens/requests data
var httpsAdapter;
function callNewData() {
    httpsAdapter = new XMLHttpRequest();
    httpsAdapter.open("get", "https://api.openweathermap.org/data/2.5/weather?id=4409896&units=imperial&APPID=58959b190643de298f8859ea6b946ad9");
    httpsAdapter.send(null);
    httpsAdapter.onreadystatechange = display;
}

// takes data once loaded and formats it into an onbject to be modigied to inject into the html. 
function display() {
    if (httpsAdapter.readyState == 4)
    {
        var weather = httpsAdapter.responseText;
        //console.log(weather);
        var weatherObj = JSON.parse(weather);
        console.log(weatherObj);
        document.getElementById("city").innerHTML = weatherObj.name;
        document.getElementById("temp").innerHTML = "<span><b>Temperature: </b></span> " + weatherObj.main.temp + "&deg;";
        document.getElementById("high").innerHTML = "<span><b>Temperature High: </b></span> " + weatherObj.main.temp_max + "&deg;";
        document.getElementById("low").innerHTML = "<span><b>Temperature Low: </b></span> " + weatherObj.main.temp_min + "&deg;";
        document.getElementById("humidity").innerHTML = "<span><b>Humidity: </b></span> " + weatherObj.main.humidity + "&#37;";
        document.getElementById("skyConditions").innerHTML = "<span><b>Sky Condition: </b></span> " + weatherObj.weather[0].description;
        document.getElementById("wind").innerHTML = "<span><b>Wind Speed: </b></span> " + weatherObj.wind.speed + " mph";
    }
}
