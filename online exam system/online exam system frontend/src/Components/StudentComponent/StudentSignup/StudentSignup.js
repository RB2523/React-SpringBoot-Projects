

 import { NavLink , useHistory } from "react-router-dom";

 import axios from "axios";
 import { useState } from "react";


  import style from "./StudentSignup.module.css";

  import baseUrl from "../../baseUrl";


function StudentSignup() {

     const [userData , setUserData] = useState({
        name: "",
        email: "",
        password: ""
     });

     function onTextFieldChange(e){
         setUserData({
             ...userData,
             [e.target.name] : e.target.value
         });
     }


      const [password , setPassword] = useState("");

      function handlePassword(e){
        setPassword(e.target.value);
    }
    

    let history = useHistory();
    
   async function handleSignup(){
        // console.log(userData);
        // console.log(password);

        if(userData.password === password)
        {
            await axios.post(`${baseUrl}/user` , userData);
            alert("Your account has created");
            alert("Please Login");
            history.push("/StudentLogin");
        }
        else alert("password did not match");
    }



    return (
        <div id={style.container}>

            <div id={style.formHeading}>
                <h1>Student Signup</h1>
                <p>Please complete the form below to register with us</p>
            </div>

            <div id={style.nameBox}>
                <label htmlFor="name">Name 
                    <input onChange={(e) => onTextFieldChange(e)} 
                    type="text" name="name"  required />
                </label>
            </div>


            <div id={style.emailBox}>
                <label htmlFor="email"> Email
                    <input onChange={(e) => onTextFieldChange(e)}  
                    type="text" name="email" required />
                </label>
            </div>

            <div id={style.passwordBox}>
                <label htmlFor="password"> Password
                    <input onChange={(e) => onTextFieldChange(e)} 
                    type="password" name="password" required />
                </label>
            </div>


            <div id={style.confirmPasswordBox}>
                <label htmlFor="confirmPassword">Confirm Password
                    <input  onChange={(e) => handlePassword(e)}
                     type="password" name="confirmPassword" required />
                </label>
            </div>


            {/* <button id={style.signup} onclick="signup()">Sign Up</button> */}
            <button id={style.signup} onClick={handleSignup} >Sign Up</button>


            <div id={style.login}>
                Have a Account?  <NavLink exact to="/StudentLogin"> Log in</NavLink>
            </div>


        </div>
    );
}

export default StudentSignup;