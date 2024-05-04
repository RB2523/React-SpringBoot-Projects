

   import {useState , useEffect} from "react";
   import axios from "axios";

   import {NavLink} from "react-router-dom";

   import style from "../SubjectComponent/Subject.module.css";

   import baseUrl from "../../../baseUrl";

     function StudentList(){

       const [students , setStudents] = useState([]);

       useEffect(()=> {
         async function getAllStudent(){
           let value = await axios.get(`${baseUrl}/user`);
           setStudents(value.data);
         }
         getAllStudent();
       },[])

         return (
             <>
               <div id={style.displayHeadingBox}> 
                   <h2>Student List</h2>     
                </div>

                <div id={style.tableBox}>
                   <table>
                      <thead>
                         <tr>
                            <th id={style.center}>User Name</th>
                            <th id={style.center}>User Email</th>
                            <th id={style.center}>Options</th>
                         </tr>
                       </thead>
                       <tbody>
                         {
                           students.map((data , i) => {
                             return(
                              <tr key={i}>
                                 <td>{data.name}</td> 
                                 <td>{data.email}</td> 
                                 <td>
                                   <NavLink exact to={`/AdminDashboard/StudentList/Details/${data.email}`}>
                                     <button>View Result</button> 
                                   </NavLink>
                                   </td>
                             </tr>
                             );
                           })
                         }
                           
                        </tbody>
                    </table>
                </div>
             </>
         );
     }

     export default StudentList;