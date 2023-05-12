import React, {useState } from "react";

const AddToDo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be Empty");
        }
        else{
          props.addToDo(title, desc);
          setTitle("");
          setDesc("");

        }
    }
  return (
    <div className="container">
      <form onSubmit={submit}>
        <div className="mb-3 my-3">
          <h2>Add ToDo</h2>
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="title"
           />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Descriprion
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
