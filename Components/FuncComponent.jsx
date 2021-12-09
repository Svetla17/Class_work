import { useState, useCallback, Component, createRef, useRef, useEffect, creatContext } from "react";


// function FuncComponent(){

//     const ref = useRef()
//     useEffect(() => {
//       console.log(ref);
//     }, [])

//     return <input ref={ref}></input>;
// }

// const [value, setValue] = useState('');

// const hendleChange = (e) => {
//     console.log(e);
//     setValue(e.target.value)


// }

// return <input value={value} onChange={hendleChange}></input>;

// }


// const ref = useRef()
// // const[value,setValue]= useState("")
// const [configInputs]= useState(["1", "2"]);

// const hendleSubmit = (e) => {
//         e.preventDefault();
//         const values = Array.from(ref.current.elements).map((item)=>item.value);
//         console.log(values);
// }
    
// // return (
// // <>
//     return configInputs.map((value) => <input value = {value}></input>);

    {/* <form onSubmit = {hendleChange} ref = {ref}>
        <input></input> 
        <input></input> 
        <input></input> 
        <input></input> 
        <input></input> 
        <button type = "submit"></button>


    </form>) */}
// </>
// }

function FuncComponent(){
    

    const [value, setValue] = useState('');

    const hendleChange = (e) => {        
    setValue(e.target.value)}

    return (
    <textarea  value = {value} onChange = {hendleChange}></textarea>)


}

// const ref = useRef()

// const hendleChange = (e) => {        
//     console.log(ref.current.value)}
//     useEffect(() => {
//       console.log(ref);
//     }, [])

//     return <textarea ref={ref}></textarea>;
// }

export default FuncComponent;
