import './App.css';

//import pages
import Home from "./pages/Home"

//import components
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home></Home>
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
