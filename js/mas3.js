
// Uchinchi masala 
function vowelCounter (str) {
    var count = 0;
    var vowels = "aeiou"
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i].toLowerCase()) > -1) { count++; } 
    }
    let result = "This string has " + count + " vowels in it!"
    return result
}

alert(vowelCounter(prompt("Get the counts of vowels in your word or longer text..!")))
