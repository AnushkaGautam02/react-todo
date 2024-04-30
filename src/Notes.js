import React from "react";

const Notes = (props)=> {
    const handleClick =()=>{
        props.onDelete(props.id)
    }
                        return (<div className="keeper-tab p-3">
                        <h1>{props.title}</h1>
                        <p>{props.content}</p>
                        <button onClick={handleClick} className="btn btn-danger">Delete</button>
                    </div>);}
                    

export default Notes;