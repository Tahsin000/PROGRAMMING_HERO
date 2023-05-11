import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users, setUser] = useState([]); 
  const handleAdduser = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};

    console.log(user);

    fetch('http://localhost:5000/users', {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const newUsers = [...users, data];
      setUser(newUsers);
      form.reset();
    })


    // fetch('http://localhost:5000/users', {
    //   method: 'POST',
    //   headers: {
    //     'content-type':'application/json'
    //   },
    //   body: JSON.stringify(user)
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log('inside post response', data);
    // })

  }
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  return (
    <>
      <h1>user Management system</h1>
      <h3>Number of Users: {users.length}</h3>
      <form onSubmit={handleAdduser}>
        <input type="text" name='name'/>
        <br />
        <input type="email" name='email'/>
        <br />
        <input type="submit" value="Add user"/>

      </form>
    <div>
      {
        users.map(user=><p key={user.id}>{user.id}. {user.name} {`=> ${user.email}`}</p>)
      }
    </div>
    </>
  )
}

export default App
