import './App.css';
import Header from './components/Header/Index';
import Hero from './components/Hero/Index'
import SectionItems from './components/Sections/SectionItems';
import SectionOne from './components/Sections/SectionOne';
import SectionTwo from './components/Sections/SectionTwo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
  <>
  <Router basename='/'>
  {/* Add Nav Component */}
  <Header />
  <Hero />
  <SectionItems />
  <SectionOne />
  <SectionTwo  />
  <div className='pages'>
  <Switch>
  <Route exact path='/' /> 
  </Switch>
  </div>
  </Router>
  </>
  );
}

export default App;
