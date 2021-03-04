import React,{useState} from "react";
import axios from "axios";

const Contact = () => {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        msg: "",
    });

    const [submit, setSubmit] = useState({
        name: "",
        email: "",
        msg: "",
    })

    console.log(submit);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegister((prev) => {
            return ({
                ...prev,
                [name]: value
            });
        })
    };

    const submitFunc = (event) => {
        event.preventDefault();
        console.log("in")
        setSubmit(register)
        axios({
          url:"/contact",
          method:'POST',
          data:register
        }).then(()=>{
          console.log("sucess")
        }).catch((er)=>{
          console.log(register)
          console.log("Error123")
        })
    }
    return (
        <>
            <div id="contact-section">
            <h1 className="center ">Contact Us</h1>
                <div id="contact-box">
                    <form onSubmit={submitFunc}>
                        <div class="form-group">
                            <label for="name">Name: </label>
                            <input type="text" name="name" id="name" value={register.name} onChange={handleChange} placeholder="Enter your name" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email: </label>
                            <input type="email" name="email" id="email" value={register.email} onChange={handleChange} placeholder="Enter your email" />
                        </div>
                        <div class="form-group">
                            <label for="message">Message: </label>
                            <textarea name="msg" id="message" cols="30" value={register.msg} onChange={handleChange} rows="10"></textarea>
                        </div>
                        <div className="form-btn">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;