import React, { useState } from 'react';
import "./Form.css"

const Form = (props) => {
    const [name,setName] =useState("");
    const [mail,setMail] =useState("");
    const [num,setNum] =useState("");

    React.useEffect(()=>{
        if(props.editUser){
            setName(props.editUser.name);
            setMail(props.editUser.email);
            setNum(props.editUser.number);
        }
    },[props.editUser])

    const handleSubmit = (e)=>{
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!name || !mail || !num){
            alert("Fill all fields");
        }else if(!emailRegex.test(mail)){
            alert("Enter a valid email")
        }else{
            if(props.editUser){
                const updatedUser = { 
                    id: props.editUser.id,
                    name: name ,
                    email: mail,
                    number: num,
                    };
                props.updateUser(updatedUser)

            }else{
                const user={
                    name: name ,
                    email: mail,
                    number: num,
                }
                props.add(user)
            }
            props.changeVisibility();
        }
        setName('');
            setMail('');
            setNum('');
            
    }



  return (
    <form className='form'> 
        <label>
            Name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label>
            Email : <input type="email" value={mail} onChange={(e)=>setMail(e.target.value)}/>
        </label>
        <label>
            Phone : <input type="phone" value={num} onChange={(e)=>setNum(e.target.value)}/>
        </label>
        <button type="submit" onClick={handleSubmit}>{props.editUser? "Done" : "Add User"}</button>
    </form>
  )
}

export default Form