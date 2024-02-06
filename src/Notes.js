import React from "react";

const Notes = (props)=> {
    const handleClick =()=>{
        props.onDelete(props.id)
    }
                        return (<div className="keeper-tab">
                        <h1>{props.title}</h1>
                        <p>{props.content}</p>
                        <button onClick={handleClick}>Delete</button>
                    </div>);}
                    

export default Notes;