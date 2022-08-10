import logo from './logo.svg';
import './App.css';
import Pin from './Components/Pin';
import { useState } from 'react';

function App() {
  const [otp, setOtp]= useState("");
  return (
    <div className="App">
      <Pin length={5} setOtp={setOtp}/>
      <div>
        The OTP input is : {otp}
      </div>
    </div>
  );
}

export default App;
