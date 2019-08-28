import React, {useState, useEffect} from 'react';

import axiosAuth from '../../utilities/axiosAuth'

const initialUser = {
    username: '',
    email: ''
}

const UsersList = () => {
    const [users , setUsers] = useState([])
    const [userToEdit, setUserToEdit] = useState(initialUser)
    const [editing, setEditing] = useState(false)


    useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axiosAuth()
    .get(' https://career-longevity-predictor.herokuapp.com/api/users')
    .then(res => {
      setUsers(res.data)
    })
  }

    const editUser = (user) => {
        setEditing(true)
        setUserToEdit(user)
    }

      const saveEdit = e => {
    e.preventDefault();
    axiosAuth()
      .put(`https://career-longevity-predictor.herokuapp.com/api/users/${userToEdit.id}`, userToEdit)
      .then(res => {
        console.log('puuuuut', res.data)
        getUsers()
        setEditing(false)

      })
      .catch(err => {
        console.log(err.response)
      })
  };


  const deleteUser = user => {
    
    axiosAuth()
      .delete(`https://career-longevity-predictor.herokuapp.com/api/users/${user.id}`)
      .then(res => {
        getUsers()
      })
      .catch(err => {
        console.log(err.response)
      })
  };

    return (
        <div>
            <h3>Users List</h3>
            {users.map(user => {
                return (
                <div>
                    <p>username: {user.username}</p>
                    <p>email: {user.email}</p>
                    <button onClick={() => editUser(user)}>edit</button>
                    <button onClick={() => {deleteUser(user)}}>delete</button>
                </div> 
                )
            })}
            {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit user</legend>
          <label>
            username:
            <input
              onChange={e =>
                setUserToEdit({ ...userToEdit, username: e.target.value })
              }
              value={userToEdit.username}
            />
          </label>
          <label>
            email:
            <input
              onChange={e =>
                setUserToEdit({
                  ...userToEdit,
                  email: e.target.value 
                })
              }
              value={userToEdit.email}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
        </div>
    )
}

export default UsersList;