import {Fragment, useRef} from 'react';

export default function FileChanger(){

    const myref = useRef(null)

    function handleClick(){
        myref.current.click()
    }

    return (
        <Fragment>
            <input ref={myref} type="file" />
            <button onClick={handleClick}>Pick the File</button>
        </Fragment>
    )
}