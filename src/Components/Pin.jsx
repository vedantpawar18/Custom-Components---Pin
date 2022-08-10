import React from 'react';
import PropTypes from "prop-types";
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import PinInput from './PinInput';

const Pin = ({length, setOtp}) => {
  const [inputBoxLength]= useState(new Array(length).fill(1));
  
  const [inputData]= useState(new Array(length).fill(""));
  const inputRef= useRef([]);

  const changeHandler=(e,index) =>{
    inputData[index]=e.target.value;
    console.log(inputData)
   if(index<length-1 && e.target.value.length)
   {
    inputRef.current[index+1].focus();
   }
   setOtp(inputData.join(""));
  };

  const handleBackSpace= (e,index) =>{
    inputData[index]=e.target.value;
    if(index>0)
    {
      inputRef.current[index-1].focus();
    }
    setOtp(inputData.join(""));
  }

  useEffect(()=>{
    console.log(inputRef)
  });

  const handlePasteContent=(e)=>{
    const data= e.clipboardData.getData("text").split("").filter((_, index)=>index<length);
    data.forEach((item, index)=>{
      inputData[index]=item;
      inputRef.current[index].value= item;
      if(index<length-1 && e.target.value.length)
      {
       inputRef.current[index+1].focus();
      }
    })
   
  }

  return (
    <div onPaste={handlePasteContent}>
        {inputBoxLength.map((_, index)=>{
            return <PinInput key={index} ref={(element)=>{
              inputRef.current[index]=element;
            }} onChange={(e)=> changeHandler(e,index)} onBackSpaceHandler={(e)=> handleBackSpace(e,index)}/>
        })}
    </div>
  )
}

export default Pin;

Pin.propTypes={
    length: PropTypes.number.isRequired,
    setOtp: PropTypes.func
};