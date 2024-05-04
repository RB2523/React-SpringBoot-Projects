 
   import axios from "axios";

   import {useEffect , useState} from "react";

   
   import style from "../SubjectComponent/Subject.module.css"

   import baseUrl from "../../../baseUrl";
   


    function Result(){

        const [results , setResults] = useState([]);

        useEffect(()=>{
           
           async function getAllResults(){
               let value = await axios.get(`${baseUrl}/result`);
               setResults(value.data);
               //console.log(value.data[0]);
           }
               getAllResults();
        },[]);

        return (
            <>
               <div id={style.displayHeadingBox}> 
                   <h2>Exam List</h2>     
                </div>

                <div id={style.tableBox}>
                    <table>
                       <thead>
                           <tr>
                             <th id="center">User Email</th>
                             <th id="center">Exam Name</th>
                             <th id="center">Exam Date</th>
                             <th id="center">Result Status</th>
                             <th id="center">Your Score</th>  
                             <th id="center">Total Marks</th>
                             <th id="center">Total Question</th>  
                          </tr>
                        </thead>
                        <tbody>
                            {
                                results.map((data , i) => {
                                    return(
                                          <tr key={i}>
                                              <td>{data.email.email}</td>
                                              <td>{data.sname.name}</td>
                                              <td>{data.edate}</td>
                                              <td>{data.status}</td>
                                              <td>{data.score}</td>
                                              <td>{data.totalMarks}</td>
                                              <td>{data.totalQuestion}</td>
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

    export default Result;