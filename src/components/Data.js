import React,{useState, useContext} from 'react';
import { MyContextApi } from '../context/MyContext';


const Datas = props=>{

    const {count,dispatch} = useContext(MyContextApi);

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>dispatch('INCREMENT')}>Add</button>
            <button onClick={()=>dispatch('RESET')}>RESET</button>
            <button onClick={()=>dispatch('DECREMENT')}>Sub</button>
            </div>
    )
}


export default Datas;