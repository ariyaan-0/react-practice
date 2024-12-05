import React, { useEffect, useRef } from 'react'
import Input from './Input';

function Form() {
    const inputRef = useRef(null);
    useEffect(()=>{
        //component loaded
        // console.log(inputRef.current)
        inputRef.current.focus()

    }, []);

    return (
        <div>
            <p>
                <Input ref={inputRef} type="text" placeholder='enter something here' />
            </p>
        </div>
    )
}

export default Form