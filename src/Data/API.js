import React from 'react';
import Card from './Card';


function API({userList}) {
    return (
        <div className='BigList' >
        <div className='List' >
            {userList.map((el, i)=>(<Card key={i} el={el}/>))}
        </div>
        </div>
    )
}

export default API;
