import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Home/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import AboutUs from './Components/Home/About Us/AboutUs';
import Login from './Components/Login/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Home/Shared/Footer/Footer';
import Register from './Components/Login/Register/Register';
import Booking from './Components/Booking/Booking';
import AddService from './Components/AddService/AddService';

function App() {
  return (
    <div className="App">
      <Router>
         <Header></Header>
        <Switch>
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route path="/home">
         <Home></Home>
         </Route>
         <Route path="/about">
         <AboutUs></AboutUs>
         </Route>
         <Route path="/login">
         <Login></Login>
         </Route>
         <Route path="/register">
           <Register></Register>
         </Route>
         {/* it might be private route */}
         <Route path="/booking/:serviceId">
            <Booking></Booking>  
         </Route>
         <Route path="/addService">
           <AddService></AddService>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
