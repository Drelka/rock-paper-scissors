// computer choosing randomly between rock, paper and scissors
    // create an array with 3 of those elements
        // create a function randomly returning one of the options
            // 0-1-2 array index = rock-paper-scissors string

// me typing one of rock, paper, or scissors (must be case insensitive - rOcK, PAPER, SciSSorS, etc. - all accepted)




let options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){

    return options[Math.floor(Math.random() * options.length)];

}

console.log(getComputerChoice());