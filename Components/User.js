import React from "react";

function User (props){
    function truncate(str, maxlength) {
        return (str.length > maxlength) ?
          str.slice(0, maxlength) + '…' : str;          
      }   
   
    return (
        
        <li> 

            {/* Задача 2/ Вопрос 1  */}
            <div>          
            {props.name.includes('e') ? <span> It’s Premium User! Welcome, 
             {props.name}!</span>  : <span> It’s user {props.name} </span>}
            </div> 
             {/*  Задача 2/ Вопрос 2  */}
            <div>   
            {props.name.includes('e') ? <span> It’s Premium User! Welcome, 
             {truncate(props.name, 5)}!</span>  : <span> It’s user {truncate(props.name, 5)} </span>}
            </div>
             {/*  Задача 2/ Вопрос 3  */}
            <div>   
            {props.name.toLowerCase().split('').reverse().join('') === props.name.toLowerCase() ? <span className = "name--highlighted"> 
            It’s user {props.name}!</span>  : <span> It’s user {props.name} </span>}
            </div>
         
                   
            
        </li>)

        }


export default User