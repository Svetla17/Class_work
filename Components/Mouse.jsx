import React, { createRef, useState } from 'react';

// function Mouse(){
//     const [clientX, setCounterX] = useState(0)
//     const [clientY, setCounterY] = useState(0)

//     const handeleMouseMoove = (event)=> {
//         // console.log(event);
        
//         setCounterX(event.clientX) 
//         setCounterY(event.clientY)
        
//     }

//         return(
//             <div onMouseMove = {handeleMouseMoove} className= "div">

//                 X:{clientX}, Y:{clientY}
//             </div>
//         )
// }

// class Mouse extends React.Component {

    
//         state = {
//             clientX: 0 ,
//             clientY: 0 
//         };
    


//     handeleMouseMoove = (event)=> {                
                
//         this.setState({clientX: event.clientX, clientY: event.clientY}) 
               
//     };
//     render(){
//         const {clientX, clientY} = this.state;
//         return (
//             <div onMouseMove = {this.handeleMouseMoove} className= "div">

//                 X: {clientX}, Y: {clientY}
//             </div>
//         )
//     }
// }


// export default Mouse;


class Mouse extends React.Component {

    
            ref = createRef();   
            componentDidMount() {
                console.log(this.ref);
                this.ref.current.focus();
            }    
   
            render(){
            
            return (
                <input ref = {this.ref}></input> 
            )
        }
    }
    
    
    export default Mouse;
    

