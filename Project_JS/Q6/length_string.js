// find the length of string without using length inbuilt method 

function stringLength(S) {
    let count = 0;
    let i;
    for (i of S) {
        count++;
    }
    return count;
}
console.log(stringLength("farhinmalek  "));