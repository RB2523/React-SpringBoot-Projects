

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams ,NavLink } from "react-router-dom";

 import style from "../StudentDashboard.module.css";

 import baseUrl from "../../../baseUrl";

function Exam() {

    let { category } = useParams();

    const [allExam, setAllExam] = useState([]);

    useEffect(() => {
        async function getAllExams() {
            let value = await axios.get(`${baseUrl}/exam`);
            setAllExam(value.data);
           // console.log(value.data);
        }
        getAllExams();
    }, [])

    return (
        <>
            <div id={style.displayBoxHeadingBox}>
                <h1>All {category} Exam</h1>
            </div>
            {
                allExam.map((data, i) => {
                    if(data.name.name === category)
                    return (
                        <div id={style.displayBoxExamBox} key={i}>
                            <div id={style.div1}> <span>{data.name.name}</span> </div>
                            <div id={style.div2}> <span>Exam ID: {data.id}</span> </div>
                            <div id={style.div2}> <span>Exam Description: {data.desc}</span> </div>
                            <div id={style.div3}><span>Pass Marks:{data.passMarks}</span> </div>
                            <div id={style.div4}><span>Total Marks:{data.marks}</span></div>
                            <div id={style.div5}>
                              <NavLink exact to={`/StudentDashboard/Exam/Maths/${data.id}`}>
                                 <button>Go to Exam</button>
                               </NavLink>
                            </div>
                        </div>
                    );

                    return <React.Fragment key={i}></React.Fragment>

                })
            }
        </>
    );
}
export default Exam;