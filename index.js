// import * as upcomingRacesData from './upcomingRaces/upcomingRaces.json';

const  loadJSON = async () => {   
    return new Promise((res, reject) => {
        var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
        xobj.open('GET', './upcomingRaces/upcomingRaces.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                res(JSON.parse(xobj.responseText));
              }
        };
        xobj.send(null);
    })
}

const addOnClickUpcomingRace  = (data, race) => {
    let upcomingRaceButton = document.getElementById(`upcoming-race-${race}`);
    let modal = document.querySelector(".modal");
    let modalCloseButton = modal.querySelector(".modal-close-btn")

    upcomingRaceButton.onclick = () => {
        if (!data[race]){
            return;
        }
        modal.querySelector('.modal-track-layout').setAttribute('src', data[race].trackSrc);
        modal.style.display = "block";
        console.log(data.bahrain);
    }

    modalCloseButton.onclick = () => {
        modal.style.display = "none";
    }
}

const init = async () => {
    const upcomingRaceData = await loadJSON();

    addOnClickUpcomingRace(upcomingRaceData, 'bahrain');
    addOnClickUpcomingRace(upcomingRaceData, 'italy');
}

init();


