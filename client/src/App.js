import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <Route path="/" exact component={Fib}/>
        <Route path="/otherpage" exact component={OtherPage}/>
      </div>
    </Router>
  );
}

export default App;
