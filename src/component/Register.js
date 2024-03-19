import React from 'react'

function Register() {
  return (
    <div className='login-container col-12 col-sm-4'>
            <div className='title'>Register </div>
            <div className='text'>Name</div>
            <input className='inputlogin' type='text' placeholder='Name'
             
            />
            <div className='text'>Email</div>
            <div className='input-eye'>
                    <input className='inputlogin w-100' type='text' placeholder='Password...' 
                    />
            </div>
            <div className='text'>Password</div>
            <div className='input-eye'>
                    <input className='inputlogin w-100' type='text' placeholder='Password...' 
                    />
            </div>
            <div className='text'>Confirm Password</div>
            <div className='input-eye'>
                    <input className='inputlogin w-100' type='text' placeholder='Password...' 
                    />
            </div>
            <div className='text'>ID Card</div>
            <div className='input-eye'>
                    <input className='inputlogin w-100' type='text' placeholder='Password...' 
                    />
            </div>
            <button className='btn btn-danger' >Register</button>
    
        </div>
  )
}

export default Register
