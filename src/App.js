import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import HeroPage from './Components/HeroPage/HeroPage';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <div className="Apsp">
      <NavBar/>
      <HeroPage/>
      <AboutUs/>
    </div>
  );
}

export default App;
