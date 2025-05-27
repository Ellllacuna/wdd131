const steps = ["one", "two", "three"];
function listTemplate(step) {
    return <li>${step}</li>;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector('#myList').innerHTML = stepsHtml.join(); 

const grades = ['A', 'B', 'C'];
function convertGpaPoint(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    } else if (grade === "C") {
        points = 2;
    }
    return points;
}
const gpaPoints = grades.map(convertGpaPoint);

const gpaTotal = gpaPoints.reduce(((a,b) => a + b));
const gpa = gpaTotal / gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
let filteredFruits = fruits.filter(fruit => fruit.length < 6);


const numbers = [12,34,21,54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);