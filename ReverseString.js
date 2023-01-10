function ReverseString(str)
{
    var str2 = "";
    for (var i=0; i<str.length; i++)
    {
        str2 = str2 + str.at(str.length-i-1);
    }
    return str2;
}

console.log(ReverseString("thank you"));

//Answer on the internet.
function string_reverse(str) 
{
    return str.split("").reverse().join("");
}

console.log(string_reverse("w3resource"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript"));