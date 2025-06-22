import { useState, useEffect } from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader';

function App() {
  const [url, setURL] =  useState("https://www.youtube.com/watch?v=JC90NBGC_bA");
  const [isLoading, setIsLoading] = useState(true); // Initialize to true if data fetching starts on mount
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 1 second
    }

    return () => {
      clearTimeout(timer); // Cleanup: clear timeout if component unmounts or isLoading changes
    };
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = () => {
    let counter;
    setIsLoading(true);
    
      counter = setTimeout(() => {
        setIsLoading(false);
        setURL(inputValue);
    }, 1000); // 1 second  

    setURL(inputValue);
    return () => clearInterval(counter);
  }

  return (
    <div className="App">      
      <header className="App-header">
        <h3>React Video Player Demo</h3>
        <p><i>Enter link below</i></p>
        <SearchBar  
          value={inputValue} onChange={handleInputChange} onClick={()=>{handleSubmit()}}
        />
        <div style={{marginBottom:5}}></div>       
        <div style={{color:"black",borderWidth:10, padding: 2,width:"640px",
                    border:20,borderStyle:"solid", height:"360px" }}>
          {!isLoading? 
            <VideoPlayer 
              url={url}
            />
          :
            <div style={{paddingTop:50, paddingBottom:50}}>
              <Loader/>
            </div>
          }
        </div>  
      </header>      
    </div>
  );
}

export default App;
