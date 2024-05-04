
    
    import style from "./AdminDashboard.module.css";

    import {useHistory} from "react-router-dom";

    import {NavLink , BrowserRouter , Switch , Route} from "react-router-dom";

     import pic4 from "../../../images/logo.png";
    
    
    import Dashboard from "./Dashboard/Dashboard";
    import Subject from "./SubjectComponent/Subject";
    import Exam from "./ExamComponent/Exam";
    import Question from "./QuestionComponent/Question";
    import Result from "./ResultComponent/Result";
    import StudentList from "./StudentList/StudentList";
    import Student from "./StudentList/Student/Student";

    import Details from "./ExamComponent/DetailComponent/Details";
    import ViewQuestion from "./ExamComponent/ViewQuestion/ViewQuestion";
    import AddQuestion from "./ExamComponent/AddQuestion/AddQuestion";


    
    function AdminDashboard(){

         let history = useHistory();

         function goToAdminLogin(){
              history.push("/AdminLogin");
         }


        return (
            <>
            
             <BrowserRouter>
            
                 <div id={style.header}>
                
            <div id={style.headerHeadingBox}>
                <h3>Online Exam System</h3> 
            </div>

             <div id={style.headerMenuBox}>
                <NavLink exact to="/AdminDashboard"> <span> Dashboard</span> </NavLink>
                <a> <span onClick={goToAdminLogin}> Logout</span></a>
             </div>
        </div>

                <div id={style.content}>

                <div id={style.sideMenubar}>
                         <div id={style.sideMenubarImageBox}>
                           <img src= {pic4} alt="" />
                         </div>

                         <div id={style.sideMenubarList}>
                            <NavLink exact className={style.removeUnderline} to="/AdminDashboard/Subject"> <button > <span>  Subject </span></button></NavLink>
                            <NavLink exact className={style.removeUnderline} to="/AdminDashboard/Exam"> <button > <span>  Exam </span></button></NavLink>
                            <NavLink exact className={style.removeUnderline} to="/AdminDashboard/Question"> <button > <span>  Question </span></button></NavLink>
                            <NavLink exact className={style.removeUnderline} to="/AdminDashboard/Result"> <button > <span>  Result </span></button></NavLink>
                            <NavLink exact className={style.removeUnderline} to="/AdminDashboard/StudentList"> <button > <span>  StudentList </span></button></NavLink>
                        </div>
                    </div>

                    
                    <div id={style.display}>
                      
              <Switch>
                  <Route exact path="/AdminDashboard" component={Dashboard}></Route>
                  
                  <Route exact path="/AdminDashboard/Subject" component={Subject}></Route>
                  <Route exact path="/AdminDashboard/Exam" component={Exam}></Route>
                  <Route exact path="/AdminDashboard/Question" component={Question}></Route>
                  <Route exact path="/AdminDashboard/Result" component={Result}></Route>
                  <Route exact path="/AdminDashboard/StudentList" component={StudentList}></Route>


                      <Route exact path="/AdminDashboard/Exam/Details/:id" component={Details}></Route>
                      <Route exact path="/AdminDashboard/Exam/ViewQuestion/:id" 
                      component={ViewQuestion}></Route>
                      <Route exact path="/AdminDashboard/Exam/AddQuestion/:id" component={AddQuestion}></Route>

                      <Route exact path="/AdminDashboard/StudentList/Details/:id" component={Student}></Route>


              </Switch>
                    
                    </div> 

                </div>


                          
                </BrowserRouter>

              
               

              
            </>
        );
    }

    export default AdminDashboard;