//The regex g means?

function CountEqualOfPsTs(str)
{
    nPs = str.replace(/[^p]/g, '').length;
    //console.log(str);
    //nTs = str.replace(/[^t]/g, '').length;
    console.log(str);
    console.log(`Number of Ps is : ${nPs}, number of Ts is : ${nTs}.`);
}

CountEqualOfPsTs('test');
CountEqualOfPsTs('function');
CountEqualOfPsTs('ptptpt');
