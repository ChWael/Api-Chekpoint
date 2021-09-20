import "./App.css";
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import API from './Data/API';



function App() {
    const [userList, setUserList]=useState([]);
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => { setUserList(res.data) })
        .catch(err =>{console.log(err)})
    }, [] );
    return(
        <div>
            
            <API userList={userList} />
            
        </div>
    )
}

export default App;
