import React from 'react';

const AddUser = () => {
    const handelAddUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name,email}

        // send data to server 
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('user added successfully');
                e.target.reset();
            })
        
    }
    return (
        <div>
            <h2>Please Add a new user</h2>
            <form onSubmit={handelAddUser} >
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;