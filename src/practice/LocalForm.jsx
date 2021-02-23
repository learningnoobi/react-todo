import React,{useState,useEffect}  from 'react'

const LocalForm = ({submit,changed,todo,placeholder,inputRef}) => {
  
    return (
    <form onSubmit={submit} className="d-flex justify-content-center"   >
        <div className="col-sm-10 col-lg-6 mt-3 d-flex " >
        <input ref={inputRef} onChange={changed} value={todo.task}  type="text" className="form-control" placeholder={placeholder}/>
        <div onClick={submit} type="submit" className="btn btn-success ml-3">Post</div>
        </div>
        
    </form> 
    )
}

export default LocalForm
