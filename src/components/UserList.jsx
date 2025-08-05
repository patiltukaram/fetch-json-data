import { useEffect, useState } from "react";
import UserCard from "./UserCard"
import styles from "./UserList.module.css"

function UserList () {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
        try {
           const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
            if(!response.ok)  throw new Error(`HTTP error: Status ${response.status}`);
           
                const data = await response.json();
                setUsers(data);
            } catch (error) {
            setError(error.message || "Unknown Error");
        } finally {
            setLoading(false);
        }
        
    };
    getUsers()
    }, []);

    if (loading) return <p>Loading Users...</p>;
    if (error) return <p style={{color : "red"}}>{error}</p>;
    if (users.length===0) return <p style={{color: "orange"}}>No users available...</p>
    
    return (
        <div className={styles.container}>
           {users.map(user => (
            <UserCard key = {user.id} user={user}/>
           ))}

        </div>
    )
}

export default UserList;