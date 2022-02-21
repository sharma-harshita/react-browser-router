import React from "react";
import { useParams } from "react-router-dom";
import { students } from "./Home";

const Student = () => {

    const params = useParams();
    const selectedStudent = students.filter(value=>value.id=== Number(params.stuId));
    return(
        <div>
            This is Student Component
            {selectedStudent.map((value,index)=>{
                return(
                    <div key={index}>
                        {value.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Student