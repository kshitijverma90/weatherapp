import React, { useState } from 'react'
//import User from './User'
import {db,auth} from './firebase'
import { useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Users.css'
function Users() {
    const[users,setUsers]=useState([]);
    const[username,setUsername]=useState('');
    const[userstatus,setUserstatus]=useState('');
    const[useraddeddate,setUseraddeddate]=useState('');
    
 
 
  
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const usersCollection = await db.collection('users').get();
            console.log(usersCollection)
            const usersData = usersCollection.docs.map((doc) => ({
              id: doc.id,
              data:doc.data(),
              username:doc.data().username,
              status:doc.data().status,
              date:doc.data().addedDate
            }));
            setUsers(usersData);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchUsers();
      }, []);
    
      const deleteUser = async (userId) => {
        try {
          await db.collection('users').doc(userId).delete();
          setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      };
    
      const updateStatus = async (userId, newStatus) => {
        try {
          await db.collection('users').doc(userId).update({ status: newStatus });
          setUsers((prevUsers) =>
            prevUsers.map((user) =>
              user.id === userId ? { ...user, status: newStatus } : user
            )
          );
        } catch (error) {
          console.error('Error updating status:', error);
        }
      };
    
      const addUser = async () => {
        // Implement logic to add a new user to the db collection
        // Update the users state accordingly
        
      };



  return (
    
    <div className="user-list-container">
    <h2 className="list-heading">User List</h2>
    <table className="user-table">
        <thead>
            <tr>
                <th className="username-header">Username</th>
                <th className="date-header">Date</th>
                <th className="status-header">Status</th>
                <th className="actions-header">Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.filter((user) => user.status === 'Active').map((user) => (
                <tr key={user.id}>
                    <td className="username-cell">{user.username}</td>
                    <td className="date-cell">{user.date}</td>
                    <td className="status-cell">{user.status}</td>
                    <td className="actions-cell">
                        <button className="delete-btn" onClick={() => deleteUser(user.id)}>Delete</button>
                        <button className="inactive-btn" onClick={() => updateStatus(user.id, 'Inactive')}>Set Inactive</button>
                        <button className="active-btn" onClick={() => updateStatus(user.id, 'Active')}>Set Active</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
   
</div>

  )
}

export default Users
