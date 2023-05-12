
import { useState } from 'react';
import {useLoaderData, Link} from 'react-router-dom'

const Users = () => {

    const LoadedUsers = useLoaderData();

    const [Users, setUsers] = useState(LoadedUsers);

    const handleDelete = _id =>{
        // console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
          })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.deletedCount > 0){
                alert('deleted successfully');
                const remaining = Users.filter(user => user._id !== _id);
                setUsers(remaining);
            }
        })
    }

    return (
        <div>
            <h1>{Users.length}</h1>
            <div>
                {
                    Users.map(user => <p 
                        key={user._id}>{user.name} : {user.email} <Link to={`/update/${user._id}`}> <button>update</button> </Link> <button
                        onClick={()=>handleDelete(user._id)}
                            > X </button> </p>)
                }
            </div>
        </div>
    );
};

export default Users;