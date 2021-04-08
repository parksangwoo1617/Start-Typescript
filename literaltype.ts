const helloWorld = "Hello World";

let hiWorld = "Hi World";

type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if(easing === "ease-in") {

        } else if(easing === "ease-out") {

        } else if(easing === "ease-in-out") {

        } else {

        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");

function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();

declare function setupMap(config: MapConfig): void;

interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8 | 16 | 32;
}

setupMap({ lng: -73.92384, lat: 40.23142, tileSize: 16});