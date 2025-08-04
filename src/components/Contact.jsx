import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';

function Contact() {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const[loading,setLoading]=useState(false);
  return (
    <section className="contact">
      <form action="">
        <h1>Contact Us</h1>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Message</label>
          <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} />
        </div>
        <button type="submit" disabled={loading}>
          {!loading &&<ClipLoader color='white' size={20}/>}
          Send Data</button>
        
      </form>
    </section>
  )
}

export default Contact