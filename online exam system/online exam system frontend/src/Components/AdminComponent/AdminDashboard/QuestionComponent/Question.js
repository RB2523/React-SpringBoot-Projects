
//    import style from "./Question.module.css";

   import style from "../SubjectComponent/Subject.module.css";

   import axios from "axios";

   import baseUrl from "../../../baseUrl";

   import {useEffect , useState} from "react";

      function Question(){

        const [questions , setQuestions] = useState([]);

         useEffect(() => {

            async function getAllQuestions(){
               const value = await axios.get(`${baseUrl}/question`);
                setQuestions(value.data);
            }
            getAllQuestions();
         } ,[])



          return (
              <>
                  <div id={style.displayHeadingBox}> 
                      <h2>Question List</h2>     
                   </div>

                   <div id={style.tableBox}>
                      <table>
                         <thead>
                           <tr>
                               <th id={style.center}>Question Name</th>
                               <th id={style.center}>Option one</th>
                               <th id={style.center}>Option two</th>
                               <th id={style.center}>Option three</th>
                               <th id={style.center}>Option Four</th>
                               <th id={style.center}>Question Answer</th>
                                <th id={style.center}>Subject Name</th>
                            </tr>
                         </thead>
                         <tbody id={style.tbody}>
                             {
                                 questions.map((data,i) => {
                                    return(
                                        <tr key={i}>
                                            <td>{data.qname}</td>
                                            <td>{data.optionOne}</td>
                                            <td>{data.optionTwo}</td>
                                            <td>{data.optionThree}</td>
                                            <td>{data.optionFour}</td>
                                            <td>{data.answer}</td>
                                            <td>{data.sname.name}</td>
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

      export default Question ;