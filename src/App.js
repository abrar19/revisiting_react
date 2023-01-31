import './App.css';
import {useEffect, useState} from "react"
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.png";

function App() {

  const countries = [
    {
      'name': 'Afganistan',
      'capital': 'Kabul'
    },
    {
      'name': 'Nepal',
      'capital': 'Kathmandu'
    },
    {
      'name': 'India',
      'capital': 'Delhi'
    },
    {
      'name': 'Bangladesh',
      'capital': 'Dhaka'
    }
  ];

  return (
    <div className="App">
      {/* <Person name="Abrar Haque" age="25" university="Brac University" hometown="Meherpur"></Person>
      <Person name="Abrar Haque 2" age="20" university="Technical University of Chemnitz" hometown="Dariapur"></Person>
      <div className="item">
        <Item name="Lenovo" model="LN-09-2023" price="$400" discount="50%" src="../images/tamiya-14131-kawasaki-ninja-h2r-bausatz-1.jpg"></Item>
        <Item name="HP" model="HP-09-2023" price="$300" discount="40%" src="../images/tamiya-14131-kawasaki-ninja-h2r-bausatz-1.jpg"></Item>
      </div> */}

      {/* <StateFunction></StateFunction> */}
      {/* {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      } */}
      <LoadUsers></LoadUsers>
      <MyComponent title="My Own Component 1" src1={image1}></MyComponent>
      <MyComponent title="My Own Component 2" src1={image2}></MyComponent>
    </div>
  );
}


function LoadUsers(){
  const [users, setUsers] = useState([]);

  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } , [])

  return(
    <div>
      <h1>Users Loaded: {users.length}</h1>
      {
        users.map(user => <User name={user.name}></User>)
      }
    </div>
  );
}

function User(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
    </div>
  );
}

function Person(props){
  const {name, age, university, hometown} = props;
  return (
    <div className="person-card">
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>University: {university}</h3>
      <h4>Hometown: {hometown}</h4>
    </div>
  );
}

function Item(props){
  const {name, model, price, discount, src} = props;
  return (
      <div className="item-card">
        <img src={src} alt="" />
        <p>Name: {name}</p>
        <p>Model: {model}</p>
        <p>Price: {price}</p>
        <p>Discount: {discount}</p>
      </div>
  );
}

function StateFunction(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count+1);
  const handleDecrease = () => setCount(count-1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

function Country(props){
  const countryStyle = {
    background: 'red',
    border: '1px solid #darkred',
    padding: '10px',
    width: '200px',
    margin: '0 auto',
    marginBottom: '5px'
  }
  return (
    <div style={countryStyle}>
      <h1>Country: {props.name}</h1>
      <h1>Capital: {props.capital}</h1>
    </div>
  );
}

function MyComponent(props){
  const [points, setPoints] = useState(0);
  const handleAddPoints = () => setPoints(points+1);
  const handleSubtractPoints = () => setPoints(points-1);
  return (
    <div>
      <img src={props.src1} alt="a" height="200px" width="200px" />
      <h1>{props.title}</h1>
      <p>Points: {points}</p>
      <button onClick={handleAddPoints}>Add Points</button>
      <button onClick={handleSubtractPoints}>Subtract Points</button>
    </div>
  );
}

export default App;
