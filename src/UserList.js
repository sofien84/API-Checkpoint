import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './App.css';

function UserList(){
    const [users , setUsers]= useState([]) ;
    useEffect(()=>
    {
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response) => setUsers(response.data))
       .catch(error=>console.log(error));
      
    },[]
  );
return (
    
    <div>
          <h1> Informations Profile</h1>
    <ul className="users-list">
{users.map(user=>
<li className="card" key={user.id}>
{user.name}<br/>
{user.username}<br/>
{user.phone}<br/>
{user.email}<br/>
</li>) }
    </ul>
  

 </div>
    
);

}
export default  UserList  ;