// factorial using recursion
function recursion(num)
{
    if(num>=1)
    {
        return num*recursion(num-1)
    }
    else{
        return 1;
    }
     
}
console.log(recursion(8));