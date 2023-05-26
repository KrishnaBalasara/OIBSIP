// Get the input box element
let input = document.getElementById('inputBox');

// Get all the buttons on the page
let buttons = document.querySelectorAll('button');

// Initialize a string variable to store the input
let string = "";

// Convert the buttons NodeList into an array
let arr = Array.from(buttons);

// Add event listeners to each button
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        
        // Check if the button clicked is the '=' button
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        // Check if the button clicked is the 'AC' button
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        // Check if the button clicked is the 'DEL' button
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        // For any other button clicked
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
