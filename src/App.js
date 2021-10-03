import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Apartments from './pages/Apartment'
import Activities from './pages/Activities'
import Home from './pages/Home'
import {Application} from './styles/App.style'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Application className="App">
        <Navbar />
        <Switch>
          <Route path="/apartments" component={Apartments} ></Route>
          <Route path="/activities" component={Activities} ></Route>
          <Route path="/contact" component={Contact} ></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path='/airbnb' component={() => {
            window.location.href = 'https://airbnb.co.uk';
            return null;
          }} />
        </Switch>
      </Application>
    </Router>
  );
}

export default App;
