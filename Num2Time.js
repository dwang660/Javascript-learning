function Num2Time(a)
{
    var h = Math.floor(a/60);
    var m = a % 60;

    hm = `The time is ${h} hour and ${m} minutes.`;
    return hm;
}

console.log(Num2Time(361));
console.log(Num2Time(461));
console.log(Num2Time(399));