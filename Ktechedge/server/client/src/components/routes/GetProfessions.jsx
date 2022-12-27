import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import '../../styles/routesStyle/getUsers.css';

function GetProfessions({ isLogged }){
    const [Professions, setProfessions] = useState([{}]);
    
    
    const colums = [
        {
            name: 'profession_id',
            selector: (row) => row.profession_id
        },
        {
            name: 'profession',
            selector: (row) => row.profession
        }
    ];
    

    async function fetchProfessionsData(){
        const URL = '/profession';
        const response = await fetch(URL);
        
        const prof = await response.json();
        setProfessions(prof);
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
                title ='Professions'
                columns={colums}
                data ={Professions}
                />
                <button id='submit' onClick={e => {e.preventDefault(); fetchProfessionsData()}}>Get Professions</button>
                </div>       
        )
    }  
}

export default GetProfessions;