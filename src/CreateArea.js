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
            <form className="my-5 border border-1 p-4 rounded w-25 m-auto">
                <div className="py-4"><input
                    name= "title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="title"
                    className="w-100 p-2 rounded border border-secondary-subtle"
                />
                </div>
                <div className="py-4">
                <input
                className="w-100 p-2 rounded border border-secondary-subtle"
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="description..."
                    row ="3"
                />
                </div>
                <button onClick={submitNote} className="btn bg-warning text-light">Add</button>
            </form>
        </>
    )
}

export default CreateArea