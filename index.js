const  loadJSON = async () => {   
    return new Promise((res, reject) => {
        var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
        xobj.open('GET', './upcomingRaces/upcomingRaces.json', true);
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                res(JSON.parse(xobj.responseText));
              }
        };
        xobj.send(null);
    })
}

getWeatherAsync = async (cityName) => {
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

const showModal = async (modal, race) => {
    
    modal.style.display = "block";
}

const hideModal = (modal) => {
    modal.style.display = "none";
}

const fillWeatherData = async (modal, race) => {
    const weatherData = await getWeatherAsync(race);
    if (!weatherData) {
        return;
    }
    modal.querySelector('.modal-temp').innerHTML = `${weatherData?.main?.temp}&deg;C`;
}

const addOnClickUpcomingRace  = (data, race) => {
    let upcomingRaceButton = document.getElementById(`upcoming-race-${race}`);
    let modal = document.querySelector(".modal");
    let modalCloseButton = modal.querySelector(".modal-close-btn")

    upcomingRaceButton.onclick = async() => {
        if (!data[race]){
            return;
        }
        modal.querySelector('.modal-track-layout').setAttribute('src', data[race].trackSrc);
        modal.querySelector('.modal-race-circuit').innerHTML = `Circuit: ${data[race].circuit}`;
        modal.querySelector('.modal-race-length').innerHTML = `Length: ${data[race].length}`;
        modal.querySelector('.modal-race-laps').innerHTML = `Laps: ${data[race].laps}`;
        modal.querySelector('.modal-race-race-distance').innerHTML = `Race distance: ${data[race].raceDistance}`;
        modal.querySelector('.modal-title').innerHTML = `${race} track layout`;

        await fillWeatherData(modal, race);
        showModal(modal, race);
    }

    modalCloseButton.onclick = () => {
        hideModal(modal);
    }
    modal.onclick = (e) => {
        if (e.target === modal)
        {
            hideModal(modal);
        }
    }
}

const init = async () => {
    const upcomingRaceData = await loadJSON();

    addOnClickUpcomingRace(upcomingRaceData, 'bahrain');
    addOnClickUpcomingRace(upcomingRaceData, 'italy');

}

init();
