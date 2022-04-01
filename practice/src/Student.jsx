import React, {useContext} from 'react';
import {studentContext} from './App'


function Student(){
    const students = useContext(studentContext)


    return (

        <>
         <h1>   {students}  </h1>
        </>
    )
}

export default Student;