import React, { useContext } from 'react'
import { nameContext } from './App'

const Stomach = () => {
    let dog = useContext(nameContext);
  return (
    <div>
        <h1>Stomach : {dog}</h1>
    </div>
  )
}

export default Stomach