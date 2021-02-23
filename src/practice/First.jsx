import {v4 as uuid} from 'uuid'
import React,{useState,useEffect,useRef} from 'react'
import LocalList from './LocalList'
import LocalForm from './LocalForm'
const LOCAL_STORAGE_KEY = "react-todo-list-todos"

const First = () => {
  const [todo, setTodo] = useState({
    task:"",
    completed:false
  })
  const [todos, setTodos] = useState([])
  const [placeholder, setPlaceholder] = useState("add task")
   const inputRef = useRef(null)
  // local storage
  useEffect(()=> {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageTodos){
      setTodos(storageTodos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])
  // for ref
  useEffect(() => {
    inputRef.current.focus()
},[])
  // onchanged event
  const changed = (e) => {
    e.preventDefault()
    setTodo({...todo,task:e.target.value})
  }
  const submit = (e) => {
    e.preventDefault() 
    if(todo.task.trim()){
      setTodos([...todos,todo])
      setTodo({...todo,task:""})
    }
    else{
      setPlaceholder("this cannot be blank")
    }
  }
  const complete = (id) => {
   setTodos(
     todos.map((todo,index) => {
       if (index===id){
         return{...todo,completed:!todo.completed}
       };
       return todo;
     })
   )
  }
  const handleDelete = (id) => {
    const newlist = todos.filter((todo,index) => index !== id)
    setTodos(newlist)
  }
 
    return (
      <>
          <h3 className="mt-3">Locally Stored Todo App</h3>

           <LocalForm inputRef={inputRef} placeholder={placeholder} submit={submit} changed={changed} todo={todo} />
        
           <div className="d-flex justify-content-center">
               <LocalList todos={todos} handleDelete={handleDelete} complete={complete} />
          </div>
      </>
    )
}

export default First
