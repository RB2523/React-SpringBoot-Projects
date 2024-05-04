
 import Home from "./Components/HomeComponent/Home";
 
import StudentLogin from "./Components/StudentComponent/StudentLogin/StudentLogin";
import AdminLogin from "./Components/AdminComponent/AdminLogin/AdminLogin";
import AdminDashboard from "./Components/AdminComponent/AdminDashboard/AdminDashboard";
import StudentDashboard from "./Components/StudentComponent/StudentDashboard/StudentDashboard";

import {Route , BrowserRouter , Switch} from "react-router-dom";
import StudentSignup from "./Components/StudentComponent/StudentSignup/StudentSignup";

 


    function App(){
      return (
        <>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/StudentLogin" component={StudentLogin}></Route>
                  <Route exact path="/StudentSignup" component={StudentSignup}></Route>
                  <Route exact path="/AdminLogin" component={AdminLogin}></Route>
                  <Route exact path="/AdminDashboard" component={AdminDashboard}></Route>
                  <Route exact path="/StudentDashboard" component={StudentDashboard}></Route>
              </Switch>
          </BrowserRouter>
        </>
      );
     
    }

      

  export default App;