import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import HeroPage from './Components/HeroPage/HeroPage';
import AboutUs from './Components/AboutUs/AboutUs';
import Technology from './Components/Technology/Technology';

function App() {
  return (
    <div className="Apsp">
      <NavBar/>
      <HeroPage/>
      <AboutUs/>
      <Technology/>
    </div>
  );
}

export default App;
