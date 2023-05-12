import {useLoaderData} from 'react-router-dom'
const Update = () => {
    const loadedUsser = useLoaderData();

    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = {name, email};

        fetch(`http://localhost:5000/users/${loadedUsser._id}`,{
            method: 'PUT',
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0){
                alert('user updated successfully')
            }
        })
    }
    return (
        <div>
            <h1>Update infomation of {loadedUsser.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text"  name='name' defaultValue={loadedUsser?.name}/>
                <br />
                <input type="email" name="email" id="" defaultValue={loadedUsser?.email}/>
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;