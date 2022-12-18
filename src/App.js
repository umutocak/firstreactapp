import User from './components/user';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  // const test = 22;
  return (
    <div className="App">
      <Navbar title = "Navbar Title"/>
      <hr />      
      {/* <h1 className='header'>Merhaba React</h1>
      <h3>{1+1} / {"umut".toUpperCase()}</h3>
      <h3>{test}</h3> */}
      <User 
      name = "Umut Ocak"
      // department = "Software"
      salary = "15453"
      />

      <User 
      name = "Ufuk Ocak"
      department = "Software"
      salary = "13456"
      />
    </div>
  );
}

export default App;
