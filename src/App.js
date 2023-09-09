// import logo from './logo.svg';
import './App.css';
import img from './images/farm.png';
import logo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <div className="Right"><img src={ img } alt='img'/></div>
        <div className="Left">
          <div className='orchard-logo'><img src={ logo } alt='logo'/></div>
          <h1>ABOUT THE ORCHARD</h1>
          <p>At The Orchard, we connect you to the heart of agriculture. Our mission is simple: to empower consumers and businesses with real-time, up-to-date information on what farmers are offering in the market.</p>

          <p>  We believe in transparency, efficiency, and sustainability in the agricultural supply chain. With The Orchard, you can make informed decisions, support local farmers, and contribute to a greener future.</p>

          <p>Join us on this journey of growth, taste the freshness, and nurture a sustainable world. Welcome to The Orchard.</p>
          <button>LOGIN</button>
          <button>SIGN UP</button>
        </div>
    </div>
  );
}

export default App;
