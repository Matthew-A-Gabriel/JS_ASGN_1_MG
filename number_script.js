// changing text Veriable
var shifting_text = document.getElementById("text_that_changes")

// Guessing Button
var button_checker = document.getElementById("turn_in")

// refresh button
var button_refresher = document.getElementById("refresh")

// RNG (placeholder number)
var rng_number = Math.floor((Math.random() * 10) + 1);    // => 1 and 11
console.log(rng_number);

// event listener for checker
button_checker.addEventListener("click", checker);

// event listener for refresher
button_refresher.addEventListener("click", refresher);

//  refresher function
function refresher(){
    location.reload();
}

//  checker function
function checker (){

    // user input
    var user_input = document.getElementById("number_input").value

    // Checking System
    if(user_input > rng_number) {
        shifting_text.innerText= "Wrong, Too High!";
        shifting_text.style.color = 'red'
    }

    else if(user_input < rng_number) {
        shifting_text.innerText= "Wrong, Too Low";
        shifting_text.style.color = 'red'
    }

    else{
        shifting_text.innerText= "CORRECT!"
        shifting_text.style.color = 'green'
    }
}
