import getWeatherAsync from "./getWeatherApi";

export default class Modal {
    constructor(modal) {
        this.modal = modal;
        this.modalCloseButton = modal.querySelector(".modal-close-btn")

        this.init();
    }

    init () {
        this.modalCloseButton.onclick = () => {
            this.hideModal();
        }

        this.modal.onclick = (e) => {
            if (e.target === this.modal)
            {
                this.hideModal();
            }
        }
    }

    async fillData(data, race) {
        this.modal.querySelector('.modal-race-circuit').innerHTML = `Circuit: ${data.circuit}`;
        this.modal.querySelector('.modal-track-layout').setAttribute('src', data.trackSrc);
        this.modal.querySelector('.modal-race-length').innerHTML = `Length: ${data.length}`;
        this.modal.querySelector('.modal-race-laps').innerHTML = `Laps: ${data.laps}`;
        this.modal.querySelector('.modal-race-race-distance').innerHTML = `Race distance: ${data.raceDistance}`;
        this.modal.querySelector('.modal-title').innerHTML = `${race} track layout`;

        await this.fillWeatherData(race)
    }

    async fillWeatherData(race) {
        const weatherData = await getWeatherAsync(race);
        if (!weatherData) {
            return;
        }
        this.modal.querySelector('.modal-temp').innerHTML = `${weatherData?.main?.temp}&deg;C`;
    }

    async showModal(race) {
        this.modal.style.display = "block";
    }
    
    hideModal() {
        this.modal.style.display = "none";
    }

}
