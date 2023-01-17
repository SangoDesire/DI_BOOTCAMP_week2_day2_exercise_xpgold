/*Exercise 1 : The World Translator*/
//Ask the user which language they speak
let langage = prompt("which language do you  speak ?");

//Convert the user’s answer to lowercase
let convert = langage.toLowerCase
console.log(convert);

switch (langage) {
    case 'french':
    console.log(french);
    break;
case english:
    console.log(english);
    break;
case ebrew:
    console.log(shalom);
    break;

default:
    console.log("01110011 01101111 01110010 01110010 01111001");
    break;
}


    /*Exercice N°2 : THE GRADE ASSIGNER */

    /*Ask the user for their grade.*/

    let grade = prompt("Enter your grade please!")

    /*If the grade is bigger than 90, console.log “A”*/

    if (grade > 90) {
        console.log("A")
    }
    /*If the grade is between 80 and 90 (included), console.log “B”*/

    if (grade >= 80 && grade <= 90) {
        console.log("B")
    }
    if (grade >= 70 && grade <= 80) {
        console.log("C")
    }
    if (grade < 70) {
        console.log("D")
    }

    /*EXERCICE 3 : VERBING*/

    let verb = prompt("Enter a verb")
        /*If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.*/

    if (verb.length < 3 && verb.substring("in") && verb.append(ing)) {
        console.log(verb)
    }
    /*If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.*/
    if (verb.length < 3 && verb.substring("ing") && verb.append(ing)) {

    }
    /*If the length of the string is less than 3, leave it unchanged.*/
    if (verb.length < 3) {
        console.log(verb)
    }