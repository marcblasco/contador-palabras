import logo from './logo.svg';
import './App.css';
import WordCounter from './componentes/WordCounter';

function App() {
  var texto= 'THE ADVENTURES OF SHERLOCK HOLMES Arthur Conan Doyle Table of contents A Scandal in Bohemia The Red-Headed League A Case of Identity The Boscombe Valley Mystery The Five Orange Pips The Man with the Twisted Lip The Adventure of the Blue Carbuncle The Adventure of the Speckled Band The Adventure of the Engineers Thumb The Adventure of the Noble Bachelor The Adventure of the Beryl Coronet The Adventure of the Copper Beeches A SCANDAL IN BOHEMIA  Table of contents Chapter 1 Chapter 2 Chapter 3'
  return (
    
    <div className="App">
      <WordCounter/>
    </div>
  );
}

export default App;
