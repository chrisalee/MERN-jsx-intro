import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Headings from './components/Headings';
import List from './components/List';
import Footy from './components/Footy';

function Heading(){
  return(
    <h1> The Heading 8 </h1>
  );
}

function App() {
  const name = "Chris";
  const num = 7;

  const fName = "C";
  const lName = "L";

  const firstName = "chris"
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  const img1 = "https://picsum.photos/200";

  const customStyle = {
    color: 'purple',
    border: '1px solid black',
    fontSize: '50px',
  };

  const date = new Date();
  const currentTime = date.getHours();

  const customGreeting = {
    color: ''
  }
  let greeting;
  if(currentTime < 12) {
    greeting = "Good Morning"
    customGreeting.color = 'red';
  } else if (currentTime < 18) {
    greeting = "Good Afternoon"
    customGreeting.color = 'green';
  } else {
    greeting = "Good Night"
    customGreeting.color = 'blue';
  }



  return (
    <div className="App">
      <h2 contentEditable="true" spellCheck="false"> #1  </h2>
      <h1 className="names"> {name}'s favorite sports </h1>
      <ul>
        <li> Soccer:  Years played {num} </li>
        <li> Volleyball: Years played {num-5} </li>
        <li> Baskeyball: Years played {Math.floor(Math.random()*10)} </li>
      </ul>
      
      <h2> #2 </h2>
      <p> {fName} {lName} </p>
      <p> {fName + " " + lName} </p>
      <p> {`${fName} ${lName}`} </p>
      
      <h2> #3 </h2>
      <p> Created by: {firstName} </p>
      <p> Copyright {year} </p>
      
      <h2> #4 </h2>
      <img className="sport-img" src="https://cdn.cnn.com/cnnnext/dam/assets/190726183616-soccer-ball-stock-large-169.jpg"  alt="soccer"></img>
      <img className="sport-img" src="https://www.creativefabrica.com/wp-content/uploads/2019/09/20/Male-Volleyball-spike-580x386.jpg" alt="volleyball"></img>
      <img className="sport-img" src="https://previews.123rf.com/images/chromaco/chromaco1109/chromaco110900021/10537816-basketball-hoop-with-basketball-cartoon.jpg" alt="basketball"></img>
      
      <h2> #5 </h2>
      <img  src= {img1 + "?grayscale"} alt="random" />
    
      <h2> #6 </h2>
      <div style={customStyle}> 
          <p > hola </p>
          <p > hi </p>
          <p > hello </p>        
      </div>

      <h2> #7 </h2>
      <h1 className="greetingheading" style={customGreeting}> {greeting}</h1>

      <h2> #8 </h2>
      <Heading />

      <h2> #9 </h2>
      <Headings />
      <List />
      <Footy />
    </div>
  );
}

export default App;
