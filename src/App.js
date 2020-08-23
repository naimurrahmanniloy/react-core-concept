import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayok = ['rajjak', 'bappa', 'sakib', 'anata Jalil']
  const products =[
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Photoshop', price:'$6.99'}
  ]

  const friends =['nayeem', 'jubayer', 'sharmin', 'kaniz', 'anika']

  
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            products.map(products => <li>{products.price}</li>)
          }

          <p>All nayoks</p>
        {
          nayok.map(nayok => <li>{nayok}</li>)
        }


        </ul>
       <p>I am a React Person</p>
       <Product products={products[0]} ></Product>
       <Person name='Rubel Nayok' ></Person>
       <Person></Person>
      <Friend name ='friends[0]'></Friend>
      <Counter></Counter>
      <Users></Users>
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])


  return(
    <div>
      <h3>Dynamic Users</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li> )        
        }
      </ul>
    </div>
  )
}

function Counter(){
  const[count, setCount] = useState(10);
  const handleIncrease = ()=> {
    const newCount = count +1;
    setCount(newCount);
  }
  const handleDecrease = ()=> {
    const newCount = count -1;
    setCount(newCount);
  }


  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>increase</button>
    </div>
  )
}



function Friend(props){

  const friendStyle ={
    height: '200px',
    weight: '200px',
    color:'black'

  }


  return(
    <div style={friendStyle}>
        <p> {props.friends} Works on a Clothes Shop</p>
    </div>
  )
}



function Product(props){
  const prtoductStyle ={
    boder:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  
  return(
    <div style ={prtoductStyle}>
      <h4>{props.products.name}</h4>
  <h5>{props.products.price}</h5>
    <button>Buy now</button>
    </div>
  )
}

function Person(props){
  const PersonStyle ={
    color : 'red',
    border : '2px solid gray',
    margin: '10px'

  }
  console.log(props)

  return (<div style={PersonStyle} >
    <h1>Name:{props.name}</h1>
  <h3>hero number one</h3>
  </div>)
}
export default App;
