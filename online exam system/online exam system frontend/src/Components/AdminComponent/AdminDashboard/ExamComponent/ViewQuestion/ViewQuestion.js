
      import React, {useState , useEffect} from "react";

      import { useParams , useHistory } from "react-router-dom";

      import axios from "axios";
     

     import style from "../../SubjectComponent/Subject.module.css";

     import baseUrl from "../../../../baseUrl";

     function ViewQuestion(){

//  ---------------------- add Subject & close buttton working  -------------------------------------
       
        const [display , setDisplay]  = useState({
            display:"none"
        });

         function handleEditQuestion(questionId)
         {
            setDisplay({display:"block"});
             setDataInInputField(questionId);
         }

         function handleClose(){
             setDisplay({display:"none"});
         }

         const {id} = useParams();

//  ---------------------- Fetching All Questions -------------------------------------
    
      const [questions , setQuestions] = useState([]);

      useEffect(() => {
          async function getAllQuestions(){
            let value = await axios.get(`${baseUrl}/exam/${id}/question`);
            setQuestions(value.data);
            //console.log(value.data);
          } 
          getAllQuestions();
      },[id])


//  ---------------------- handling text field -------------------------------------

  const [updatedQ , setUpdatedQ] = useState({
    qname: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: "",
    ename: id,
    sname:""
  });


   function onTextFieldChange(e){
        setUpdatedQ({
            ...updatedQ,
            [e.target.name] : e.target.value
        })
       // console.log(updatedQ);
   }





//  ---------------------- Showing data in text field -------------------------------------

 // Id of current question clicked
      const [qId , setQId] = useState();

     
              function setDataInInputField(questionId){
                  setQId(questionId);

                 for(let i=0; i<questions.length ; i++)
                 {
                     if( parseInt( questions[i].id) === parseInt( questionId )) {
                         setUpdatedQ(questions[i]);
                     }
                 }
             }
// -----------------------------------------------------------------------------------------
    
    const [check , setCheck] = useState();
    

     async function updateQuestion(){
          await axios.put(`${baseUrl}/question/${qId}` , updatedQ);
          setCheck(true);
     }

// ----------------------------------------------------------------------------------------

    let history = useHistory();
 
     function handleGoBack(){
         history.push("/AdminDashboard/Exam");
     }
 // ----------------------------------------------------------------------------------------
 
    const [d , setD] = useState();

     async function deleteQuestion(id){
         await axios.delete(`${baseUrl}/question/${id}`);
         setD(true);
     }
  

       if(check) return <ViewQuestion />;

       if(d) return <ViewQuestion />;

      

         return (
             <>
                <div id={style.displayHeadingBox}> 
                            <h2>Question List</h2>     
                         </div>

                     <div id={style.tableBox}>
                         <table>
                            <thead >
                               <tr>
                                  <th id={style.center}>Question Name</th>
                                  <th id={style.center}>Option one</th>
                                  <th id={style.center}>Option two</th>
                                  <th id={style.center}>Option three</th>
                                  <th id={style.center}>Option four</th>
                                  <th id={style.center}>Question Answer</th>
                                  <th id={style.center}>Options</th>
                               </tr>
                            </thead>
                            <tbody>
                                {
                                    questions.map((data , i) => {
                                            return(
                                                <tr key={i}>
                                                  <td>{data.qname}</td>
                                                  <td>{data.optionOne}</td>
                                                  <td>{data.optionTwo}</td>
                                                  <td>{data.optionThree}</td>
                                                  <td>{data.optionFour}</td>
                                                  <td>{data.answer}</td>
                                                  <td>
                                                    <button onClick={()=>handleEditQuestion(data.id)}>Edit</button>
                                                    <button  onClick={()=>deleteQuestion(data.id)}>Delete</button>
                                                  </td>
                                              </tr>
                                            );
                                    })
                                }
                               
                            </tbody>
                         </table>
                     </div>

                    <div id={style.addSubjectBox}>
                       <button onClick={handleGoBack}>Go Back</button>
                   </div>

                   
                   <div id={style.addBox} style={display}>   

                        <label>Enter Question </label>
                       <input value={updatedQ.qname} 
                       onChange={(e) => onTextFieldChange(e)}
                       name="qname"
                       type="text" placeholder="Enter Question " /> 

                        <label >Enter Option A </label>
                       <input value={updatedQ.optionOne}  
                       onChange={(e) => onTextFieldChange(e)}
                       name="optionOne"
                       type="text" placeholder="Enter Option A" /> 

                        <label >Enter Option B </label>
                        <input  value={updatedQ.optionTwo} 
                        onChange={(e) => onTextFieldChange(e)}
                        name="optionTwo"
                        type="text" placeholder="Enter Option B" /> 

                        <label >Enter Option C </label>
                       <input  value={updatedQ.optionThree}  
                       onChange={(e) => onTextFieldChange(e)}
                       name="optionThree"
                        type="text" placeholder="Enter Option C" /> 

                        <label >Enter Option D </label>
                       <input  value={updatedQ.optionFour}  
                       onChange={(e) => onTextFieldChange(e)} 
                       name="optionFour"
                       type="text" placeholder="Enter Option D" /> 

                        <label >Enter Question Answer </label>
                       <input  value={updatedQ.answer}  
                       onChange={(e) => onTextFieldChange(e)}
                       name="answer"
                       type="text" placeholder="Enter Answer" />  

                        <label >Enter Subject </label>
                       <input  value={updatedQ.sname.name} 
                       onChange={(e) => onTextFieldChange(e)} 
                       name="sname"
                       type="text" placeholder="Enter Subject" />  

                       <div id={style.buttonBox}>
                         <button onClick={updateQuestion} >Update Question</button>
                         <button onClick={handleClose} >Close</button>
                       </div>
                   </div>
             </>
         );
     }

     export default ViewQuestion;