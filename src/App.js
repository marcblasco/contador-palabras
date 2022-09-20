import './App.css';
//import WordCounter from './componentes/WordCounter';


function App() {

  const readFile= (e) => {

    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file)
    fileReader.onload = () =>{
      const text = fileReader.result
      const quiteLineBreaks= (string) =>string.replace(/\n/g, ' ');
      const cleanWords= (word) => word.replace(/[^a-zA-Z'-]/g, '').toLowerCase();
      const words=[];
      const textArray = quiteLineBreaks(text).split(' ');
      textArray.forEach((word) => {
        const cleanWord= cleanWords(word);
        if (cleanWord) words.push(cleanWords(cleanWord))
      });
      console.log(words)

      const repeated = []
      words.forEach(word => {
        const arrayFilter = words.filter(t => t === word)
        if (arrayFilter.length >= 0) {
          if (repeated.filter(r => r.word === word).length === 0) 
          {
            repeated.push({word,total: arrayFilter.length})  
           
    
          }
        }  
      });
      const pareto= (repeated.length * 20)/100 
      console.log (" pareto principle --> "+ pareto)
      console.log(repeated)
    }
    fileReader.onerror = () =>{
      console.log (fileReader.error)
    }
    return fileReader.result;
  }
  return (

    <div className="App">
      
     
      <input  type="file"   multiple={ false }   onChange={ readFile }/>

    </div>
    
    
  );

}


export default App;
