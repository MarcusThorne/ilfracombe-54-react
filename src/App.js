import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Contact from './pages/Contact'
import Apartments from './pages/Apartment'
import Activities from './pages/Activities'
import Home from './pages/Home'
import {Application} from './styles/App.style'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useState} from 'react'
import Footer from './components/Footer'
import './app.css'

function App() {
    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <Router>
            <Application className="App">
                <Navbar toggleSidebar={toggleSidebar} />
                <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
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
                <Footer />
            </Application>
        </Router>
    );
}

export default App;
