import React, { useEffect, useState} from 'react'
import './pageCss/about.css'
import Profile from '../images/user-solid.svg'
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    const [userData,setUserData]=useState({})
    const callAboutPage = async () => {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                withCredentials: true
            })

            const data = await res.json()
            setUserData(data)
            
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }

        }catch (error) {
            console.log(error);
            navigate('/login')
        }
    }
    useEffect(() => {
        callAboutPage()
    }, [])
    const {name,email,work,phone,_id}=userData

    return (
        <>
            <div className='about-main mt-5 mb-5' style={{ display: 'flex', "justifyContent": 'space-around' }}>
                {/* ===== ===== Main-Container ===== ===== */}
                <div className="Container">
                    {/* ===== ===== User Main-Profile ===== ===== */}
                    <section className="userProfile card">
                        <div className="profile">
                            <figure><img src={Profile} alt="profile" width="250px" height="250px" /></figure>
                        </div>
                    </section>
                    {/* ===== ===== Work & Skills Section ===== ===== */}
                    <section className="work_skills card">
                        {/* ===== ===== Work Contaienr ===== ===== */}
                        <div className="work">
                            <h1 className="heading">Developer's social media link</h1>
                            <div className="primary">
                                <h1><a href="#">Youtube</a></h1>
                                <h1><a href="#">Instagram</a></h1>
                                <h1><a href="#">LinkedIn</a></h1>
                                <h1><a href="#">Twitter</a></h1>
                                <h1><a href="#">Github</a></h1>
                            </div>

                        </div>
                        {/* <!-- ===== ===== Skills Contaienr ===== ===== --> */}
                        <div className="skills">
                            <h1 className="heading">Developer's Skills</h1>
                            <ul>
                                <li className='li0'>Mern stack</li>
                                <li className='li1' >Web development</li>
                                <li className='li2'>UI/UX</li>
                                <li className='li3'>Game development</li>
                            </ul>
                        </div>
                    </section>


                    {/* <!-- ===== ===== User Details Sections ===== ===== --> */}
                    <section className="userDetails card">
                        <div className="userName">
                            <h1 className="name">{name}</h1>
                            <div className="map">
                                <span>
                                    <input type="sumit" name='btnAddMore' className='btn btn-link px-3 me-2' value={"Edit Profile"} />
                                </span>
                            </div>
                            <p>{work}</p>
                        </div>

                        <div className="rank">
                            <h1 className="heading">Rankings</h1>
                            <span>8,6</span>
                            <div className="rating">
                                <i className="ri-star-fill rate"></i>
                                <i className="ri-star-fill rate"></i>
                                <i className="ri-star-fill rate"></i>
                                <i className="ri-star-fill rate"></i>
                                <i className="ri-star-fill rate underrate"></i>
                            </div>
                        </div>
                    </section>


                    {/* <!-- ===== ===== Timeline & About Sections ===== ===== --> */}
                    <section className="timeline_about card">
                        <div>
                            <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab" aria-controls="ex1-tabs-1" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab" aria-controls="ex1-tabs-2" aria-selected="false">Timeline</a>
                                </li>
                            </ul>
                            {/* Tabs navs */}
                            {/* Tabs content */}
                            <div className="tab-content" id="ex1-content">
                                <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                    <div className="contact_Info">
                                        <ul>
                                            <li className="address">
                                                <div className="label">
                                                    <span className="info">User Id</span>
                                                    <span className="info">{userData._id}</span>
                                                </div>

                                            </li>
                                            <li className="address">
                                                <div className="label">
                                                    <span className="info">Name</span>
                                                    <span className="info">{name}</span>
                                                </div>
                                            </li>
                                            <li className="phone">
                                                <div className="label">
                                                    <span className="info">Phone</span>
                                                    <span className="info">{phone}</span>
                                                </div>
                                            </li>

                                            <li className="email">
                                                <div className="label">
                                                    <span className="info">E-mail</span>
                                                    <span className="info">{email}</span>
                                                </div>
                                            </li>
                                            <li className="site">
                                                <div className="label">
                                                    <span className="info">Profession</span>
                                                    <span className="info">{work}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                    Tab 2 content
                                </div>
                            </div>
                        </div>


                    </section>
                </div>
            </div>
        </>
    )
}

export default About