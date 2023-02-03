const lyrics = 'tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada'

const doseExist = lyrics.includes('pakhi');
console.log(doseExist)

// index search in string
console.log(lyrics.indexOf('pakhi'));

// startsWith
console.log(lyrics.startsWith('2mi'));

// endsWith
const fileName = 'mybiodata.pdf'
const otherFile = 'myPic.png';

console.log(fileName.endsWith('.pdf'));