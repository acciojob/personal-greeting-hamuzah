import React,{useState} from "react";


const Child = () => {
    const[name, setName] = useState('')
    const[greeting, setGreeting] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setGreeting(`Hello, ${name}!`)
    }

    return (
        <div>
         <form onSubmit={handleSubmit}>
            <lable>Enter Your Name:</lable>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> 
            <button type="submit">Submit</button>
            <p>{greeting}</p>
         </form>
        </div>

    )
}

export default Child