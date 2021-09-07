import React from 'react';
import Card from '@material-ui/core/Card';
import {useEffect , useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Intial_users } from './Intial_users';


const BASE_URL = "https://abdul-mykartapp.herokuapp.com"
export function Users() {

  const [users, setUsers] =useState([]);
  const [username, setUsername] = useState("")
  const [userpic, setUserpic] = useState("")

  function getUsers(){
    fetch(`${BASE_URL}/data`,{
      method: "GET",
    })
    .then(data => data.json())
    .then(users =>{console.log(users)})
    

  }

  function deleteUsers(_id) {
    fetch(`${BASE_URL}/data/${_id}`,{
      method: "DELETE",
    })
    .then(data => data.json()) 
    .then((user) => console.log(user))
    .then(() =>getUsers())
    
  }


function createUser(){
  fetch(`${BASE_URL}/data/createuser`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name:username,pic:userpic}),
    })
    .then(data => data.json())
    .then(() =>getUsers());
console.log('createUser')
}


function updateUser(id){
  fetch(`${BASE_URL}/${id}`,{
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name:username,pic:userpic}),
    })
    .then(data => data.json())
    .then(() =>getUsers());
     
}
    useEffect(()=> {
      getUsers();
    }, []); 



  return (
   <div className="textf">
     <TextField value={username} onChange={(event) => setUsername(event.target.value)}type="text" variant="outlined" label="name" />
     <TextField value={userpic} onChange={(event) => setUserpic(event.target.value)}type="text" variant="outlined" label="pic url" />
     <Button color="secondary" onClick={()=>createUser()}>Add users</Button>
    <div class="carddiv">
        {users.map((user)=>(
         <User name={user.name} pic={user.pic} id={user.id} getusers={getUsers} deleteusers={deleteUsers} updateusers={updateUser}/>
        ))}
      </div>
      </div>
  
  );
}

 function User({ name,pic,id, deleteusers,updateusers }){
  const history = useHistory();
  
 
  return(
    <div >
       {/* onClick={()=>history.push("/users/" + id )} */}
    <Card className="usercard">
            
            <img src={pic} alt='propic' style={{borderRadius:'50%', height:'76px' , width:'75px', objectFit:'cover'}}></img>
            <h2>name: {name}</h2>
            <button
            onClick={()=>deleteusers(_id)}
            >delete</button> <button
            onClick={()=>updateusers(id)}
            >update</button>
         </Card>
         </div>
  );
}