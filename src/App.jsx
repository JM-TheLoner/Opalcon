import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import ServiceDetails from './components/pages/ServiceDetails';
import Contact from './components/pages/Contact';
import QuoteList from './components/pages/QuoteList';
import QuoteBuilder from './components/pages/QuoteBuilder';
import Pagenotfound from './components/pages/PageNotFound';
import { Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/DataContext';
import QuoteProvider from './context/QuoteContext';

function App() {


  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/services" element={<Services/>}></Route>
          <Route exact path="/services/:id" element={<ServiceDetails/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/quote" element={<QuoteList/>}></Route>
          <Route exact path="/getquote" element={<QuoteBuilder/>}></Route>
          <Route exact path='/*' element={<Pagenotfound/>}></Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
