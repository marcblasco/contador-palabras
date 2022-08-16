
function wordRepetitions(){
const text = 'THE ADVENTURES OF SHERLOCK HOLMES Arthur Conan Doyle Table of contents A Scandal in Bohemia The Red-Headed League A Case of Identity The Boscombe Valley Mystery The Five Orange Pips The Man with the Twisted Lip The Adventure of the Blue Carbuncle The Adventure of the Speckled Band The Adventure of the Engineers Thumb The Adventure of the Noble Bachelor The Adventure of the Beryl Coronet The Adventure of the Copper Beeches A SCANDAL IN BOHEMIA  Table of contents Chapter 1 Chapter 2 Chapter 3'
const words = text.replace(/[^a-zA-Z0-9 ]/g, "").split(" ").map( w => w.toLowerCase())
let repetidos = []
words.forEach(word => {
  const arrayFilter = words.filter(t => t === word)
  if (arrayFilter.length > 1) {
    if (repetidos.filter(r => r.word === word).length === 0) repetidos.push({
      word,
      total: arrayFilter.length
    })
  }
})
console.log(repetidos)
}



export default wordRepetitions;