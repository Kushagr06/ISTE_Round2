import {React, useState} from 'react'
import '../components/Auth.css'
// import Search from './search'
//import { Link } from 'react-router-dom'


function Auth() { 
    const [password, setPwd] = useState('');
    const [email, setEmail] = useState('');
    function handleSubmit(){
        if(password == ''||email == '')
         alert('Must enter email and password!')
        else if (password == '1234' && email == 'admin@admin.com')
        alert('Welcome')
        else if(password != '1234'||email != 'admin@admin.com'){
            //window.location.href = './wrong'
            alert('Wrong Credentials')}
    }
  return (
    <div className="Auth-form-container">
        <form className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">
                    Sign In
                </h3>
                
                <div className="form-group mt-3">
                    <label >Email Address</label>
                    <br></br>
                    <input type="email" className="form-control mt-4 rounded w-72" placeholder=" Enter email"
                    onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                <label >Password</label>
                <br></br>
                    <input type="password" className="form-control mt-4 rounded-md w-72" placeholder=" Enter password" 
                    onChange={e => setPwd(e.target.value)}/>
                </div>
                <div className="d-grip gap-3 mt-6 hover: bg-orange-900">
                   
                    <button className="btn rounded btn-primary hover:bg-orange-900 duration-300	" type="button" onClick={handleSubmit}>
                      Submit
                    </button>
                    
                </div>
                <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">Password?</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Auth