function getComputerChoice(output) {
    let random = [
        'Rock',
        'Paper',
        'Scissors'      
    ]

    let choice = random[Math.floor(Math.random() * random.length)];
    output = choice;
    return output;
};
