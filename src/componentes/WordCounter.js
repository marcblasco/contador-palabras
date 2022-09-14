

function getWords(){
  const text = 'Scandal the adventures of Sherlok HOLMES Arthur Conan Doyle Table of contents A in Bohemia The Red-Headed League A Case of Identity The Boscombe Valley Mystery The Five Orange Pips The Man with the Twisted Lip The Adventure of the Blue Carbuncle The Adventure of the Speckled Band The Adventure of the Engineers Thumb The Adventure of the Noble Bachelor The Adventure of the Beryl Coronet The Adventure of the Copper Beeches A SCANDAL IN BOHEMIA Table of contents Chapter 1 Chapter 2 Chapter 3'
  const words = text.replace(/[^a-zA-Z0-9 ]/g, "").split(" ").map( word => word.toLowerCase());
  return words;
  //console.log(words);
}


function WordCounter(words){
  words = getWords();
  const repeated = []
  words.forEach(word => {
    const arrayFilter = words.filter(t => t === word)
    if (arrayFilter.length >= 0) {
      if (repeated.filter(r => r.word === word).length === 0) repeated.push({
        word,
        total: arrayFilter.length
      })
    }
  });
  console.log(repeated)
}



export default WordCounter;