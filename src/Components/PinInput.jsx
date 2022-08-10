import React, { forwardRef } from 'react';

const PinInput = forwardRef(({onChange, onBackSpaceHandler}, ref) => {
    const handleKeyUp=(e) =>{
        if(e.keyCode===8 && !e.target.value){
            onBackSpaceHandler(e);
        }
        else{
            onChange(e);
        }
    }
  return (
    <div>
      <input ref={ref} maxLength={1} onKeyUp={handleKeyUp}
      onChange={(e)=>onChange(e)}/>
    </div>
  )
});

export default PinInput