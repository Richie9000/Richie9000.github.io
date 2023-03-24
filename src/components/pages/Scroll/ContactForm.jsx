import React from 'react'
import emailjs from "emailjs-com"
import { Breakpoint } from 'react-socks'
import styles from './ContactForm.module.css';

const ContactForm = () => {

  function sendEmail (e) {
    e.preventDefault()
    emailjs.sendForm("service_niwfajc", "template_etrnv2h", e.target, "FmYy1ydMc0Kv_Vt5h")
    .then(res =>{
      console.log(res);
    }).catch(err => {console.log(err)})
  }
  return (
    <div>
    
    

    <div  style={{width:"90%", marginTop: "120px"}}>
      <div style={{ marginTop:"25px", textAlign:"center", fontSize: "35px", }}>Let's talk</div>
      <form className="row" style={{ margin: "25px 85px 75px 100px"}} onSubmit={sendEmail}>
        <label htmlFor="">Name</label>
        <input className="form-control" type="text" name= "user_name"  style={{ backgroundColor: "rgb(255, 208, 208)",width:"90%", marginLeft: "15px"}} />

        <label htmlFor="">Email</label>
        <input className="form-control" type="email" name= "user_email" style={{ backgroundColor: "rgb(255, 208, 208)",width:"90%", marginLeft: "15px"}} />

        <label htmlFor="">Message</label>
        <textarea className="form-control" name="message" rows="4" style={{ backgroundColor: "rgb(255, 208, 208)",width:"90%", marginLeft: "15px"}}/>
        <button className={styles.button} type="submit">Send</button>
        
      </form>
      </div>
    
      <Breakpoint small down>
      <div className="container" style={{width:"50%", marginTop: "100px"}}>
      <h1 style={{ marginTop:"25px", textAlign:"center", fontSize: "30px", paddingLeft: "9px"}}>Let's talk</h1>
      <form className="row" style={{ margin: "25px 85px 75px 90px"}} onSubmit={sendEmail}>
        <label htmlFor="">Name</label>
        <input className="form-control" type="text" name= "user_name"  style={{ backgroundColor: "rgb(255, 208, 208)",width:"90%", marginLeft: "15px"}} />

        <label htmlFor="">Email</label>
        <input className="form-control" type="email" name= "user_email" style={{ backgroundColor: "rgb(255, 208, 208)",width:"90%", marginLeft: "15px"}} />

        <label htmlFor="">Message</label>
        <textarea className="form-control" name="message" rows="4" style={{ backgroundColor: "rgb(255, 208, 208)",width:"90%", marginLeft: "15px"}}/>
        <button className={styles.button} type="submit">Send</button>

        
      </form>
      </div>
      </Breakpoint>
    </div>
  )
}

export default ContactForm