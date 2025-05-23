import React from 'react'

function userList({filterUser}) {
  return (
    <div>
      <ul>
        {filterUser.map((val) => <li key={val.id}>{val.name}</li>)}
      </ul>
    </div>
  )
}

export default userList
