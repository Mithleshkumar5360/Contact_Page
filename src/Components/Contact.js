import React, { useState } from "react";

function Contact(){

    const [name,setName]= useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone] = useState("");
    const [title,setTitle] = useState("");
    const [message,setMessage] = useState("");
    const [error,setError]=useState([]);
    const [successMessage,setSuccessMessage] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        setError([]);
        setSuccessMessage("");
        const newErrors=[];

        if(!name){
            newErrors.push("Name  can not Empty");
        }
        if(!email){
            newErrors.push("Email can not be Empty");
        }
        if(!phone){
            newErrors.push("Phone can not be Empty")
        }
        if(!title){
            newErrors.push("Title can not be Empty");
        }
        if(!message){
            newErrors.push("Message can not be Empty");
        }
        if(newErrors.length>0){
            setError(newErrors);
            console.log(newErrors);

        }else{
            setError([]);
            setSuccessMessage("Contact saved Successfully");
            console.log("Contact Saved Successfuly");
        }
    }

    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text"value={name} placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <input type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <input type="text"value={phone} placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div>
                    <input type="text" value={title} placeholder="Title or Address Here" onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div>
                    <input type="text"value={message} placeholder="Message Here"onChange={(e)=>setMessage(e.target.value)} />
                </div>
                <button>Save</button>
                
            </form>
            {error.length ? (
                <div>
                    <ul>
                        {error.map((item,index)=>(<li>{item}</li>))}
                    </ul>
                </div>
            ):null}
            {
                successMessage
            }
        </div>
    )
}
export default Contact;