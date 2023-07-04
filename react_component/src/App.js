// import logo from './logo.svg';
import './App.css';
import AmPm from './components/AmPm';
// import Login from './components/Login';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter
        limit = "12" 
      />
      <Counter 
        limit = "59"
      />
      <AmPm />
    </div>
  );
}

export default App;
