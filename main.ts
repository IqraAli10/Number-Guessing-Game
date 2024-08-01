import inquirer from "inquirer";
// 1) computer will generate a random number 

// 2) user input for guessing number

// 3) compare user input with computer generated number and show result

const randomnumber = Math.floor(Math.random () * 100) + 1
const answers = await inquirer.prompt([
        
]);
console.log(answers);

async function askGuess(): Promise<void> {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'guess',
            message: 'Guess the number (between 1 and 100):',
            validate: function (value) {
                if (isNaN(value) || value < 1 || value > 100) {
                    return 'Please enter a number between 1 and 100.';
                }
                return true;
            }
        }
    ]);

    const guess = answers.guess;

    if (guess < randomnumber) {
        console.log('Too low!');
        await askGuess();
    } else if (guess > randomnumber) {
        console.log('Too high!');
        await askGuess();
    } else {
        console.log(`Correct! You guessed the number.`);
    }
}

console.log('Welcome to the Number Guessing Game!');
askGuess();

