import './App.css';
import Navbar from './components/Navbar';
import PreNavBar from './components/PreNavBar';
import { BrowserRouter as Router } from 'react-router-dom'
import Slider from './components/Slider';
import data from './data/data.json'
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';


// const banner = data.banner;
// const offer = data.offer;

function App() {
  return (
    <Router>
      <PreNavBar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
    </Router>
  );
}

export default App;
