import './App.css';
import RoutingFiles from './components/RoutingFiles';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import FindMoreRecipes from './components/search/FindMoreRecipes';

function App() {
  
  return (
    <>
    <Header/>
        <RoutingFiles/>
        {/* <FindMoreRecipes/> */}
    <Footer/>
    </>
  );
}

export default App;
