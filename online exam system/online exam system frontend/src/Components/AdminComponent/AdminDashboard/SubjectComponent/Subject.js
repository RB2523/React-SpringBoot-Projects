
 
import style from "./Subject.module.css";


 import {useState , useEffect} from "react";

 import axios from "axios";
 
 import baseUrl from "../../../baseUrl";


  
     function Subject()
     {

    //  ---------------------- add Subject & close buttton working  -------------------------------------
        const [display , setDisplay]  = useState({
            display:"none"
        });

         function handleAddSubject()
         {
            setDisplay({display:"block"});
         }

         function handleCloseAdd(){
             setDisplay({display:"none"});
         }

     // --------------- Fetching all subjects from db.json file-------------------------

      const [subjects , setSubjects] = useState([]);

         useEffect(()=>{
            
            async function getAllSubject(){
                let value = await axios.get(`${baseUrl}/subject`);
                setSubjects(value.data);
                  //console.log(value.data[0]);
            }
                getAllSubject();
         },[]);

     // --------------------Adding Subject And re-render subject component-----------------

      const [subject , setSubject] = useState({
          name:"",
      });

     function handleInput(e){
          setSubject({ 
              name: e.target.value
          });
        //   console.log(subject);
     }


       async function handleAddNewSubject(){
            await axios.post(`${baseUrl}/subject` , subject);
            setStatus(true);
        }

        const [status , setStatus] = useState();

      

    // ------------------------Deleting Subject and reload component------------------------------

       async function deleteSubject(name){
          await axios.delete(`${baseUrl}/subject/${name}`);
          setStatusDelete(true);
       }

       const [statusDelete , setStatusDelete] = useState();
      
       
        if(statusDelete) return <Subject />;

        if(status) return <Subject />;

        // -------------------------------------------------------

        if(subjects.length === 0) return(
                             <>
                                <div id={style.content}>

                                        <div id={style.displayHeadingBox}> 
                                              <h2>No Subject Available</h2>     
                                         </div>

                                       <div id={style.addSubjectBox}>
                                           <button onClick={handleAddSubject}>Add Subject</button>
                                       </div>

                                        {/* Add Subject */}


                                        <div id={style.addBox} style={display} >   
                                           <label htmlFor="">Enter Subject </label> 
                                            <input onChange={(e)=>handleInput(e)}  type="text" placeholder="Enter Subject name" /> 

                                          <div id={style.buttonBox}>
                                              <button onClick={handleAddNewSubject}  >Add</button>
                                               <button onClick={handleCloseAdd} >Close</button>
                                          </div>
                                   </div>
 
</div>
                             </>
         );
                
         return(
             <>
            
            <div id={style.content}>

                  <div id={style.displayHeadingBox}> 
                      <h2>Subject List</h2>     
                 </div>

                 <div id={style.tableBox}>
                     <table >
                         <thead>
                            <tr>
                               <th id={style.center}>Subject Name</th>
                                <th id={style.center}>Options</th>
                            </tr>
                         </thead>
                         <tbody id={style.tbody}>
                             {
                                 subjects.map((data , i) => {
                                    return(
                                        <tr key={i}>
                                           <td>{data.name}</td>
                 <td><button onClick={ () => deleteSubject(data.name) }>Delete</button></td>
                                       </tr>
                                    );
                                   
                                 })
                             }
                             

                         </tbody>
                     </table>
                  </div>

                  <div id={style.addSubjectBox}>
                       <button onClick={handleAddSubject}>Add Subject</button>
                   </div>

                   {/* Add Subject */}

                
                   <div id={style.addBox} style={display} >   
                       <label htmlFor="">Enter Subject </label> 
                       <input onChange={(e)=>handleInput(e)}  type="text" placeholder="Enter Subject name" /> 

                       <div id={style.buttonBox}>
                          <button onClick={handleAddNewSubject}  >Add</button>
                          <button onClick={handleCloseAdd} >Close</button>
                        </div>
                   </div>
                   
            </div>



                 
             </>
         );
     }

     export default Subject;