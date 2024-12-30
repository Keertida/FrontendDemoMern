import {useState} from "react"
function Cat() {
    let[count, setCount] = useState(0);
    let[name, setName] = useState(" ");
  return (
    <div>
        
        <button onClick={()=>setCount(count+1)}>++</button>
        <h1>count:{count}</h1>
        <button onClick={()=>setCount(count-1)}>--</button>
        <h1>name:{name}</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default Cat;