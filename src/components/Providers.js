import React , {useState} from 'react';

import {MyContextApi} from '../context/MyContext';


const Providers = props =>{

    const [count , setCount] = useState(0);


    const handleClick = ()=>{
        //it increases the count after each click
        setCount(count+1);
    }

    return (
        <MyContextApi.Provider value={{count,handleClick}}>
            {props.children}
        </MyContextApi.Provider>
    )

}

export default Providers;