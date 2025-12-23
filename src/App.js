function App(props)
{
  var a=props.data.rno
  var b=props.data.sname
  var c=props.data.issingle
  var d=props.data.mark
  var e=props.data.hobbies
return(<>
  <h3>Type of rno:{typeof(a)}</h3>
  <h3>Type of sname:{typeof(b)}</h3>
  <h3>Type of martial status:{typeof(c)}</h3>
  <h3>Type of marks:{typeof(d)}</h3>
  <h3>{Array.isArray(d)?"it is array":"it is object json"}</h3>
  <h3>{Array.isArray(e)?"it is array":"it is object json"}</h3>

</>)

}
export default App
/*
import parse from 'html-react-parser'
function App(props)
{
var ans=""
  for(var s in props.data)
  {
    ans=ans+`<li>${s} = ${props.data[s]}</li>` 
    console.log(s)
  }

  return(
    <>
    {parse("<ol>"+ans+"</ol>")}
    </>
  )
}
export default App
/*
import React from "react";
import parse from 'html-react-parser';
class App extends React.Component
{
  
  constructor(props)
  {
    var ans=""
    super(props)
    for(var s in props.data)
    {
      ans=ans+`<li>${s} = ${props.data[s]}</li>` 
      console.log(s)
    }
    
    
    this.state={
        res:"<ol type='I'>"+ans+"</ol>"        
    }
  }
  render()
  {
    
    return(
      <>
      <h1>Combine react state + props</h1>
      {parse(this.state.res)}
      <div id="res"></div>
      </>
    )
  }
}
export default App
/*
import React from "react";
class App extends React.Component
{
  constructor()
  {
  super()
  this.state={
    sno:111,
    sname:"anandhi",
    marks:[88,99,100,99,76]
  }  
  }
  show=()=>{
    this.setState({sname:"anandhi v"})
  }
  dis=()=>{
    this.setState({marks:[10,23,45,34,45]})
  }
  dis1=()=>{
    const newmarks=[...this.state.marks]
    newmarks[2]=99
    this.setState({marks:newmarks})
  }
  render()
  {
      return(<>
          <h1>This is class components</h1>
          <h2>Serial Number:{this.state.sno}</h2>
          <h2>Student Name:{this.state.sname}</h2>          
          {this.state.marks.map((v,index)=><>Mark:{index+1} = {v}<br></br></>)}
          <button onClick={this.show}>update name</button>
          <button onClick={this.dis}>update all mark</button>
          <button onClick={this.dis1}>update single mark</button>

      </>)
  }
}
export default App
/*
import { aadhar, accno, place, sname } from "./mycomponents/commonvar"
import Gowthaman from "./mycomponents/Gowthaman"

function App()
{
  return(
    <>
        <Gowthaman/>
        <h1>this is default App components</h1>
        <h2>my name is :{sname}</h2>
        <h3>my city:{place}</h3>
        <h3>my aadhar:{aadhar}</h3>
        <h3>my accno:{accno}</h3>
    </>
  )
}
export default App
/*
function App()
{
  var arr=[11,22,33,44,78,98,43,27,12,56,111,119,222]
  var s=0
  var ma=arr[0]

   var order=arr
   var fans=""
  return(
    <>
      <h1>React Loop map method</h1>
      <h2>old model</h2>
      {arr[0]}
      {arr[1]}
      {arr[2]}
      {arr[3]}
      <h2>New Model Map (loop)</h2>
      {arr.map((v)=><>{v}+</>)}
      <h2>New Model Map (loop)</h2>
      <ol type="I">
      {arr.map((v)=><li>{v}</li>)}
      </ol>
      <h2>Task: Sum of array</h2>
      <div style={{display:"none"}}>
      {arr.map((item)=><>{s=s+item}<br></br></>)}
      </div>
      <h3>Sum of Array:{s}</h3>

      
      <div style={{display:"none"}}>
      {arr.map((v)=><>{ma<v && <>{ma=v} </>}</>)}    
      </div>
      <h3>Max of Array:{ma}</h3>

      <h2>Ascending order</h2>
      <div style={{display:"none"}}>{order.sort((x,y)=>(x-y))}</div>
      {order.map((item)=><>{item} + </>)}
    
      <h2>descending order</h2>
      <div style={{display:"none"}}>{order.sort((x,y)=>(y-x))}</div>
      {order.map((item)=><>{item},</>)}

      <h3>Adding element in an array</h3>
      <div style={{display:"none"}}>{order.push(999)}</div>
      {order.map((item)=><>{item},</>)}
      <br></br>
      <h3>remove last element in an array</h3>
      <div style={{display:"none"}}>{order.pop()}</div>
      <div style={{display:"none"}}>{order.pop()}</div>
      <div style={{display:"none"}}>{order.pop()}</div>      
      {order.map((item)=><>{item},</>)}

    <h2>Remove last comma or plus or any char</h2>
      <div style={{display:"none"}}>{order.map((item)=><>{fans=fans+item+","}</>)}</div>
      {fans.slice(0,-1)}  




    </>
  )
}
export default App
/*
function App()
{
  var arr=[11,22,33,44,55,66]
  var[v1,,v2,...v3]=arr
  return(<>
    <h2>spread operator</h2>
    <h3>index 0: {v1}</h3>
    <h3>index 1: {v2}</h3>
    <h3>index 5: {v3}</h3>
      </>)
}
export default App

/*
function App()
{
  var res="fail"
  var avg=85.6
  return(<>
<h2>
  {
(res==="pass" &&
((avg>=85 && "OutStanding" )|| 
(avg>=75 && "Excellent") || 
(avg>=65 && "very good")|| 
(avg>=50 && "good")|| 
"Fair")) || "No grade becasue fail"}
</h2>    
 </>
  )
}
export default App
/*function App()
{
  var unit=102
  return(
    <>
    <center><h2>Electricity Bill Calculation</h2></center>
    <h3>{(unit<=100 && "Rs.0") || 
    (unit>=101 && unit<=125 && "Rs.50") ||
    (unit>=126 && unit<=200 && "Rs."+(unit-100)*2) ||
    (unit>=201 && unit<=300 && "Rs."+(200+(unit-200)*3)) || 
    (unit>=301 && unit<=400 && "Rs."+(500+(unit-300)*4)) ||
    "₹ "+(900+(unit-400)*5)
    
    }   
    </h3>
    </>
  )
}
export default App
/*
function App()
{
  var avg=45
  return(<>
    <h1>React Simple if else if statement</h1>
    <h2>{(avg>=85 && "OutStanding" )|| (avg>=75 && "Excellent")|| (avg>=65 && "very good")|| (avg>=50 && "good")|| "Fair"}</h2>
  </>)
}
export default App
/*
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