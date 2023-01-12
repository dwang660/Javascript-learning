function CheckNumberVowels(str)
{
    num = str.replace(/[^aeiou]/g, '').length;
    return num;
}

console.log(CheckNumberVowels("action"));
console.log(CheckNumberVowels("ivy"));
console.log(CheckNumberVowels("what"));