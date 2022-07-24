export default class Grid {
    constructor(
        canvas,
        ctx,
        majorXAt,
        majorYAt,
        minorXAt,
        minorYAt,
        majorLineWidth,
        minorLineWidth,
        majorLineColor = "grey",
        minorLineColor = "grey",
        textColor = "grey"
    ) {
        this.majorXAt = majorXAt;
        this.majorYAt = majorYAt;

        this.minorXAt = minorXAt;
        this.minorYAt = minorYAt;

        this.canvas = canvas;
        this.ctx = ctx;

        this.majorLineColor = majorLineColor;
        this.minorLineColor = minorLineColor;

        this.majorLineWidth = majorLineWidth;
        this.minorLineWidth = minorLineWidth;

        this.textColor = textColor;
    }

    draw() {
        // * Vertical grid
        for (let i = 0; i <= this.canvas.width; i += 1) {
            if (i % this.majorXAt === 0) {
                drawVerticalLine(
                    this.ctx,
                    this.majorLineWidth,
                    this.majorLineColor,
                    i,
                    this.canvas.height
                );
                this.ctx.font = "12px Courier";
                this.ctx.fillStyle = "white";
                this.ctx.fillText(i, i, this.canvas.height - 2);
            }
            if (i % this.minorXAt === 0) {
                drawVerticalLine(
                    this.ctx,
                    this.minorLineWidth,
                    this.minorLineColor,
                    i,
                    this.canvas.height
                );
            }
        }

        // * Horizontal grid
        for (let i = 0; i <= this.canvas.height; i += 1) {
            if (i % this.majorYAt === 0) {
                drawHorizontalLine(
                    this.ctx,
                    this.majorLineWidth,
                    this.majorLineColor,
                    this.canvas.width,
                    i
                );
                this.ctx.font = "12px Courier";
                this.ctx.fillStyle = "white";
                this.ctx.fillText(this.canvas.width - i, 0, i - 2);
            }
            if (i % this.minorYAt === 0) {
                drawHorizontalLine(
                    this.ctx,
                    this.minorLineWidth,
                    this.minorLineColor,
                    this.canvas.width,
                    i
                );
            }
        }
    }
}

function drawVerticalLine(ctx, lw, lc, x, y) {
    ctx.strokeStyle = lc;
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function drawHorizontalLine(ctx, lw, lc, x, y) {
    ctx.strokeStyle = lc;
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(x, y);
    ctx.stroke();
}
