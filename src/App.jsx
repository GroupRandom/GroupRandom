import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/style.css';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Index from './pages/Index';
import PublicLayout from './layouts/PublicLayout';


function App() {
  return (
     <Router>
       <Switch>
         <Route path= '/login'>
           <Login />
         </Route>

         
         <Route path= '/admin'>
           <Admin />
         </Route>



         <Route path = {['/']}>
            <PublicLayout>
            <Switch>
              <Route path= '/'>
                <Index />
              </Route>
            </Switch>
          </PublicLayout>
         </Route>




       </Switch>
     </Router>
  );
}

export default App;
