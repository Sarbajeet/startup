import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Loading from './components/Loading'
function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  })
  return (
    <>
    {isLoading==true?<Loading/>:
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}></Route>
      </Switch>
    </Router>
    }
    </>
  );
}

export default App;
