
 
  import style from "./AdminLogin.module.css";

  import {NavLink} from "react-router-dom";

  import { useState } from "react";

  import axios from "axios";

  import {useHistory} from "react-router-dom";

  import baseUrl from "../../baseUrl";


     function AdminLogin(){



         const[admin , setAdmin] = useState({
             admin_name:"",
             admin_password:""
         });

        function handleInput(e){
              setAdmin({
                  ...admin,
                  [e.target.name] : e.target.value
              },[]);
        }
        let history = useHistory();
  
         async function login(e){
             const value = await axios.get(`${baseUrl}/admin/${admin.admin_name}`); 

            //  console.log(value.data[0].admin_name);
            //  console.log(admin.admin_name);
           // console.log(value.data);

             if(value.data.name === admin.admin_name)
             {
                if(value.data.password === admin.admin_password){
                    alert("success");
                    history.push("/AdminDashboard");
                }
                else{
                    alert("Wrong Password");
                }
             }
             else{
                 alert("Wrong Admin name");
             }
         }


         return (
            <div id={style.container}>

            
            <div id={style.containerHeadingBox}>
                <h1>Admin Login</h1>
            </div>


            <div id={style.emailBox}>
                <label htmlFor="email"> Email
                    <input name="admin_name" onChange={(e) => handleInput(e)} type="text" id={style.email} />
                </label>
            </div>


            <div id={style.passwordBox}>
                <label htmlFor="password"> Password
                    <input name="admin_password" onChange={(e) => handleInput(e)} type="password" id={style.password} />
                </label>
            </div>

            <button onClick={(e) => login(e)}    id={style.login}>Login</button>
             

            <NavLink to="/" id={style.goBackLink}> Go Back</NavLink> 


            </div>
         );
     }

     export default AdminLogin;