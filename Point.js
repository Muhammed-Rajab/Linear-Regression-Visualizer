export default class Point {
    constructor(x, y, mathematicalY) {
        this.x = x;
        this.y = y;
        this.mathematicalY = mathematicalY;
        this.color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    }
}
