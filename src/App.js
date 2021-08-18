import NavBar from '../src/components/NavBar';
import ViewEmployee from './components/ViewEmployee';
import AddEmployees from './components/AddEmployees';
import Home from './components/Home';
import NotFound from './components/NotFound';
import EditEmployee from './components/EditEmployee';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/view" component={ViewEmployee}/>
      <Route exact path="/add" component={AddEmployees}/>
      <Route exact path="/edit/:id" component={EditEmployee}/>
      <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    
  );
 
}

export default App;
