function AddPy2String(str)
{
    if (str.indexOf('Py')==0)
    {
        console.log(str);
    }
    else{
        str = 'Py'+str;
        console.log(str);
    }
}

AddPy2String('abc');
AddPy2String('Pyt');
AddPy2String('Python');

function string_check(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
    {
      return str1;
    }
    return "Py"+str1;
  }
  
  console.log(string_check("Python"));
  console.log(string_check("thon"));