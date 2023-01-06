function CheckStartWithJava(str)
{
    if (str.length<4)
    {
        return false;
    }
    else{
        if (str.substring(0,4)=="Java")
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

console.log(CheckStartWithJava("3"));
console.log(CheckStartWithJava("jave"));
console.log(CheckStartWithJava("Javeew"));
console.log(CheckStartWithJava("Java"));