export default function LinearRegression(data) {
    const [xMean, yMean] = mean(data);
    const slope = getSlope(xMean, yMean, data);
    const yIntercept = getYIntercept(slope, xMean, yMean);

    return { yIntercept, slope, xMean, yMean };
}

function mean(data) {
    let xSum = 0;
    let ySum = 0;
    data.forEach((point) => {
        xSum += point.x;
        ySum += point.mathematicalY;
    });
    const xMean = xSum / data.length;
    const yMean = ySum / data.length;
    return [xMean, yMean];
}

function getSlope(xMean, yMean, data) {
    let numerator = 0;
    let denominator = 0;
    data.forEach((point) => {
        numerator += (point.x - xMean) * (point.mathematicalY - yMean);
        denominator += Math.pow(point.x - xMean, 2);
    });
    return numerator / denominator;
}

function getYIntercept(slope, xMean, yMean) {
    return yMean - slope * xMean;
}
