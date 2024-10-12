import './App.css'
import Card from './components/card';
import Button from './components/button';
import { useState } from "react";


const colors = ['#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'];


function App() {
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  const [quote, setQuote] = useState("start");

  async function GetQuote() {
    try {
        const res = await fetch("https://api.kanye.rest/");
        const data = await res.json();        
        setQuote(data.quote);
    } catch (err) {
        console.log(err);
    }

  };

  const handleClick = () => {
      setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
      GetQuote();
  }

  return (
    <div className="body" style={{backgroundColor}}>
      <Card quote={quote} citation="Kanye" >
      <Button handleClick={handleClick} color={backgroundColor}/>
      </Card>
    </div>
  );
}

export default App
