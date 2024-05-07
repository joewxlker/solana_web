export class Shaq {

    canvas_element: HTMLCanvasElement;
    images: HTMLImageElement[] = [];
    imagePositions: {x: number, y: number, loaded: boolean}[] = [];
    context: CanvasRenderingContext2D;
    interval: number;

    constructor() {
        const canvas = document.getElementById("shaq_canvas");
        if (!canvas) {
            throw "canvas is null";
        }
        this.canvas_element = canvas as HTMLCanvasElement;
        const context = this.canvas_element.getContext('2d');
        if (!context) {
            throw "context is null";
        }
        this.context = context;

        // Adjust canvas size and use window.devicePixelRatio for sharpness
        this.canvas_element.width = window.innerWidth * window.devicePixelRatio;
        this.canvas_element.height = window.innerHeight * window.devicePixelRatio;
        this.canvas_element.style.width = `${window.innerWidth}px`;
        this.canvas_element.style.height = `${window.innerHeight}px`;
        this.context.scale(window.devicePixelRatio, window.devicePixelRatio);

        const base_path = "/graphics/head_id.png";
        for (let i = 0; i < 15; i++) {
            const path = base_path.replace("id", i.toString());
            const image = new Image();
            image.src = path;
            this.images.push(image);
            this.imagePositions[i] = {x: 0, y: 0, loaded: false};  // Initialize with default positions
            image.onload = () => {
                const x = Math.random() * (this.canvas_element.width / window.devicePixelRatio - 100);
                const y = Math.random() * (this.canvas_element.height / window.devicePixelRatio - 100);
                this.imagePositions[i] = {x, y, loaded: true};  // Update position once image is loaded
                this.context.drawImage(image, x, y, 100, 100);
            };
        }

        this.interval = window.setInterval(() => {
            this.drawImages();
        });
    }

    drawImages() {
        this.context.clearRect(0, 0, this.canvas_element.width, this.canvas_element.height);
        this.images.forEach((image, index) => {
            const pos = this.imagePositions[index];
            if (pos?.loaded) {
                // Slightly modify x and y to create a small movement
                pos.x += (Math.random() - 0.5) * 10;
                pos.y += (Math.random() - 0.5) * 10;
                // Ensure images stay within canvas boundaries
                pos.x = Math.max(0, Math.min(pos.x, this.canvas_element.width / window.devicePixelRatio - 100));
                pos.y = Math.max(0, Math.min(pos.y, this.canvas_element.height / window.devicePixelRatio - 100));
                this.context.drawImage(image, pos.x, pos.y, 100, 100);
            }
        });
    }

    destroy() {
        window.clearInterval(this.interval);
        this.context.clearRect(0, 0, this.canvas_element.width, this.canvas_element.height);
    }
}
