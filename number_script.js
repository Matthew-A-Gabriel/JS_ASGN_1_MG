// changing text Veriable
var shifting_text = document.getElementById("text_that_changes")

// user input (placeholder number)
var user_input = "5"

// RNG (placeholder number)
var rng_number = "5"

// Checking System, console log are placehodlers to make sure they work and the functions need to be made, the existing one doesn't
if(user_input > rng_number) {
    console.log("Wrong, Too High")
}

else if(user_input < rng_number) {
    console.log("Wrong, Too Low")
}

else if(user_input === rng_number) {
    function changeText () {

        shifting_text.innerText= "CORRECT!"

    }
}

else{
    console.log("Enexpected input, just add a number")
}



// Below this are the scrapped, didn't work so I decided to start over.//


// Random Number Generator 1-10
// let number = Math. floor(Math. random() * 10) + 1;

// // User Input Variable
// let input = document.getElementById("number_input");

// // the changing text variable 
// let text_change = document.getElementById("text_that_changes");

// // When Input is higher than Random Number
// if (number<input) {
//     function changeText(){
//     text_change.innerText = "Wrong, guess lower"
//     } ;
//     console.log("Wrong, guess lower");
// }

// // When Input matches the Random Number
// else if (number === input) {
//     function changeText(){
//         text_change.innerText = "Correct! refresh to play again"
//         } ;
//     console.log("Correct! refresh to play again")
// }

// // When it is neither Matching or Higher
// else {
//     function change_text(){
//         text_change.innerText = "Wrong, guess higher"
//         } ;
//     console.log("Wrong, guess higher")
// }


// note: make it so instead of Console Logs, it's changing the text thanks
