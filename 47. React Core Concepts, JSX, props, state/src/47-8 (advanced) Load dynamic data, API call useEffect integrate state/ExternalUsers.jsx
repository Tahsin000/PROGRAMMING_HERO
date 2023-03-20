import React, {userState, useEffect } from "react"


function ExternalUsers(){
    const [users, setUsers] = userState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setUsers(json);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
    return (
        <div>
        <h2>External Users</h2>
        {
            users.map(user => console.log(user))
        }
        </div>
    );
}
export default ExternalUsers;