import LinearRegression from "./LinearRegression.js";

export default class Line {
    constructor(ctx, color = "#ffffff") {
        this.color = color;
        this.ctx = ctx;
        // this.prevDataLength = undefined;
        this.yIntercept = undefined;
        this.slope = undefined;
    }
    draw(data, width, height) {
        // if (this.prevDataLength !== data.length) {
        const { yIntercept, slope } = LinearRegression(data);
        this.yIntercept = yIntercept;
        this.slope = slope;
        // }
        const x1 = 0;
        const y1 = this.slope * x1 + this.yIntercept;

        const x2 = width;
        const y2 = this.slope * x2 + this.yIntercept;

        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = this.color;
        this.ctx.moveTo(x1, height - y1);
        this.ctx.lineTo(x2, height - y2);
        this.ctx.stroke();
        this.ctx.closePath();

        // this.prevDataLength = data.length;
    }
}
