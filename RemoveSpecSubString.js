function RemoveSpecSubString(str, index)
{
    var c = str.substring(index, index+1);
    var str1 = str.substring(0,index);
    var str2 = str.substring(index+1, str.length);
    var str3 = str1 + str2;
    return str3;
}

console.log(RemoveSpecSubString("test", 2));
console.log(RemoveSpecSubString("test", 3));
console.log(RemoveSpecSubString("test", 1));