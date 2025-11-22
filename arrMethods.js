
//Map method ... creates a new array foreach element's function invocation.

let names = ['Rekha','Sam','Sally','Eric','Nicholas'];
let lengths = names.map(function(element){
    return element.length;
});
console.log(lengths);

//reduce Method .... take all values and reduce to 1 single value.

let sum = lengths.reduce(function(accumulator, currentValue){
return  accumulator+currentValue;
});
console.log(sum);

// forEach Method ... doesnot return a new array

names.forEach(function(element){
    element = element + ':';
console.log(element);
});

//filter returns a boolean value .. a new array

let evens = names.filter(function(element){
 return element.length % 2 == 0;
});
console.log(evens);

//splice Method ... alter the contents od an array by adding. modifying and removing elements from an array.

let removedElement = names.splice(1,1);
console.log(removedElement);

// every Method

let fullName = "Rekha" + " " + "Yellenki"; 
let gradesArray = [100, 79, 80, 90, 100];
const isPassing = (currentValue) => currentValue >= 70;

console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let i = 0; i < gradesArray.length; i++) { 
console.log("\t" + (i+1) + ": " + gradesArray[i]);
}
console.log("Evaluation: ");

if (gradesArray.every(isPassing)) {
console.log('\tEvery grade is a passing grade (>= 70)!');
} else {
console.log('\tNot all grades are passing.  A passing grade is >= 70!');
}

fullName = "Mary" + " " + "Brown";
gradesArray = [100, 79, 80, 90, 55]
console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let i = 0; i < gradesArray.length; i++) { 
console.log("\t" + (i+1) + ": " + gradesArray[i]);
}
console.log("Evaluation: ");

if (gradesArray.every(isPassing)) {
console.log('\tEvery grade is a passing grade (>= 70)!');
} else {
console.log('\tNot all grades are passing.  A passing grade is >= 70!');
}