function SwitchFirstLastString(str)
{
    if (str.length<=1)
    {
        return str;
    }
    else
    {
        c1 = str[0];
        c2 = str[str.length-1];
        
        //The following is not working.
        //str[0] = c2;
        //str[str.length-1] = c1;

        var str2 = c2 + str.substring(1, str.length-1) + c1;
        return str2;
    }
    
}

console.log(SwitchFirstLastString('test2'));
console.log(SwitchFirstLastString('test3'));
console.log(SwitchFirstLastString('6test'));



//Answers online.
function first_last(str1) 
  {
  if (str1.length <= 1)
  {
    return str1;
  }
  mid_char = str1.substring(1, str1.length - 1);
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('abc'));