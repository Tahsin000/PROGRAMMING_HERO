const text = "The quick brown fox jumps over the lazy dog"; 
const vowels = ["e", "u", "i", "o", "a"];
let vowelCount ={}; 
vowels.map(vowel => {
    const findValue = [...text].filter(tx => tx === vowel);
    vowelCount[vowel] = findValue.length;
})
console.log(vowelCount);

