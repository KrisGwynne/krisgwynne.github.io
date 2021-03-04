const getWeatherAsync = async (cityName) => {
    const APIKey = "67bbc71d06335597f02d676c338fdd65"
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`;
    return new Promise((res, rej) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false);
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                res(JSON.parse(xmlHttp.responseText));
            }
        }
        xmlHttp.send(null);
    });
};

export default getWeatherAsync;