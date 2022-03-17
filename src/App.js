import logo from './logo.svg';
import './App.css';


// Part 3

/*-------------------------------------------------------- ----------------*\
Dynamic Html to component: Similar in Look Similar in Data, Props in React
\*---------------------------------------------------------- -----------------*/

function App() {

  return (
    <div className="App">
      <Friend name="Nabi" age="29" profession="business"></Friend>
      <Friend name="Tushar" age="35" profession="student"></Friend>
      <Friend name="Tamjid" age="45" profession="teacher"></Friend>
      <Friend name="Shahid" age="55" profession="programmer"></Friend>
      <Friend name="Sifaat" age="39" profession="mechanic"></Friend>
      <Team name="Tahsan" role="All-rounder" strength="Batting"></Team>
      <Team name="Bashar" role="All-rounder" strength="Bowling"></Team>
      <Team name="Tamjid" role="All-rounder" strength="Batting"></Team>
      <Team name="Nabil" role="Batsman" strength="Batting"></Team>
      <Team name="Tushar" role="Batsman" strength="Batting"></Team>
    </div >
  );
}

function Friend(props) {
  console.log(props)
  const friend = {
    name: "Nabil",
    age: 24,
    profession: 'student'
  }

  const friendStyles = {
    backgroundColor: 'lightslategray',
    color: 'lightgreen',
    width: '75%',
    margin: '10px auto',
    border: '3px solid yellow',
    borderRadius: '20px'
  }


  return (
    // <div className='friend'>
    // <div style={friendStyles}>
    <div style={friendStyles}>
      <h1>BestFriend: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Profession: {props.profession}</h3>
    </div>
  )
}

function Team(props) {

  return (
    <div className="team-styles">
      <h1>Player: {props.name}</h1>
      <h2>Role: {props.role}</h2>
      <h3>Strength: {props.strength}</h3>
    </div>
  )
}

export default App;


// Part 2

/*-------------- -----------------------------------------------------------------------*\
Creating Component, return html from component: Similar in look, Similar in Data
\*-----------------------------------------------------------------------------------*/

/*
function App() {

  return (
    <div className="App">
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div >
  );
}

function Friend() {

  const friend = {
    name: "Nabil",
    age: 24,
    profession: 'student'
  }

  const friendStyles = {
    backgroundColor: 'lightslategray',
    color: 'lightgreen',
    width: '75%',
    margin: '10px auto',
    border: '3px solid yellow',
    borderRadius: '20px'
  }


  return (
    // <div className='friend'>
    // <div style={friendStyles}>
    <div style={{
      backgroundColor: 'lightslategray',
      color: 'lightgreen',
      width: '75%',
      margin: '10px auto',
      border: '3px solid yellow',
      borderRadius: '20px'
    }}>
      <h1>BestFriend: {friend.name}</h1>
      <h2>Age: {friend.age}</h2>
      <h3>Profession: {friend.profession}</h3>
    </div>
  )
}

export default App;

*/




// Part 1

/*-------------- --------------------------------------*\
JSX, Dynamic Content and Dynamic styling in 3 ways
\*-------------------------------------------------*/

/*function App() {

  const myNumber = 421;
  const student = {
    name: 'Rafid Hossain',
    age: 18,
    school: 'Bangladesh International school and College'
  }

  const schoolStyle = {
    backgroundColor: 'orange',
    color: 'white'
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>Happy React Journey!!!</p>
        <div className="container">
          <p>This is inside my container</p>
          <p>My number is: {myNumber}</p>
          <h1>Cousin: {student.name}</h1>
          <h2>Age: {875 - 857}</h2>
          <h2>Age: {student.age}</h2>
          <h3>School: {student.school}</h3>
          <h3 className='school'>School: {student.school}</h3>
          <h3 style={schoolStyle}>School: {student.school}</h3>
          <h3 style={{ backgroundColor: 'red', color: 'yellow' }}>School: {student.school}</h3>
        </div>
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
