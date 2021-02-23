import React from 'react'

const BookList = ({lists,handleDelete}) => {

    return (
        <>
         <div className="col-sm-10 col-lg-6 mt-4">
           {lists.map((list,index) => {
               return(
                   <div key={index} className="card mt-2 list">
                      <div className="card-body">
                        <div className="float-left">{list}</div>
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

export default BookList
