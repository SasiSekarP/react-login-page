import './App.css';
import { useState } from 'react';

function App() {

  

  const [booleanValue, setBooleanValue] = useState({ name: true, emailId: true, phoneNo: true, password: true, confirmPassword: true, confirmPasswordMatch: true});

  const [userData, setUserData] = useState({ name: '', emailId: '', phoneNo: '', password: '', confirmPassword: ''});


  const updateData = (e) => {
    const keyName = e.target.name;
    const keyValue = e.target.value;

    setUserData({ ...userData, [keyName]: keyValue });
  }

  const getData = (e) => {
    e.preventDefault();

    let [name, emailId, phoneNo, password, confirmPassword, confirmPasswordMatch] = ['','','','','','']

    if (userData.name) {
      name = true
    } else {
      name = false
    }
    if (userData.emailId) {
      emailId = true
    } else {
      emailId = false
    }
    if (userData.phoneNo) {
      phoneNo = true
    } else {
      phoneNo = false
    }
    if (userData.password) {
      password = true
    } else {
      password = false
    }
    if (userData.confirmPassword) {
      confirmPassword = true
    } else {
      confirmPassword = false
    }
    if (userData.confirmPassword && userData.password) {
      if (userData.confirmPassword === userData.password) {
        confirmPasswordMatch = true
      } else {
        confirmPasswordMatch = false;
      }
    } else {
      confirmPasswordMatch = true;
    }

    setBooleanValue({ name, emailId, phoneNo, password, confirmPassword, confirmPasswordMatch });
    
    if (name && emailId && phoneNo && password && confirmPassword && confirmPasswordMatch) {
      alert(`You are successfully logged in.\n name:${userData.name} \n Email Id: ${userData.emailId} \n Phone no: ${userData.phoneNo}\n password: ${userData.password}`);

      setUserData({ name: '', emailId: '', phoneNo: '', password: '', confirmPassword: '' });
    }
  }

  return (
    <div className='App'>
      <form className="card" onSubmit={getData}>
        <h1 className='row row2'>Login Page</h1>
        <div className='row row1'>
          <label htmlFor='name'>Name</label>
          <input onChange={updateData} value={userData.name} type='text' name='name' id='name' />
          {(!booleanValue.name) && <p>*Enter Name</p>}
        </div>
        <div className='row row1'>
          <label htmlFor='emailId'>Email ID</label>
          <input onChange={updateData} value={userData.emailId} type='text' name='emailId' id='emailId' />
          {(!booleanValue.emailId) && <p>*Enter Email</p>}
        </div>
        
        <div className='row row1'>
          <label htmlFor='phoneNo'>Phone no</label>
          <input onChange={updateData} value={userData.phoneNo} type='number' name='phoneNo' id='phoneNo' />
          {(!booleanValue.phoneNo) && <p>*Enter phone no</p>}
        </div>
        
        <div className='row row1'>
          <label htmlFor='password'>Password</label>
          <input onChange={updateData} value={userData.password} type='password' name='password' id='password' />
          {(!booleanValue.password) && <p>*Enter password</p>}
          {(!booleanValue.confirmPasswordMatch) && <p>*password must match</p>}
        </div>
        
        <div className='row row1'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input onChange={updateData} value={userData.confirmPassword} type='password' name='confirmPassword' id='confirmPassword' />
          {(!booleanValue.confirmPassword) && <p>*Enter password</p>}
          {(!booleanValue.confirmPasswordMatch) && <p>*password must match</p>}
        </div>
        
        <div className='btn-container'>
          <button type='submit' className='btn'>submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;