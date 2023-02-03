const lyrics = 'tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada'

// split sentences
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
console.log(sentences);

// slice
const partial = lyrics.slice(5, 11);
console.log(partial);

// stustring
const partia2 = lyrics.substring(5, 11);
console.log(partia2);

// concat


// join
const line = [
        'tumi bondhu kala pakhi ami jeno ki',
        'bosonto kale tomai bolte pari ni',
        'kala kala sada sada'
    ]
console.log(line.join());