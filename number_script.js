// changing text Veriable
var shifting_text = document.getElementById("text_that_changes")

// Guessing Button
var button_1 = document.getElementById("turn_in")

// RNG (placeholder number)
var rng_number = Math.floor((Math.random() * 10) + 1);    // => 1 and 11
console.log(rng_number);

// event listener
button_1.addEventListener("click", checker);

function checker (){
    // user input
    var user_input = document.getElementById("number_input").value

    // Checking System
    if(user_input > rng_number) {
        shifting_text.innerText= "Wrong, Too High!"
    }

    else if(user_input < rng_number) {
        shifting_text.innerText= "Wrong, Too Low"
    }

    else{
        shifting_text.innerText= "CORRECT!"
    }
}
