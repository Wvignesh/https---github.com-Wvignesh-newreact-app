 import React from 'react'
 import './App.css';
 import   {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contactus from './pages/Contactus';
import Products from './pages/Products';
import Signup from './pages/Signup';
import Notfound from './pages/Notfound';

 
 function App() {
   return (
     < >
     
     <Router>
   
   <Navbar/>

   <Switch>
      
      <Route path='/home' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/services' component={Services} />
     <Route path='/products' component={Products} />
      <Route path='/contactus' component={Contactus} />
      <Route path='/signup' component={Signup} />
      <Route   component={Notfound} />
      

   </Switch>

  </Router>

     </>
   )
 }
 
 export default App
 