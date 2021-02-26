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

const showModal = (modal) => {
    modal.style.display = "block";
}

const hideModal = (modal) => {
    modal.style.display = "none";
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
        modal.querySelector('.modal-title').innerHTML = `${race} track layout`;
        showModal(modal);
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
