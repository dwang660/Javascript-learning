String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function Str2AlphaOrder(str)
{
    var strList = str.split("");

    for (var i = 0; i<str.length-1; i++)
    {
        for (var j = 0; j< str.length - i-1; j++)
        {
            // if(str.charCodeAt(j)>str.charCodeAt(j+1))
            // {
            //     //temp = strList[j];
            //     //strList[j] = strList[j+1];
            //     //strList[j+1] = temp;
            //     temp = str[j];
            //     str.replaceAt(j, str[j+1]);
            //     str.replaceAt(j+1, temp);
            // }

            if(strList[j]>strList[j+1])
            {
                temp = strList[j];
                strList[j] = strList[j+1];
                strList[j+1] = temp;
            }
        }
    }

    return strList.join("");
}

console.log(Str2AlphaOrder("test"));
console.log(Str2AlphaOrder("abcede"));
console.log(Str2AlphaOrder("edfadse"));