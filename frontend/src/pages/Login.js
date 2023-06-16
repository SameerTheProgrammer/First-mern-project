import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const Login = ({setBtnShow}) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const postLoginData = async (e) => {
        e.preventDefault()
        const loginData = await fetch("/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        console.log("clicked");
        const respond = await loginData.json()
        if (loginData.status === 400) {
            window.alert(respond.error)
        } else {
            window.alert("login successful")
            navigate('/')
        }
        setBtnShow(false)
    }


    return (
        <>
            <section className="d-flex justify-content-center align-items-center mt-5  vh-75">
                <div className="mb-7 bg-white shadow-5-strong container py-5" >
                    <div className="  row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6" >
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5">
                        <h2 className='text-center'>Login</h2>
                            <form>
                                {/* Email input */}
                                <div className="form-outline mb-4">
                                    <input type="email" autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email} id="form1Example13" className="form-control border border-1 border-dark form-control-lg" />
                                    <label className="form-label" htmlFor="form1Example13">Email address</label>
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-4">
                                    <input type="password" autoComplete='off' onChange={(e) => setPassword(e.target.value)} value={password} id="form1Example23" className="form-control border border-1 border-dark form-control-lg" />
                                    <label className="form-label" htmlFor="form1Example23">Password</label>
                                </div>
                                <div className="d-flex justify-content-around align-items-center mb-4">
                                    <NavLink to={"/signup"}>Create an account</NavLink>
                                    <a href="#">Forgot password?{"(Not work)"}</a>
                                </div>
                                {/* Submit button */}
                                <button type="submit" onClick={postLoginData} className="btn btn-primary btn-lg btn-block">Sign in</button>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR{"(Not work)"}</p>
                                </div>
                                <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                                    <i className="fab fa-facebook-f me-2" />Continue with Facebook
                                </a>
                                <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                                    <i className="fab fa-google me-2" />Continue with Google</a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login