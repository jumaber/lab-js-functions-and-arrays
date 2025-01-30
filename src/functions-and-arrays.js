// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    biggestNumber = Math.max(num1, num2); // using Math.max with the two numbers to determine the biggest number
    return biggestNumber;
}

let num1 = 22; 
num2 = 30;

console.log(maxOfTwoNumbers(num1, num2))





// Iteration 2 | Find the Longest Word

function findLongestWord(arr) {

    if (arr.length === 0){
        return null; // Return Null if the array is empty
    }

    let words = ""; // declare the variable words to store the data in it

    for (let i = 0; i < arr.length; i++){ // run a loop through every word of the array
        if (words.length < arr[i].length) { // compare the length of each word to each looped word of the array
            words = arr[i] // then the word stored in the variable words is the longest in the array
        }
    }
return words;
}

const arr = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
console.log(findLongestWord(arr));



// Iteration 3 | Sum Numbers

function sumNumbers(arr) {

    let addition = 0; // declare variable

    for (let i = 0; i < arr.length; i++){ //loop through the array
        addition += arr[i];  // add all the numbers in the array and store them into the addition variable
    }
    return addition
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
console.log(sumNumbers(numbers));




// Iteration 4 | Numbers Average

function averageNumbers(arr) {

    if (arr.length === 0){
        return 0; // Return 0 if the array is empty
    }

    let average = 0; // declare variable

    for (let i = 0; i < arr.length; i++){ //loop through the array for each object
        average += arr[i]; //add all of the objects/numbers
    }
    return average / arr.length // divide the total. If I would have out it in the previous line I'd be dividing each number in 2, instead of the total.
}

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
console.log(averageNumbers(numbers2));





// Iteration 5 | Find Elements

function doesWordExist(arr, word) {

    if (arr.length === 0){
        return null; // Return 0 if the array is empty
    }

        if (arr.includes(word)){
            return true;
        }        
            else{
                return  false;
            }
    }
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
console.log(doesWordExist(words2));

