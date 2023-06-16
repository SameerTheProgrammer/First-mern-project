import React, { useState } from 'react'

import { NavLink, useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        work: "",
        phone: "",
        password: "",
        cpassword: ""
    })
    const inputHandler = (val) => {
        const value = val.target.value
        const name = val.target.name
        setData({ ...data, [name]: value })
    }

    const postData = async (e) => {
        e.preventDefault()
        const { name, email, work, phone, password, cpassword } = data
        const registerData = await fetch("/register", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                name: name, email, work, phone, password, cpassword
            })

        })
        const respond = await registerData.json()
        if (registerData.status === 422) {
            window.alert(respond.error)
            console.log("invaild Registration")
        }
        else {
            window.alert("Registration successful")
            console.log("Registration successful")
            navigate('/login')
        }
    }

    return (
        <>
            <section className="mt-5">
                <div className=" signup mb-7 bg-white shadow-5-strong container py-5 h-100">
                    <div className="  row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6 signup-img" >
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                        </div>
                        <div className="signup-form-container col-md-7 col-lg-5 col-xl-5">
                            <h2 className='text-center'>Signup</h2>
                            <form method='post' >
                                <div className="text-center mb-3">
                                    <p>Sign up with:</p>
                                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-facebook-f" />
                                    </button>
                                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-google" />
                                    </button>
                                </div>
                                <p className="text-center">or:</p>
                                {/* Name input */}
                                <div className="form-outline mb-3">
                                    <input type="text" autoComplete={'off'} onChange={inputHandler} value={data.name} name="name" id="registerName" className="form-control border border-1" />
                                    <label className="form-label" htmlFor="registerName">Name</label>
                                </div>
                                {/* Email input */}
                                <div className="form-outline mb-3">
                                    <input type="email" autoComplete={'off'} onChange={inputHandler} value={data.email} name="email" id="registerEmail" className="form-control border border-1" />
                                    <label className="form-label" htmlFor="registerEmail">Email</label>
                                </div>
                                {/* Profession input */}
                                <div className="form-outline mb-3">
                                    <input type="text" autoComplete={'off'} onChange={inputHandler} value={data.profession} name="work" id="registerProfession" className="form-control border border-1" />
                                    <label className="form-label" htmlFor="registerProfession">Profession</label>
                                </div>
                                {/* Phone Number input */}
                                <div className="form-outline mb-3">
                                    <input type="number" autoComplete={'off'} onChange={inputHandler} value={data.phone} name="phone" id="registerPhone" className="form-control border border-1" />
                                    <label className="form-label" htmlFor="registerPhone">Phone Number</label>
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-3">
                                    <input type="password" autoComplete={'off'} onChange={inputHandler} value={data.password} name="password" id="registerPassword" className="form-control border border-1" />
                                    <label className="form-label" htmlFor="registerPassword">Password</label>
                                </div>
                                {/* Repeat Password input */}
                                <div className="form-outline mb-3">
                                    <input type="password" autoComplete={'off'} onChange={inputHandler} value={data.cpassword} name='cpassword' id="registerRepeatPassword" className="form-control border border-1" />
                                    <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                                </div>
                                {/* Checkbox */}
                                <div className="form-check d-flex justify-content-center mb-4">
                                    <NavLink to={"/login"}>I have account</NavLink>
                                </div>
                                {/* Submit button */}
                                <button type="submit" onClick={postData} className="btn btn-primary btn-block mb-3">Sign in</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Signup