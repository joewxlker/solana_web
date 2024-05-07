export class Music {

    public music_element: HTMLAudioElement;

    constructor() {
        this.music_element = document.getElementById("music-player") as HTMLAudioElement;
        window.addEventListener("click", this.handleClick.bind(this));
    }

    handleClick() {
        this.music_element.play();
    }

    destroy() {
        window.removeEventListener("click", this.handleClick);
    }
}