function CheckSameRightMostDigit (a, b)
{
    c = a % 10;
    d = b % 10;
    if (c == d)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(CheckSameRightMostDigit(15, 25));
console.log(CheckSameRightMostDigit(16, 25));
console.log(CheckSameRightMostDigit(15, 5));