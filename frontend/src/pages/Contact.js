import React, { useEffect, useState } from 'react'
import './pageCss/contact.css'
import Location from '../images/location.png';
import Email from '../images/email.png';
import Phone from '../images/phone.png';

const Contact = () => {
    const [userData, setUserData] = useState({ name: "", email: "", message: "", phone: "" })
    const contactPhone = "+91 1234567890"
    const contactEmail = "Example@gmail.com"
    const contactAddress = "Lorem ipsum dolor sit amet consectetur adipisicing"

    const callContactPage = async () => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone, message: data.message })
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        callContactPage()
    }, [])

    const inputHandle = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserData({ ...userData, [name]: value })
    }

    const contactForm = async (e) => {
        e.preventDefault()
        const { name, email, phone, message } = userData
        try {
            const res = await fetch("/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name, email, phone, message
                })
            })
            const data = await res.json()
            if (!data) {
                alert("Message Not send please try Again")
            } else {
                alert("Message sent successfuly")
                setUserData({ ...userData, message: "" })
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="group mb-5 mt-5">
                <div className="group-card">
                    <div className="card">
                        <div className="card-body">
                            <i className="fa-solid fa-phone"></i>
                            <div className="card-body-info">
                                <h5 className="card-title">Phone</h5>
                                <p className="card-text">{contactPhone}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <i className="fa-solid fa-envelope"></i>
                            <div className="card-body-info">
                                <h5 className="card-title">Email</h5>
                                <p className="card-text">{contactEmail}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <i className="fa-solid fa-map-location-dot"></i>
                            <div className="card-body-info">
                                <h5 className="card-title">Address</h5>
                                <p className="card-text">{contactAddress}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-html ">
                <img src="img/shape.png" className="square-html" />
                <div className="form-html">
                    <div className="contact-info-html">
                        <h3 className="title-html">Let's get in touch</h3>
                        <p className="text-html">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                            dolorum adipisci recusandae praesentium dicta!
                        </p>
                        <div className="info-html">
                            <div className="information">
                                <img src={Location} className="icon-html" />
                                <p>{contactAddress}</p>
                            </div>
                            <div className="information">
                                <img src={Email} className="icon-html" />
                                <p>{contactEmail}</p>
                            </div>
                            <div className="information">
                                <img src={Phone} className="icon-html" />
                                <p>{contactPhone}</p>
                            </div>
                        </div>
                        <div className="social-media">
                            <p>Connect with us :</p>
                            <div className="social-icons-html">
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-html">
                        <span className="circle-html one" />
                        <span className="circle-html two" />
                        <form method='POST' autoComplete="off">
                            <h3 className="title-html">Contact us</h3>
                            <div className="input-container-html">
                                <input type="text" value={userData.name} onChange={inputHandle} name="name" className="input" placeholder='User Name' />
                            </div>
                            <div className="input-container-html">
                                <input type="email" value={userData.email} onChange={inputHandle} name="email" className="input" placeholder='example@gmail.com' />
                            </div>
                            <div className="input-container-html">
                                <input type="tel" value={userData.phone} onChange={inputHandle} name="phone" className="input" placeholder='Mobile Number' />
                            </div>
                            <div className="input-container-html textarea">
                                <textarea name="message" value={userData.message} onChange={inputHandle} className="input" placeholder='Message' />
                            </div>
                            <input type="submit" onClick={contactForm} defaultValue="Send" className="btn1" />
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact