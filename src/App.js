function App()
{
  if(true)
  {
  var v=100
  let l=200
  const c=300
  v++;
  l++;
  console.log("Let:"+l);
  //c++
  console.log("const:"+c);
  }

    return(
      <>
          <h1>variable : global : {v}</h1>
          <h1>does not work let and const : because local</h1>   
          <div id="res"></div>
      </>
    )
}
export default App
/*
function App()
{
  let myfun=(a,b,c)=>{
    var tot=a+b+c
    document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`;
  }
  return(<>
  
  <h2>Arrow Function with parameter</h2>
  <h3>Note: onClick C must be caps <br></br>don't use double qutoes </h3>
  <h3>Note: in calling function must use parenthesis when passing args</h3>
  <button onClick={()=>myfun(10,20,30)}>click me </button>
  <div id="res"></div>
  
  </>)
}
export default App

/*
function App()
{
  let myfun=()=>{
    document.getElementById("res").innerHTML="Congrats you clicked the button";
  }
  return(<>
  
  <h2>Arrow Function without parameter</h2>
  <h3>Note: onClick C must be caps <br></br>don't use double qutoes </h3>
  <h3>Note: in calling function don't use parenthesis when without passing args</h3>
  <button onClick={myfun}>click me </button>
  <div id="res"></div>
  
  </>)
}
export default App
/*
import myimg from './images/img1.jpg'
function App()
{
  return(<>
    <h2>Image Demo using path as expression</h2>
    <img src={myimg} width="75%" height="auto" alt="path is wrong"></img>
  </>)
}
export default App
/*
function App()
{
  var a=3100
  var b=600
  var c=400
  return(
    <>
      <h2>Biggest Among 2 no's using conditional or ternaray operator</h2>
      <h1>Biggest Number a or b:{a>b?a:b}</h1>
      <h1>Biggest Number a or b or c:{(a>b && a>c) ?a:(b>c?b:c)}</h1>
    </>
  )
}
export default App
/*
function App(){
  // javascript learned code
  var a=10
  var b=20
  var c="Gowthaman"

return(<>
      <h1>Total:{a+b}</h1>
      <marquee bgcolor='yellow'><font size='7'>{c}</font></marquee>
  </>)
} 
export default App
/*
import React from "react";

class Parent extends React.Component
{
  render()
  {
    return(<>
          <h1>This is parent Class</h1>
          <h1>This is parent Class</h1>
          <h1>This is parent Class</h1>
          <h1>This is parent Class</h1>
          <h1>This is parent Class</h1>

    </>)
  }
}
class App extends Parent
{
  render()
  {
    return(<>
          <Parent/>
          <h1>Welcome to Class Components</h1>
          <h1>Welcome to Class Components</h1>
          <h1>Welcome to Class Components</h1>
          <h1>Welcome to Class Components</h1>
          <p>Proident veniam ea cillum nulla reprehenderit elit. Enim incididunt voluptate qui quis aliquip nisi minim consectetur minim in anim irure amet. Id excepteur Lorem in sunt ullamco cupidatat quis voluptate ipsum qui tempor minim tempor. Consectetur irure deserunt laborum qui duis ex veniam et deserunt cupidatat pariatur reprehenderit laborum.

Et laboris ea consequat cillum. Cillum deserunt magna nulla minim aliqua duis veniam pariatur tempor tempor elit excepteur. Exercitation elit excepteur sit dolore ipsum pariatur consequat consequat. Eu aute nostrud incididunt veniam magna aute. Sunt proident sit ex sint deserunt.

Consectetur est quis aute cupidatat id officia est deserunt deserunt. Ex fugiat id exercitation ut nulla ea irure ex exercitation. Commodo do ea nulla nostrud exercitation. Enim ut quis est magna pariatur voluptate excepteur magna pariatur.

Occaecat cupidatat culpa id pariatur commodo Lorem ut magna eiusmod laboris. Nisi ut commodo sint eiusmod officia anim voluptate officia nisi commodo ea quis fugiat ad. Aute nulla amet ipsum mollit proident excepteur qui et commodo voluptate labore exercitation fugiat. Eu fugiat aute Lorem nulla voluptate eiusmod amet reprehenderit nisi aute incididunt proident. Sunt ad quis voluptate incididunt minim.</p>
    </>)
  }
}
export default App
/*
function App()
{
  return(
    <div>
    <h1>Welcome To React JS</h1>
    <h1>Welcome To React JS</h1>
    <h1>Welcome To React JS</h1>
    </div>
  )
}
export default App
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/