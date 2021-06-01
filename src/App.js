
import './App.css';
import Header from './components/Header/Index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
  <>
  <Router basename='/'>
  {/* Add Nav Component */}
  <Header />
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
