import './App.css';
import About from './practice/About';
import Books from './practice/Books';
import First  from './practice/First'
import Nav from './practice/Nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

function App() {
 
  return (
   
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" component={Home} exact/>
  
      <Route path="/about" component={About}/>
      <Route path="/first" component={First}/>
      <Route path="/books"
        render={(props) => (
        <Books {...props} name="bisal" />
      )}/>
      </Switch>
    </div>
    </Router>
    
  );
}
const Home = () => {
  return (
  <div>
    
    <h2>Home</h2>
  </div>
  )
}

export default App;