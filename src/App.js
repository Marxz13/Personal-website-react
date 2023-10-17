import './App.css';
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Project from "./components/Project.js";
import Resume from "./components/Resume.js";
import ContactUs from './components/Contact.js';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main>
        <Home/>
        <About/>
        <Project/>
        <Resume/>
        <ContactUs/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
