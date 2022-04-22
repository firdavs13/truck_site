import './App.css';
import Header from "./components/Header/Header"
import Slider from './components/Slider/Slider';
import About from './components/About/About';
import Services from './components/Services/Services';
import Shop from './components/Shop/Shop';
import Testimonial from './components/Testimonial/Testimonial';
import Company from './components/Company/Company';
import Contact from './components/Contact/Contact';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <div className='hero_area'>
          <Header/>
          <Slider/>
        </div>
        <About/>
        <Services/>
        <Shop/>
        <Testimonial/>
        <Company/>
        <Contact/>
        <Info/>
        <Footer/>
    </div>
  );
}

export default App;
