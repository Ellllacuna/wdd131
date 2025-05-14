const PI = 3.14;
let radius = 3;

function circleArea(radius) {
    const area = radius * PI;
    return area;
}

area = circleArea(3);
console.log('Area 1:', area);

area - circleArea(4);
console.log('Area 2:', area);