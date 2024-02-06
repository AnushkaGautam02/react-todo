import React, { useState } from "react";

const CreateArea =(props)=>{

    const [note, setNote]= useState({
        title : "",
        content:""

    });
    const handleChange =(e)=>{
        const {name,value} =e.target

        setNote(prevNote => {
            return{
                ...prevNote,
                [name]:value
            }
        })
    }
    const submitNote =(e)=>{
        props.onAdd(note)
        setNote({
            title:"",
            content:""
        })
        e.preventDefault()
    }
    return(
        <>
            <form>
                <input
                    name= "title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="title"
                />
                <input
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="description..."
                    row ="3"
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </>
    )
}

export default CreateArea