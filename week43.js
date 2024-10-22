// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree(height){
    let width = "*";
    let space = "";
    let spaceReduction = 0;

    for (let i = 0; i < height; i++){
        space += " ";
    }

    if (height < 5){
        for (let i = 0; i < height; i++){
            if (i == height - 1){
                console.log(space + "x"); 
            } else {
                console.log(space.slice(spaceReduction) + width);
                width += "**";
                spaceReduction += 1;
            }
        }
    } else {
        for (let i = 0; i < height; i++){
            if (i >= height * 0.8){
                console.log(space + "x");
            } else {
                console.log(space.slice(spaceReduction) + width);
                width += "**";
                spaceReduction += 1;
            }
        }
    }    
}

/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function arrow(size){
    let arrowStars = "*";
    let arrowStarsReduction = 1;

    for (let i = 0; i < size; i++){
        console.log(arrowStars);
        arrowStars += "*";
    }

    for (let i = 0; i < size - 1; i++){
        console.log(arrowStars.slice(arrowStarsReduction));
        arrowStarsReduction += 1;
    }
}

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");

function drawBox(n, m){
    let lengthSide = "+";
    let emptySpace = "";

    for(let i = 0; i < n * 4; i++){
        lengthSide += "-";
        emptySpace += " ";
    }

    lengthSide += "+";

    console.log(lengthSide);
    for (let i = 0; i < m; i++){
        console.log("|" + emptySpace + "|");
    }
    console.log(lengthSide);

    
}


/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function heterogramCheck(word){
    let heterogram = true;
    let letters = [...word];

    for (let i = 0; i < letters.length; i++){
        for (let j = 0; j < letters.length; j++){
            if (letters[i] == letters[j]){
                heterogram = false;
            }
        }
    }
    return heterogram;
}

/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function anagramCheck(wordOne, wordTwo){
    let anagram = false;
    let lettersWordOne = [...wordOne];
    let lettersWordTwo = [...wordTwo];

    let listA =[];
    let listB = [];
    let removalCounter = 0;

    for (let i = 0; i < lettersWordOne.length; i++){
        if (lettersWordOne[i] != " "){
            listA.push(lettersWordOne[i]);
        }
        
    }
    for (let i = 0; i < lettersWordTwo.length; i++){
        if (lettersWordTwo[i] != " "){
            listB.push(lettersWordTwo[i]);
        }
    }

    for (let i = 0; i < lettersWordOne.length; i++){
        for (let j = 0; j < lettersWordTwo.length; j++){
            if (listA[i-removalCounter] == listB[j-removalCounter]){
                listA.splice(i - removalCounter, 1);
                listB.splice(j - removalCounter, 1);
                removalCounter += 1;
            }
        }
    }

    if (listA == 0 && listB == 0){
        anagram = true;
    }
     
    return anagram;
}