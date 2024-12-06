import { useState, useTransition } from "react"
import "./Form.css"

const Form = ()=> {
  const[first , setFirst] = useState("")
  const[last , setLast] = useState("")
  const[email , setEmail] = useState("")
  const[phone , setPhone] = useState("")
  const[submit, setSubmit] = useState("")

  const handlefirstname = (event) => {
    setFirst(event.target.value)
  }

  const handlelastname = (event) => {
    setLast(event.target.value)
  }

  const handleemail = (event) => {
    setEmail(event.target.value)
  }

  const handlePhone = (event) => {
    setPhone(event.target.value)
  }

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log("First Name: ", first);
    console.log("Last Name: ", last);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    
  }

return (
        <div className="container">
            <h1>Form in React </h1>
            <form onSubmit={handlesubmit}>
                <label> First Name*</label>
                <input type="text" placeholder="First name" value={first}  onChange={handlefirstname}/>
                <br/>
                <label> Last Name*</label>
                <input type="text" placeholder="Last name" value={last} onChange={handlelastname} />
                <br/>
                <label> Enter Email*</label>
                <input type="email" placeholder="example@email.com" value={email} onChange={handleemail} />
                <br/>
                <label> Contact*</label>
                <input type="number" placeholder="091+" value={phone} onChange={handlePhone}/>
                <br/>
                <input className="btn" value={"Submit"} type="submit"/>
                
            </form>
        </div>
    )
}

export default Form