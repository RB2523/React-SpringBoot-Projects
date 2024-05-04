

   import axios from "axios";
   import React, {useState , useEffect} from "react"; 

   
   import style from "../StudentDashboard.module.css";

   import baseUrl from "../../../baseUrl";


function Result() {

    const [results , setResults] = useState([]);

     useEffect(()=>{    
        async function getAllResults(){
            let value = await axios.get(`${baseUrl}/user/${sessionStorage.getItem("user")}/result`);
            
            setResults(value.data);
           // console.log(value.data);
        }
            getAllResults();
     },[]);


    return (
        <>
            <div id={style.displayHeadingBox}>
                <h2>Student Exam List</h2>
            </div>
            <div id={style.tableBox}>
                <table >
                    <thead>
                        <tr>
                             <th id={style.center}>User Email</th>
                             <th id={style.center}>Exam Name</th>
                             <th id={style.center}>Exam Date</th>
                             <th id={style.center}>Result Status</th>
                             <th id={style.center}>Your Score</th>  
                             <th id={style.center}>Total Marks</th>
                             <th id={style.center}>Total Question</th>  
                        </tr>
                    </thead>
                    <tbody >
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