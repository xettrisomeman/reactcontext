import React , {useState, useReducer} from 'react';

import {MyContextApi} from '../context/MyContext';


const Reducer= (state,action)=>{
    switch(action){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        case 'RESET':
            return 0;
        default:
            return 'TAME IMPALA'
    }
}
const Providers = props =>{

    const [count , dispatch] = useReducer(Reducer,0);


    // const handleClick = ()=>{
    //     //it increases the count after each click
    //     setCount(count+1);
    // }

    return (
        <MyContextApi.Provider value={{count,dispatch}}>
            {props.children}
        </MyContextApi.Provider>
    )

}

export default Providers;