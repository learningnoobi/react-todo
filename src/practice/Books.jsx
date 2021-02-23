import React,{useState,useEffect,useRef} from 'react'
import BookList from './BookList'

const Books = () => {
    const [inputlist, setInputlist] = useState('')
    const [lists, setLists] = useState([])
    const [placeholder, setPlaceholder] = useState('add book')
    const inputRef = useRef(null)
    const handleChange = e => {
        setInputlist(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputlist('')
        if(inputlist.length === 0){
            setPlaceholder("This can't be blank !")
        }
        else if(inputlist===" "){
            setPlaceholder("no spaces allowed")
        }
        else{
            setLists([...lists,inputlist])
        }
        
    }
    const handleDelete = (id) => {
        const newlist = lists.filter((list,index) => index !== id)
        setLists(newlist)
    }
    useEffect(() => {
        inputRef.current.focus()
    },[])
    return (
        <>
        <h2 className="mt-3">Normal Todo App</h2>
        <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        
            <div className="col-sm-10 col-lg-6 mt-3 d-flex " >
            <input ref ={inputRef} value={inputlist} onChange={handleChange} type="text" className="form-control" placeholder={placeholder} />
            <div onClick={handleSubmit} type="submit" className="btn btn-success ml-3">Post</div>
            </div>
            
        </form> 
        <div className="d-flex justify-content-center">
            <BookList lists ={lists} handleDelete={handleDelete}/>
        </div>
        </>
    )
}


export default Books
