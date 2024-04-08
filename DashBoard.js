import React from 'react'

const DashBoard = ({match}) => {
  return (
    <div>
        
        <center>
            <h4>Displaying Dashboard page:{match.params.name}</h4>
            <button>Login</button>
        </center>

    </div>
  )
}

export default DashBoard