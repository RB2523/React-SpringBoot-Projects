 
   import { useState ,useEffect} from "react";
   import axios from "axios";

   import {NavLink} from "react-router-dom";


    import style from "../SubjectComponent/Subject.module.css";

    import baseUrl from "../../../baseUrl";

    function Exam(){

//  ---------------------- add Exam & close buttton working  -------------------------------------
        const [display , setDisplay]  = useState({
            display:"none"
        });

         function handleAddExam()
         {
            setDisplay({display:"block"});
         }

         function handleCloseExam(){
             setDisplay({display:"none"});
         }

// --------------- Fetching all Exam from db.json file-------------------------

      const [exams , setExams] = useState([]);

      useEffect(()=>{
         
         async function getAllExam(){
             let value = await axios.get(`${baseUrl}/exam`);
             setExams(value.data);
             //console.log(value.data[0].name);
         }
             getAllExam();
      },[]);


// --------------------Adding Exam And re-render Exam component-----------------

     var date = new Date();
     var d =  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() ;
     var t =  date.getHours() + ":" + date.getMinutes() +  ":" + date.getSeconds() ;


      const [exam , setExam] = useState({
        name:"",
        desc:"",
        level:"",
        passMarks:"",
        totalQuestion:"",
        marks:"",
        date: d+" "+t
    });
   
   function handleInput(e){
        setExam({ 
            ...exam,
            [e.target.name]: e.target.value
        });
        // console.log(exam);
    }

    async function handleAddNewExam(){

        setExam(
            exam.name = {name: document.getElementById("nameFiled").value}
        );

        await axios.post(`${baseUrl}/exam` , exam);
        setStatus(true);
    }

    const [status , setStatus] = useState();


    // ----------------------------Deleting Exam-----------------------------------------------

       const [questions , setQuestions] = useState([]);

       useEffect(() => {
           async function getAllQuestions(){
               let value = await axios.get(`${baseUrl}/question`);
               setQuestions(value.data);
            }
            getAllQuestions();
       },[])


       const [statusDeleteExam , setStatusDeleteExam] = useState();


       async function deleteExam(id){
        //    console.log(id);
           
            for(let i=0; i<questions.length ;i++)
            {
                if( parseInt( questions[i].exam_id) === parseInt( id )){
                    // console.log(questions[i].id);
                    await axios.delete(`${baseUrl}/question/${questions[i].id}`);
                } 
            }
            await axios.delete(`${baseUrl}/exam/${id}`);
            setStatusDeleteExam(true);
       }

      if(status) return <Exam />

      if(statusDeleteExam) return <Exam />

        return (
            <>
               <div id={style.displayHeadingBox}> 
                    <h2>Exam List</h2>     
               </div>

                <div id={style.tableBox}>
                    <table >
                        <thead >
                            <tr>
                                <th id={style.center}>Exam Name</th>
                                <th id={style.center}>Exam Desc.</th>
                                <th id={style.center}>Exam Creation Date</th>
                                <th id={style.center}>Exam Level</th>
                                <th id={style.center}>Options</th>
                            </tr>
                          </thead>
                          <tbody id={style.tbody}>
                              {
                                  exams.map((data ,i) => {
                                      return(
                                        <tr key={i}>
                                           <td>{data.name.name}</td>
                                           <td>{data.desc}</td>
                                           <td>{data.date}</td>
                                           <td>{data.level}</td>
                                           <td>
                                               <NavLink exact to={`/AdminDashboard/Exam/Details/${data.id}`}>
                                                 <button>Details</button>  
                                               </NavLink> 

                                          <NavLink exact to={`/AdminDashboard/Exam/ViewQuestion/${data.id}`}>
                                                 <button>View Question</button>  
                                               </NavLink> 

                                             <NavLink exact to={`/AdminDashboard/Exam/AddQuestion/${data.id}`}>
                                                 <button>Add Question</button>  
                                               </NavLink> 

                                             <button onClick={() => deleteExam(data.id)}>Delete</button>
                                          </td>
                                        </tr>
                                      );
                                  })
                              }
                              
                          </tbody>
                     </table>
                 </div>

                 <div id={style.addSubjectBox}>
                      <button onClick={handleAddExam}>Add Exam</button>
                 </div>

                  <div id={style.addBox} style={display}>   
                     <label htmlFor="">Enter Subject Name </label>
                     <input id="nameFiled" onChange={(e) => handleInput(e)} name="name" type="text" 
                     placeholder="Enter Subject Name" /> 

                     <label htmlFor="">Enter Exam desc </label>
                     <input onChange={(e) => handleInput(e)} name="desc"  type="text" 
                     placeholder="Enter Exam des" /> 

                     <label htmlFor="">Enter Exam Level </label>
                      <input onChange={(e) => handleInput(e)} name="level"   type="text" placeholder="Enter Exam Level" /> 

                      <label htmlFor="">Enter Total Question </label>
                      <input onChange={(e) => handleInput(e)} name="totalQuestion"   
                      type="text" placeholder="Enter Total Question" /> 

                     <label htmlFor="">Enter Total Marks </label>
                      <input onChange={(e) => handleInput(e)} name="marks"   
                      type="text" placeholder="Enter Total Marks" /> 

                     <label htmlFor="">Enter Pass Marks </label>
                     <input onChange={(e) => handleInput(e)} name="passMarks"   
                     type="text" placeholder="Enter Pass Marks" /> 

                      <div id={style.buttonBox}>
                         <button onClick={handleAddNewExam} >Add</button>
                         <button onClick= {handleCloseExam}  >Close</button>
                       </div>
                  </div>
            </>
        );
    }

    export default Exam;