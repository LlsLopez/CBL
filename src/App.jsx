import './App.css';   //rfce
import './style.css';
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import Clients from './components/clients.jsx';
import Reviews from './components/reviews.jsx';
import Info from './components/info.jsx';
import Services from './components/services.jsx';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Info/>
        <Clients/>
        <Services/>
        <Reviews/>
    </div>
  );
}

export default App;
