import User from './components/user';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const test = 22;
  return (
    <div className="App">
      <Navbar />
      <h1 className='header'>Merhaba React</h1>
      <h3>{1+1} / {"umut".toUpperCase()}</h3>
      <h3>{test}</h3>
      <User />
    </div>
  );
}

export default App;
