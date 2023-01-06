function NewStrFrom3Back(str)
{
    if (str.length<3)
    {
        return str;
    }
    else{
        var str1 = str.substring(str.length-3, str.length);
        return str1+str+str1;    
    }
}

console.log(NewStrFrom3Back("abc"));
console.log(NewStrFrom3Back("abcedf"));
console.log(NewStrFrom3Back("ab"));
console.log(NewStrFrom3Back("12345"));
console.log(NewStrFrom3Back("345"));
console.log(NewStrFrom3Back("dslkjhfao"));