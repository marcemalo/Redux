import { useContext } from 'react'
import ProjectStore from '../context/store'
import React from 'react'
import { NavLink } from 'react-router-dom';



const Profile = () => {
  const [state] = useContext(ProjectStore);
  return (
    <div className='div'>
    <h2 className="section-title">Users</h2>
    <div className="user-info">
      {state.new_user.map((user, index) => (
        <div key={index} className="user-card">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Password:</strong> {user.password}</p>
          <hr />
        </div>
      ))}
    </div>
    <NavLink to={"/"}><button className='button'>Go Home</button></NavLink>
  </div>
  )
}

export default Profile