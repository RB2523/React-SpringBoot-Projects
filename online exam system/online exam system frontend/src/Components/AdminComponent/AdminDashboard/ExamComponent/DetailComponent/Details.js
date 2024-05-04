
   import style from "../../SubjectComponent/Subject.module.css";

   import axios from "axios";

   import {useEffect , useState} from "react";
   import {useHistory , useParams} from "react-router-dom";

   import baseUrl from "../../../../baseUrl";

    
    function Details(){
        
        const {id} = useParams();

        const [exam  , setExam] = useState({
            name:"",
            desc:"",
            level:"",
            passMarks:"",
            totalQuestion:"",
            marks:"",
            date: ""
        });

        useEffect(() => {
          
             async function getExamDetails(){
                const value = await axios.get(`${baseUrl}/exam/${id}`);
                setExam(value.data);
             }
             getExamDetails();
        },[id])

   // -------------------------Go back function---------------------------------------
     
      let history = useHistory();
    
      function handleGoBack(){
          history.push("/AdminDashboard/Exam");
      }


        return (
            <>
                <div id={style.displayHeadingBox}> 
                     <h2>Exam Details</h2>     
                 </div>

                 <div id={style.tableBox}>
                     <table >
                         <thead >
                              <tr>
                                <th id={style.center}>Exam Name</th>
                                <td id={style.center}> {exam.name.name} </td>
                             </tr>

                              <tr>
                                <th id={style.center}>Exam Description</th>
                                <td id={style.center}> {exam.desc} </td>
                              </tr>

                               <tr>
                                  <th id={style.center}>Exam Creation Date</th>
                                  <td id={style.center}> {exam.date} </td>
                               </tr>

                               <tr>
                                  <th id={style.center}>Exam TotalMarks</th>
                                  <td id={style.center}> {exam.marks} </td>
                               </tr>

                               <tr>
                                  <th id={style.center}>Exam TotalQuestion</th>
                                  <td id={style.center}> {exam.totalQuestion} </td>
                               </tr>

                               <tr>
                                  <th id={style.center}>Exam PassMarks</th>
                                  <td id={style.center}> {exam.passMarks} </td>
                               </tr>

                               <tr>
                                  <th id={style.center}>Exam Level</th>
                                  <td id={style.center}> {exam.level} </td>
                               </tr>
                            </thead>
                         </table>
                     </div>

                    <div id={style.addSubjectBox}>
                       <button onClick={handleGoBack}>Go Back</button>
                   </div>
            </>
        );
    }

    export default Details;