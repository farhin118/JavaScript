// Capitalize First Letter of Each Word

function capitalizeFirstLetter(l) {
    return l
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

let exampleString = 'the quick brown fox';
let capitalizedString = capitalizeFirstLetter(exampleString);


console.log(capitalizedString);
