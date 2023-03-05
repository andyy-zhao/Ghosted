import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navbar/NavBar';
import { Landing } from './components/landing/Landing';
import { Wrapped } from './components/wrapped/Wrapped';
import { Footer } from './components/footer/Footer';
import { NavButtons } from './components/navbuttons/NavButtons';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Landing />
        <Wrapped />
      </div>
      <NavButtons />
      <div className="App">
        <Footer />
      </div>
    </>
  );
}

export default App;
