import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import '../../styles/routesStyle/getUsers.css';

function GetSubjects({ isLogged }){
    const [Subjects, setSubjects] = useState([{}]);
    
    const colums = [
        {
            name: 'subject_id',
            selector: (row) => row.subject_id
        },
        {
            name: 'subject',
            selector: (row) => row.subject
        }
    ];
    

    async function fetchSubjectsData(){
        const URL = '/subject';
        const response = await fetch(URL);
        
        const sub = await response.json();
        setSubjects(sub);
    }

        if(!isLogged){
            
            return (
                <>
                    <p>Must be logged in to the system</p>
                </>
            )
        }else {
            return(
       
                <div id='userTable'>
                <DataTable 
                title ='Subjects'
                columns={colums}
                data ={Subjects}
                />
                 <button id='submit' onClick={e => {e.preventDefault(); fetchSubjectsData()}}>Get Subjects</button>
                </div>       
        )
    }  
}

export default GetSubjects;