// components
import Nav from './components/Nav';
import Main from './components/Main';
import Cards from './components/Cards';
import Footer from './components/Footer';

// styles
import './stylesheets/main.css';

function App() {
  return (
    <div className='App'>
      <main className='hero'>
        <Nav />
        <Main />
      </main>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
