import Modal from "./modal";


const  loadJSON = async () => {   
    return new Promise((res, reject) => {
        var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
        xobj.open('GET', '../upcomingRaces/upcomingRaces.json', true);
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
    let modalElement = document.querySelector(".modal");
    const modalTest = new Modal(modalElement);

    upcomingRaceButton.onclick = async() => {
        if (!data[race]){
            return;
        }
        await modalTest.fillData(data[race], race);
        modalTest.showModal();
    }
}

const init = async () => {
    const upcomingRaceData = await loadJSON();

    addOnClickUpcomingRace(upcomingRaceData, 'bahrain');
    addOnClickUpcomingRace(upcomingRaceData, 'italy');

}

init();
