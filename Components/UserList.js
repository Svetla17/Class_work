import User from "./User";



const users = [
{id: "uniq1", name:"Paul"}, 
{id: "uniq2", name:"Mary"}, 
{id: "uniq3", name:"Viktor"}, 
{id: "uniq4", name:"Suzanna"}, 
{id: "uniq5", name:"Peter"}, 
{id: "uniq6", name:"Vladislav"}, 
{id: "uniq7", name:"Anna"}
];


function UserList(){  
    return(
        <div>
            {users.map((item) =>  (            
                <User key = {item.id} name = {item.name}></User>   
             
    ))}
        </div>
    )
}

export default UserList;