import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="grid-container">
   <Header/>
   <Home/>
<Sidebar/>


    </div>
  );
}

export default App;
