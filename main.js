import Point from "./Point.js";
import Line from "./Line.js";
const log = console.log;

// * DOM Element selection
const clearBtn = document.querySelector(".clear-btn");
const randomizeBtn = document.querySelector(".randomize-btn");
const slopeText = document.querySelector(".slope");
const yInterceptText = document.querySelector(".y-intercept");
const equationText = document.querySelector(".equation");

// * Canvas setup
const canvas = document.querySelector("#canvas");
canvas.width = 500;
canvas.height = 500;
const canvasLeft = canvas.offsetLeft + canvas.clientLeft;
const canvasTop = canvas.offsetTop + canvas.clientTop;
const ctx = canvas.getContext("2d");

const { width: WIDTH, height: HEIGHT } = canvas;

// * Code starts here
const pointsArray = [];
const line = new Line(ctx, "white");

// * Helper Functions
const clearCanvas = () => {
    ctx.fillStyle = "#171414";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
};
clearCanvas();

function drawPoints() {
    pointsArray.forEach((point) => {
        ctx.beginPath();
        ctx.fillStyle = point.color;
        ctx.arc(point.x, point.y, 6, 0, Math.PI * 2, false);
        ctx.fill();
    });
}

const clearPointsArray = () => pointsArray.splice(0, pointsArray.length);

const updateRegressionResults = () => {
    slopeText.textContent = `Slope: ${line.slope?.toFixed(2)}`;
    slopeText.setAttribute("title", line.slope);

    yInterceptText.textContent = `Y-Intercept: ${line.yIntercept?.toFixed(2)}`;
    yInterceptText.setAttribute("title", line.yIntercept);

    equationText.textContent = `Equation: y = ${line.slope?.toFixed(
        2
    )}*x + ${line.yIntercept?.toFixed(2)}`;
    equationText.setAttribute(
        "title",
        `y = ${line.slope}*x + ${line.yIntercept}`
    );
};

// * Event Listeners
canvas.addEventListener("click", (e) => {
    const x = e.pageX - canvasLeft;
    const y = e.pageY - canvasTop;
    pointsArray.push(new Point(x, y, HEIGHT - y));
});

clearBtn.addEventListener("click", clearPointsArray);

randomizeBtn.addEventListener("click", () => {
    clearPointsArray();
    for (let i = 0; i < Math.floor(Math.random() * 40 + 10); i++) {
        const x = Math.floor(Math.random() * WIDTH);
        const y = Math.floor(Math.random() * HEIGHT);
        pointsArray.push(new Point(x, y, HEIGHT - y));
    }
});

// * Animation Loop
function draw() {
    clearCanvas();
    // * Draw the points from pointsArray
    // * Draw best fitting line for the points

    drawPoints();
    updateRegressionResults();
    line.draw(pointsArray, WIDTH, HEIGHT);
    requestAnimationFrame(draw);
}

draw();
