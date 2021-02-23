import React,{useState,useEffect}  from 'react'

const LocalList = ({todos,complete,handleDelete}) => {
    return (
        <>
           <div className="col-sm-10 col-lg-6 mt-4">
           {todos.map((todo,index) => {
               return(
                   <div key={index} className="card mt-2 list">
                      <div className="card-body">
                        
                        <div className="float-left">
                          <span style={{textDecoration:todo.completed ? "line-through":null}}  onClick={() => complete(index)} >{todo.task}</span></div>
                         
                            <button onClick={() => handleDelete(index)} 
                            className="float-right btn btn-danger">
                              Delete
                          </button>
                      </div>
                   </div>
               )
           })}
        </div>
        </>
    )
}

export default LocalList
