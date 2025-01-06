import React, { useState, useMemo, useEffect } from 'react';

function App() {
  let [Number, setNumber] = useState(0);
  let [dark, setDark] = useState(false);

  let doubleNum = useMemo(()=>{
    return slowFunction(Number);
  },[Number])

  let themestyle = useMemo(()=>{
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  },[dark])

  useEffect(()=>{
    console.log("Theme Changed");
  },[themestyle])


    return (
      <div>
        <input type="number" value={Number} onChange={(e)=>setNumber(e.target.value)} />
        <button onClick={()=>setDark((val)=>!val)}>Change Theme</button>
        <div style={themestyle}>{doubleNum}</div>

      </div>
      
  );
}

export default App;

function slowFunction(num){
  console.log("slow function");
  for(let i=0; i<1000000000; i++){}
  return num*2;
}