// Swap Case in String
// Write a JavaScript program that accepts a string as input and swaps the case of each character.For example if you input
//  'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.


function swapCase(input) {
    let swapped = '';

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        // Check if the character is uppercase
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }

    return swapped;
}

const inputString = 'The Quick Brown Fox';
const result = swapCase(inputString);
console.log(result);