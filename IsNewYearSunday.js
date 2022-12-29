function isNewYearSunday(year)
{
    var date = new Date(year, 0, 1);
    var d = date.getDay();
    if (d == 0)
    {
        console.log(`New year of ${year} is Sunday.`);
    }
    else
    {
        console.log(`New year of ${year} is not Sunday.`);
    }
    

}

for (var i = 2014; i<=2050; i++)
{
    isNewYearSunday(i);
}