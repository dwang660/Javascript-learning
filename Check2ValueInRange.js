function Check2ValueInRange(a, b)
{
    if (50<=a && a<=99 || 50<=b && b<=99)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(Check2ValueInRange(30, 90));
console.log(Check2ValueInRange(30, 20));
console.log(Check2ValueInRange(50, 10));
console.log(Check2ValueInRange(30, 100));
console.log(Check2ValueInRange(0, 1000));
console.log(Check2ValueInRange(70, 80));