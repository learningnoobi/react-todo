import React,{useState,useEffect,useRef}  from 'react'

const About = () => {
    const [names, setNames] = useState({
        first:"bishal",
        second:"rai"
    })
    return (
        <div>
            <h4>{names.first} {names.second}</h4>
            <button onClick={() => setNames({...names,first:"rayon"})}className="btn btn-dark">Change</button>
        </div>
    )
}

export default About
