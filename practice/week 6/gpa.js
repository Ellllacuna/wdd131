console.log("gap.js script loaded");

function getGrades(inputSelector) {
    let grade = document.querySelector(inputSelector).value;
    const gradeSplit = grade.split(',').map(letter => letter.trim());
    return gradeSplit;
    console.log("got grades");
}

function lookupGrade(grade) {
    points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    } else if (grade === "C") {
        points = 2;
    } else if (grade === "D") {
        points = 1;
    } else {
        points = 0;
    }
    return points;
}

function calculateGpa(grades) {
    const gpa = grades.map(lookupGrade).reduce((a,b) => a + b,0) / grades.length;
    return gpa
}

function outputGpa(gpa, selector) {
    const output = document.getElementById(selector);
    output.innerHTML = gpa;
}

function clickHandler() {
        const grades = getGrades('#grades');
        const gpa = calculateGpa(grades);
        outputGpa(gpa, 'output');
        console.log("clicked");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);



