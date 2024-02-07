import React from 'react'


    // utilize Typescript to eliminate the errors in the users declared
    interface User {
        id: number;
        name:string;

    }
    // await= async functions
    const UsersPage = async () => {
    const res= await fetch ('https://jsonplaceholder.typicode.com/users', 
    {cache: 'no-store'});
    // or { next: {revalidate: 10}}

    const users:User [] = await res.json ();
    return (
        <>
        <h1>
        Users
        </h1>
        <ul>
            {users.map(user => <li key={user.id}>{user.name} </li>)}
        </ul>
        </>
       
        
    )
    }

    export default UsersPage