// Define a function named reverse_a_number that takes a parameter n
function reverse_a_number(n)
{
    //number to a string
    n = n + "";

    
    return n.split("").reverse().join("");
}


console.log(Number(reverse_a_number(269878)));
