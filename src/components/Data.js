import React,{useState, useContext} from 'react';
import { MyContextApi } from '../context/MyContext';


const Datas = props=>{

    const {count,handleClick} = useContext(MyContextApi);

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Hi</button>
            </div>
    )
}


export default Datas;